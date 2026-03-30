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


// ====== PDF EXPORT (html2canvas approach for Vietnamese support) ======
export const exportToPDF = async () => {
  const data = loadAppData();
  const { default: html2canvas } = await import('html2canvas');
  const { default: jsPDF } = await import('jspdf');

  const today = new Date().toLocaleDateString('vi-VN');

  // Build session table rows HTML
  const sessionRowsHtml = data.sessions.length > 0
    ? data.sessions.slice().reverse().map((s, i) => {
        const scoreColor = s.score >= 80 ? '#16a34a' : s.score >= 50 ? '#ea580c' : '#dc2626';
        const scoreBg = s.score >= 80 ? '#f0fdf4' : s.score >= 50 ? '#fff7ed' : '#fef2f2';
        return `<tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 12px; text-align: center; color: #475569;">${i + 1}</td>
          <td style="padding: 10px 12px; color: #334155;">${new Date(s.date).toLocaleDateString('vi-VN')}</td>
          <td style="padding: 10px 12px; font-weight: 600; color: #1e293b;">${s.subjectId}</td>
          <td style="padding: 10px 12px; text-align: center;">
            <span style="background: ${scoreBg}; color: ${scoreColor}; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 700;">${s.correctAnswers}/${s.totalQuestions} Đúng</span>
          </td>
          <td style="padding: 10px 12px; text-align: center; font-weight: 700; color: ${scoreColor}; font-size: 15px;">${s.score}</td>
        </tr>`;
      }).join('')
    : `<tr><td colspan="5" style="padding: 30px; text-align: center; color: #94a3b8; font-style: italic;">Chưa có dữ liệu thực hành.</td></tr>`;

  // Build weak topics HTML
  const weakTopicsHtml = data.progress.weakTopics.length > 0
    ? `<div style="margin-top: 24px;">
        <h3 style="color: #ea580c; font-size: 16px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span style="background: #fff7ed; padding: 4px 8px; border-radius: 6px;">⚠️</span> CHUYÊN KHOA CẦN CẢI THIỆN
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${data.progress.weakTopics.map(t => `<span style="background: #fff7ed; border: 1px solid #fed7aa; color: #c2410c; padding: 6px 14px; border-radius: 8px; font-size: 13px; font-weight: 600;">▸ ${t}</span>`).join('')}
        </div>
      </div>`
    : '';

  // Build complete HTML report
  const htmlContent = `
    <div id="pdf-report" style="width: 780px; padding: 40px; font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background: white; color: #1e293b; line-height: 1.5;">
      
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 3px solid #2563eb;">
        <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; font-weight: 800; letter-spacing: 1px; margin-bottom: 8px;">
          BÁO CÁO TIẾN ĐỘ HỌC TẬP
        </div>
        <div style="color: #64748b; font-size: 13px;">
          MedSim — Mô phỏng chẩn đoán lâm sàng &nbsp;|&nbsp; Ngày xuất: ${today}
        </div>
      </div>

      <!-- Stats Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 16px; margin-bottom: 28px;">
        <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe; border-radius: 12px; padding: 18px; text-align: center;">
          <div style="font-size: 28px; font-weight: 800; color: #2563eb;">${data.progress.totalAttempts}</div>
          <div style="font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px;">Tổng lượt thực hành</div>
        </div>
        <div style="background: linear-gradient(135deg, #fff7ed, #ffedd5); border: 1px solid #fed7aa; border-radius: 12px; padding: 18px; text-align: center;">
          <div style="font-size: 28px; font-weight: 800; color: #ea580c;">${Math.round(data.progress.averageScore)}%</div>
          <div style="font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px;">Điểm trung bình</div>
        </div>
        <div style="background: linear-gradient(135deg, #fef2f2, #fecaca); border: 1px solid #fca5a5; border-radius: 12px; padding: 18px; text-align: center;">
          <div style="font-size: 28px; font-weight: 800; color: #dc2626;">${data.progress.streakDays}</div>
          <div style="font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px;">Chuỗi ngày học</div>
        </div>
        <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 18px; text-align: center;">
          <div style="font-size: 28px; font-weight: 800; color: #16a34a;">${data.cases.length}</div>
          <div style="font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px;">Ca bệnh sẵn có</div>
        </div>
      </div>

      ${weakTopicsHtml}

      <!-- Session History Table -->
      <div style="margin-top: 28px;">
        <h3 style="color: #2563eb; font-size: 16px; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
          <span style="background: #eff6ff; padding: 4px 8px; border-radius: 6px;">📋</span> LỊCH SỬ THỰC HÀNH
        </h3>
        <table style="width: 100%; border-collapse: collapse; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
          <thead>
            <tr style="background: linear-gradient(135deg, #2563eb, #1d4ed8);">
              <th style="padding: 12px; color: white; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; text-align: center; font-weight: 700;">STT</th>
              <th style="padding: 12px; color: white; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; text-align: left; font-weight: 700;">Ngày</th>
              <th style="padding: 12px; color: white; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; text-align: left; font-weight: 700;">Chuyên khoa</th>
              <th style="padding: 12px; color: white; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; text-align: center; font-weight: 700;">Kết quả</th>
              <th style="padding: 12px; color: white; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; text-align: center; font-weight: 700;">Điểm</th>
            </tr>
          </thead>
          <tbody>
            ${sessionRowsHtml}
          </tbody>
        </table>
      </div>

      <!-- Footer -->
      <div style="margin-top: 36px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 11px; font-style: italic;">
        — Xuất từ MedSim © 2026 —
      </div>
    </div>
  `;

  // Create a hidden container and render the HTML
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.zIndex = '-1';
  container.innerHTML = htmlContent;
  document.body.appendChild(container);

  const reportElement = container.querySelector('#pdf-report') as HTMLElement;

  try {
    // Render HTML to canvas using the browser's font engine (full Vietnamese support)
    const canvas = await html2canvas(reportElement, {
      scale: 2, // High resolution
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    // Calculate PDF dimensions from canvas
    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = 210; // A4 width in mm
    const pdfMargin = 10;
    const contentWidth = pdfWidth - (pdfMargin * 2);
    const imgHeight = (canvas.height * contentWidth) / canvas.width;
    const pageHeight = 297; // A4 height in mm
    const contentHeight = pageHeight - (pdfMargin * 2);

    const doc = new jsPDF('p', 'mm', 'a4');

    // Handle multi-page: if content is taller than one page
    let heightRemaining = imgHeight;
    let position = pdfMargin;
    let page = 0;

    while (heightRemaining > 0) {
      if (page > 0) {
        doc.addPage();
      }
      
      // Use negative y offset to "scroll" through the image
      doc.addImage(
        imgData,
        'PNG',
        pdfMargin,
        position - (page * contentHeight),
        contentWidth,
        imgHeight
      );
      
      heightRemaining -= contentHeight;
      page++;
    }

    doc.save(`MedSim_BaoCao_${new Date().toISOString().split('T')[0]}.pdf`);
  } finally {
    // Clean up the hidden container
    document.body.removeChild(container);
  }
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
