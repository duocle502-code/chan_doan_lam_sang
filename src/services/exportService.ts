import { AppData } from '../types';
import { loadAppData } from './storage';

// ====== WORD EXPORT (.docx) ======
export const exportToWord = async () => {
  const data = loadAppData();
  const { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun, WidthType, AlignmentType, BorderStyle, HeadingLevel, ShadingType } = await import('docx');

  const today = new Date().toLocaleDateString('vi-VN');

  // Build session rows
  const sessionHeaderRow = new TableRow({
    tableHeader: true,
    children: ['STT', 'Ngày', 'Chuyên khoa', 'Kết quả', 'Điểm'].map(text =>
      new TableCell({
        shading: { type: ShadingType.SOLID, color: '2563EB' },
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text, bold: true, color: 'FFFFFF', font: 'Arial', size: 20 })]
        })],
      })
    ),
  });

  const sessionRows = data.sessions.length > 0
    ? data.sessions.slice().reverse().map((s, i) =>
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${i + 1}`, font: 'Arial', size: 20 })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: new Date(s.date).toLocaleDateString('vi-VN'), font: 'Arial', size: 20 })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: s.subjectId, font: 'Arial', size: 20 })] })] }),
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${s.correctAnswers}/${s.totalQuestions} Đúng`, font: 'Arial', size: 20, color: s.score >= 80 ? '16A34A' : s.score >= 50 ? 'EA580C' : 'DC2626' })] })] }),
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${s.score}`, bold: true, font: 'Arial', size: 20, color: s.score >= 80 ? '16A34A' : s.score >= 50 ? 'EA580C' : 'DC2626' })] })] }),
          ],
        })
      )
    : [new TableRow({
        children: [new TableCell({
          columnSpan: 5,
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Chưa có dữ liệu thực hành.', font: 'Arial', size: 20, italics: true, color: '94A3B8' })] })]
        })]
      })];

  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: 'BÁO CÁO TIẾN ĐỘ HỌC TẬP', bold: true, font: 'Arial', size: 36, color: '1E3A5F' })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [new TextRun({ text: `MedSim - Mô phỏng chẩn đoán lâm sàng | Ngày xuất: ${today}`, font: 'Arial', size: 20, color: '64748B' })],
        }),

        // Summary section
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 300, after: 200 },
          children: [new TextRun({ text: '📊 TỔNG QUAN TIẾN ĐỘ', bold: true, font: 'Arial', size: 28, color: '2563EB' })],
        }),
        new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `• Tổng lượt thực hành: `, font: 'Arial', size: 22 }), new TextRun({ text: `${data.progress.totalAttempts}`, bold: true, font: 'Arial', size: 22, color: '2563EB' })] }),
        new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `• Điểm trung bình: `, font: 'Arial', size: 22 }), new TextRun({ text: `${Math.round(data.progress.averageScore)}%`, bold: true, font: 'Arial', size: 22, color: 'EA580C' })] }),
        new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `• Chuỗi ngày học: `, font: 'Arial', size: 22 }), new TextRun({ text: `${data.progress.streakDays} ngày`, bold: true, font: 'Arial', size: 22, color: 'DC2626' })] }),
        new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `• Tổng ca bệnh có sẵn: `, font: 'Arial', size: 22 }), new TextRun({ text: `${data.cases.length}`, bold: true, font: 'Arial', size: 22, color: '16A34A' })] }),

        // Weak topics
        ...(data.progress.weakTopics.length > 0 ? [
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
            children: [new TextRun({ text: '⚠️ CHUYÊN KHOA CẦN CẢI THIỆN', bold: true, font: 'Arial', size: 28, color: 'EA580C' })],
          }),
          ...data.progress.weakTopics.map(topic =>
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `  ▸ ${topic}`, font: 'Arial', size: 22, color: 'EA580C' })] })
          ),
        ] : []),

        // Session history
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
          children: [new TextRun({ text: '📋 LỊCH SỬ THỰC HÀNH', bold: true, font: 'Arial', size: 28, color: '2563EB' })],
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [sessionHeaderRow, ...sessionRows],
        }),

        // Footer
        new Paragraph({
          spacing: { before: 600 },
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: '— Xuất từ MedSim © 2026 —', font: 'Arial', size: 18, color: '94A3B8', italics: true })],
        }),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  downloadBlob(blob, `MedSim_BaoCao_${new Date().toISOString().split('T')[0]}.docx`);
};


// ====== PDF EXPORT ======
export const exportToPDF = async () => {
  const data = loadAppData();
  const { default: jsPDF } = await import('jspdf');
  const { default: autoTable } = await import('jspdf-autotable');

  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const today = new Date().toLocaleDateString('vi-VN');

  // Title
  doc.setFontSize(22);
  doc.setTextColor(30, 58, 95);
  doc.text('BAO CAO TIEN DO HOC TAP', pageWidth / 2, 25, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text(`MedSim - Mo phong chan doan lam sang | Ngay xuat: ${today}`, pageWidth / 2, 33, { align: 'center' });

  // Divider line 
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.line(20, 37, pageWidth - 20, 37);

  // Summary
  let y = 47;
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text('TONG QUAN TIEN DO', 20, y);
  y += 10;

  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  const summaryItems = [
    `Tong luot thuc hanh: ${data.progress.totalAttempts}`,
    `Diem trung binh: ${Math.round(data.progress.averageScore)}%`,
    `Chuoi ngay hoc: ${data.progress.streakDays} ngay`,
    `Tong ca benh co san: ${data.cases.length}`,
  ];
  summaryItems.forEach(item => {
    doc.text(`•  ${item}`, 25, y);
    y += 7;
  });

  // Weak topics
  if (data.progress.weakTopics.length > 0) {
    y += 5;
    doc.setFontSize(14);
    doc.setTextColor(234, 88, 12);
    doc.text('CHUYEN KHOA CAN CAI THIEN', 20, y);
    y += 10;
    doc.setFontSize(11);
    data.progress.weakTopics.forEach(topic => {
      doc.text(`▸  ${topic}`, 25, y);
      y += 7;
    });
  }

  // Session history table
  y += 8;
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text('LICH SU THUC HANH', 20, y);
  y += 5;

  if (data.sessions.length > 0) {
    const tableData = data.sessions.slice().reverse().map((s, i) => [
      `${i + 1}`,
      new Date(s.date).toLocaleDateString('vi-VN'),
      s.subjectId,
      `${s.correctAnswers}/${s.totalQuestions} Dung`,
      `${s.score}`,
    ]);

    autoTable(doc, {
      startY: y,
      head: [['STT', 'Ngay', 'Chuyen khoa', 'Ket qua', 'Diem']],
      body: tableData,
      styles: {
        fontSize: 10,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [37, 99, 235],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        halign: 'center',
      },
      alternateRowStyles: {
        fillColor: [241, 245, 249],
      },
      columnStyles: {
        0: { halign: 'center', cellWidth: 15 },
        3: { halign: 'center' },
        4: { halign: 'center', cellWidth: 20 },
      },
      didParseCell: (hookData: any) => {
        if (hookData.section === 'body' && hookData.column.index === 4) {
          const score = parseInt(hookData.cell.raw as string);
          if (score >= 80) hookData.cell.styles.textColor = [22, 163, 74];
          else if (score >= 50) hookData.cell.styles.textColor = [234, 88, 12];
          else hookData.cell.styles.textColor = [220, 38, 38];
          hookData.cell.styles.fontStyle = 'bold';
        }
      },
    });
  } else {
    y += 10;
    doc.setFontSize(11);
    doc.setTextColor(148, 163, 184);
    doc.text('Chua co du lieu thuc hanh.', pageWidth / 2, y, { align: 'center' });
  }

  // Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text('Xuat tu MedSim © 2026', pageWidth / 2, pageHeight - 10, { align: 'center' });

  doc.save(`MedSim_BaoCao_${new Date().toISOString().split('T')[0]}.pdf`);
};


// ====== JSON EXPORT (existing) ======
export const exportToJSON = () => {
  const data = loadAppData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `medsim_backup_${new Date().toISOString().split('T')[0]}.json`);
};


// Helper
function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
