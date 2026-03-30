import { ClinicalCase } from '../types';

export const DEMO_CASES: ClinicalCase[] = [
  {
    id: 'case-1',
    title: 'Đau ngực cấp tính',
    specialty: 'Tim mạch',
    difficulty: 'medium',
    patientInfo: {
      age: 58,
      gender: 'Nam',
      chiefComplaint: 'Đau ngực trái dữ dội sau xương ức.',
      history: 'Bệnh nhân có tiền sử tăng huyết áp 10 năm, hút thuốc lá 20 gói-năm. Đau bắt đầu cách đây 2 giờ khi đang làm việc, đau lan lên vai trái và hàm dưới, kèm vã mồ hôi.'
    },
    physicalExam: 'Bệnh nhân tỉnh, lo lắng, vã mồ hôi. HA 150/90 mmHg, Mạch 95 lần/phút. Tim đều, không âm thổi. Phổi trong.',
    labTests: [
      { id: 'ecg', name: 'Điện tâm đồ (ECG)', result: 'ST chênh lên ở các chuyển đạo V1-V4.', normalRange: 'Bình thường', cost: 100 },
      { id: 'troponin', name: 'Troponin T', result: '0.8 ng/mL', normalRange: '< 0.01 ng/mL', cost: 200 },
      { id: 'cxr', name: 'X-quang ngực thẳng', result: 'Bóng tim không to, phổi không ứ huyết.', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Nhồi máu cơ tim cấp ST chênh lên (STEMI) vùng trước' },
      { id: 'd2', text: 'Phình tách động mạch chủ ngực' },
      { id: 'd3', text: 'Viêm màng ngoài tim cấp' },
      { id: 'd4', text: 'Tràn khí màng phổi áp lực' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Can thiệp mạch vành qua da (PCI) cấp cứu' },
      { id: 't2', text: 'Điều trị nội khoa bảo tồn với Aspirin và Heparin' },
      { id: 't3', text: 'Phẫu thuật thay đoạn động mạch chủ' },
      { id: 't4', text: 'Dẫn lưu màng phổi' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân nam lớn tuổi, có yếu tố nguy cơ tim mạch (THA, hút thuốc), lâm sàng điển hình của hội chứng mạch vành cấp. ECG có ST chênh lên ở V1-V4 xác định chẩn đoán STEMI vùng trước. Xử trí ưu tiên là tái thông mạch vành càng sớm càng tốt bằng PCI.'
  },
  {
    id: 'case-2',
    title: 'Sốt và đau bụng hố chậu phải',
    specialty: 'Ngoại tổng quát',
    difficulty: 'easy',
    patientInfo: {
      age: 22,
      gender: 'Nữ',
      chiefComplaint: 'Đau bụng vùng quanh rốn sau đó khu trú về hố chậu phải.',
      history: 'Đau bắt đầu cách đây 12 giờ, kèm buồn nôn và sốt nhẹ 38 độ C. Không có tiền sử bệnh lý đặc biệt.'
    },
    physicalExam: 'Bụng mềm, ấn đau và có phản ứng thành bụng vùng hố chậu phải. Điểm McBurney (+).',
    labTests: [
      { id: 'cbc', name: 'Công thức máu (CBC)', result: 'WBC 14.5 G/L, Neutrophil 85%.', normalRange: 'WBC 4-10 G/L', cost: 50 },
      { id: 'us', name: 'Siêu âm bụng', result: 'Hình ảnh ruột thừa đường kính 8mm, ấn không xẹp, có ít dịch xung quanh.', normalRange: 'Ruột thừa < 6mm', cost: 100 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm ruột thừa cấp' },
      { id: 'd2', text: 'Viêm phần phụ' },
      { id: 'd3', text: 'Sỏi niệu quản phải' },
      { id: 'd4', text: 'Viêm túi thừa Meckel' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Phẫu thuật cắt ruột thừa (nội soi hoặc mổ mở)' },
      { id: 't2', text: 'Điều trị kháng sinh đơn thuần' },
      { id: 't3', text: 'Theo dõi sát tại khoa ngoại' },
      { id: 't4', text: 'Tán sỏi ngoài cơ thể' }
    ],
    correctTreatment: 't1',
    explanation: 'Lâm sàng điển hình của viêm ruột thừa cấp (đau di chuyển, điểm McBurney dương tính, hội chứng nhiễm trùng). Cận lâm sàng (WBC tăng, siêu âm có hình ảnh ruột thừa viêm) ủng hộ chẩn đoán. Phẫu thuật cắt ruột thừa là tiêu chuẩn vàng.'
  },
  {
    id: 'case-3',
    title: 'Yếu nửa người trái đột ngột',
    specialty: 'Thần kinh',
    difficulty: 'medium',
    patientInfo: {
      age: 65,
      gender: 'Nam',
      chiefComplaint: 'Yếu nửa người trái, méo miệng.',
      history: 'Đang ăn cơm thì đột ngột rơi bát, yếu tay và chân trái, nói khó. Tiền sử rung nhĩ không điều trị thuốc chống đông thường xuyên.'
    },
    physicalExam: 'Tỉnh, Glasgow 15đ. Liệt mặt trung ương trái. Sức cơ tay trái 1/5, chân trái 2/5. Phản xạ gân xương tăng bên trái. Babinski (+) bên trái.',
    labTests: [
      { id: 'ct', name: 'CT Scanner sọ não không cản quang', result: 'Chưa thấy hình ảnh xuất huyết não. Dấu hiệu sớm của nhồi máu não vùng bao trong phải.', normalRange: 'Bình thường', cost: 500 },
      { id: 'glucose', name: 'Đường huyết mao mạch', result: '6.5 mmol/L', normalRange: '3.9 - 6.4 mmol/L', cost: 10 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Nhồi máu não cấp' },
      { id: 'd2', text: 'Xuất huyết não' },
      { id: 'd3', text: 'Hạ đường huyết' },
      { id: 'd4', text: 'U não' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc tiêu sợi huyết (rTPA) nếu trong cửa sổ thời gian' },
      { id: 't2', text: 'Phẫu thuật lấy khối máu tụ' },
      { id: 't3', text: 'Truyền Glucose ưu trương' },
      { id: 't4', text: 'Chụp mạch và can thiệp lấy huyết khối cơ học' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân có khởi phát đột ngột các dấu hiệu thần kinh khu trú, tiền sử rung nhĩ là yếu tố nguy cơ cao của tắc mạch não. CT loại trừ xuất huyết não giúp khẳng định nhồi máu não. rTPA là lựa chọn hàng đầu nếu bệnh nhân đến sớm trong vòng 4.5 giờ.'
  },
  {
    id: 'case-4',
    title: 'Sốt, ho khạc đờm mủ',
    specialty: 'Hô hấp',
    difficulty: 'easy',
    patientInfo: {
      age: 45,
      gender: 'Nữ',
      chiefComplaint: 'Sốt cao, ho khạc đờm màu rỉ sắt.',
      history: 'Bệnh diễn biến 3 ngày nay, bắt đầu bằng rét run, sau đó sốt cao 39-40 độ, ho nhiều đờm đặc, đau ngực kiểu màng phổi bên phải.'
    },
    physicalExam: 'Hội chứng đông đặc phổi phải (Rung thanh tăng, gõ đục, rì rào phế nang giảm, có rale ẩm nổ khu trú đáy phổi phải).',
    labTests: [
      { id: 'cxr', name: 'X-quang phổi thẳng', result: 'Đám mờ hình tam giác đáy quay ra ngoài ở thùy dưới phổi phải.', normalRange: 'Bình thường', cost: 150 },
      { id: 'cbc', name: 'Công thức máu', result: 'WBC 16 G/L, Neutrophil 88%.', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm phổi thùy' },
      { id: 'd2', text: 'Lao phổi cấp tính' },
      { id: 'd3', text: 'Áp xe phổi' },
      { id: 'd4', text: 'Tràn dịch màng phổi' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Kháng sinh đường tĩnh mạch (Cephalosporin thế hệ 3 + Macrolide)' },
      { id: 't2', text: 'Điều trị phác đồ chống lao' },
      { id: 't3', text: 'Chọc hút dẫn lưu mủ' },
      { id: 't4', text: 'Phẫu thuật cắt thùy phổi' }
    ],
    correctTreatment: 't1',
    explanation: 'Lâm sàng điển hình của viêm phổi thùy với hội chứng nhiễm trùng cấp và hội chứng đông đặc phổi. X-quang phổi xác nhận tổn thương thùy dưới phổi phải. Kháng sinh phổ rộng là điều trị căn bản.'
  },
  {
    id: 'case-5',
    title: 'Hôn mê ở bệnh nhân Đái tháo đường',
    specialty: 'Nội tiết',
    difficulty: 'hard',
    patientInfo: {
      age: 30,
      gender: 'Nữ',
      chiefComplaint: 'Lơ mơ, thở nhanh sâu.',
      history: 'Tiền sử Đái tháo đường typ 1. 2 ngày nay bỏ tiêm Insulin do mệt mỏi, ăn uống kém.'
    },
    physicalExam: 'Hơi thở có mùi trái cây (mùi táo chín). Thở kiểu Kussmaul. Dấu hiệu mất nước rõ (mắt trũng, da khô). HA 90/60 mmHg, Mạch 110 lần/phút.',
    labTests: [
      { id: 'glucose', name: 'Đường huyết', result: '28 mmol/L', normalRange: '3.9 - 6.4 mmol/L', cost: 20 },
      { id: 'abg', name: 'Khí máu động mạch', result: 'pH 7.1, HCO3- 10 mmol/L, PaCO2 25 mmHg.', normalRange: 'pH 7.35-7.45', cost: 300 },
      { id: 'ketone', name: 'Ceton niệu', result: '(+++)', normalRange: 'Âm tính', cost: 30 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Nhiễm toan ceton do đái tháo đường (DKA)' },
      { id: 'd2', text: 'Hôn mê tăng áp lực thẩm thấu (HHS)' },
      { id: 'd3', text: 'Hôn mê do hạ đường huyết' },
      { id: 'd4', text: 'Nhiễm toan lactic' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Bù dịch đẳng trương + Insulin tĩnh mạch liều thấp + Bù Kali' },
      { id: 't2', text: 'Tiêm Glucose ưu trương ngay lập tức' },
      { id: 't3', text: 'Truyền Bicarbonate liều cao' },
      { id: 't4', text: 'Lọc máu cấp cứu' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân ĐTĐ typ 1 bỏ thuốc, có tam chứng: Đường huyết tăng, Toan chuyển hóa (pH thấp, HCO3 thấp) và Ceton niệu dương tính. Đây là tình trạng cấp cứu nội tiết DKA. Ưu tiên hàng đầu là bù dịch và Insulin.'
  },
  {
    id: 'case-6',
    title: 'Đau bụng cấp vùng thượng vị',
    specialty: 'Tiêu hóa',
    difficulty: 'medium',
    patientInfo: {
      age: 40,
      gender: 'Nam',
      chiefComplaint: 'Đau bụng dữ dội vùng thượng vị sau bữa ăn thịnh soạn.',
      history: 'Đau khởi phát đột ngột, đau như dao đâm, lan ra sau lưng, kèm nôn nhiều nhưng không đỡ đau. Tiền sử uống rượu nhiều.'
    },
    physicalExam: 'Bụng chướng nhẹ, ấn đau thượng vị, có phản ứng thành bụng. Dấu hiệu Cullen và Grey-Turner âm tính.',
    labTests: [
      { id: 'amylase', name: 'Amylase máu', result: '1200 U/L', normalRange: '< 100 U/L', cost: 100 },
      { id: 'lipase', name: 'Lipase máu', result: '1500 U/L', normalRange: '< 60 U/L', cost: 120 },
      { id: 'ct', name: 'CT bụng có cản quang', result: 'Tụy sưng nề, thâm nhiễm mỡ quanh tụy, có dịch ổ bụng.', normalRange: 'Bình thường', cost: 800 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm tụy cấp' },
      { id: 'd2', text: 'Thủng tạng rỗng' },
      { id: 'd3', text: 'Nhồi máu cơ tim vùng hoành' },
      { id: 'd4', text: 'Tắc mật do sỏi' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Nhịn ăn, bù dịch liều cao, giảm đau, theo dõi sát' },
      { id: 't2', text: 'Mổ nội soi khâu lỗ thủng' },
      { id: 't3', text: 'Can thiệp mạch vành cấp cứu' },
      { id: 't4', text: 'Tán sỏi qua nội soi mật tụy ngược dòng (ERCP)' }
    ],
    correctTreatment: 't1',
    explanation: 'Đau bụng kiểu tụy (sau ăn, lan sau lưng) kèm Amylase/Lipase tăng trên 3 lần giới hạn trên bình thường xác định chẩn đoán Viêm tụy cấp. Điều trị chủ yếu là nội khoa: nhịn ăn để tụy nghỉ ngơi và bù dịch.'
  },
  {
    id: 'case-7',
    title: 'Sốt cao đột ngột và xuất huyết da',
    specialty: 'Truyền nhiễm',
    difficulty: 'easy',
    patientInfo: {
      age: 28,
      gender: 'Nam',
      chiefComplaint: 'Sốt cao liên tục 4 ngày, đau đầu, đau hốc mắt.',
      history: 'Sốt cao 39-40 độ, uống hạ sốt chỉ giảm nhẹ rồi sốt lại. Hôm nay xuất hiện các chấm đỏ dưới da chân.'
    },
    physicalExam: 'Tỉnh, sốt 38.5 độ. Nghiệm pháp dây thắt (+). Gan to 2cm dưới bờ sườn, ấn đau.',
    labTests: [
      { id: 'cbc', name: 'Công thức máu', result: 'HCT 48%, Tiểu cầu 45 G/L, Bạch cầu 3.2 G/L.', normalRange: 'PLT 150-400 G/L', cost: 50 },
      { id: 'ns1', name: 'Test nhanh NS1', result: 'Dương tính (+)', normalRange: 'Âm tính', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Sốt xuất huyết Dengue' },
      { id: 'd2', text: 'Sốt rét' },
      { id: 'd3', text: 'Nhiễm khuẩn huyết' },
      { id: 'd4', text: 'Sốt phát ban do virus' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Bù dịch đường uống (Oresol), hạ sốt Paracetamol, theo dõi dấu hiệu cảnh báo' },
      { id: 't2', text: 'Kháng sinh phổ rộng đường tĩnh mạch' },
      { id: 't3', text: 'Thuốc kháng sốt rét đặc hiệu' },
      { id: 't4', text: 'Truyền tiểu cầu cấp cứu' }
    ],
    correctTreatment: 't1',
    explanation: 'Sốt cao cấp tính kèm giảm tiểu cầu và cô đặc máu (HCT tăng) ở vùng dịch tễ gợi ý mạnh Sốt xuất huyết. Test NS1 (+) khẳng định chẩn đoán. Đa số điều trị ngoại trú bằng bù dịch và hạ sốt.'
  },
  {
    id: 'case-8',
    title: 'Khó thở, khò khè ở trẻ em',
    specialty: 'Nhi khoa',
    difficulty: 'medium',
    patientInfo: {
      age: 6,
      gender: 'Nữ',
      chiefComplaint: 'Khó thở, ho nhiều về đêm.',
      history: 'Trẻ có tiền sử viêm mũi dị ứng. Đêm qua trẻ đột ngột khó thở, nghe tiếng khò khè rõ, ho khan liên tục.'
    },
    physicalExam: 'Trẻ tỉnh, nói được câu ngắn. Nhịp thở 35 lần/phút, có co kéo cơ liên sườn. Phổi nghe nhiều rale rít, rale ngáy lan tỏa 2 phế trường.',
    labTests: [
      { id: 'pef', name: 'Lưu lượng đỉnh (PEF)', result: 'Giảm 40% so với giá trị dự đoán.', normalRange: '100%', cost: 20 },
      { id: 'cxr', name: 'X-quang phổi', result: 'Hình ảnh ứ khí 2 phế trường, vòm hoành hạ thấp.', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Cơn hen phế quản cấp' },
      { id: 'd2', text: 'Viêm tiểu phế quản' },
      { id: 'd3', text: 'Dị vật đường thở' },
      { id: 'd4', text: 'Viêm phổi' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Xịt/Khí dung thuốc giãn phế quản (Salbutamol) + Corticoid đường uống' },
      { id: 't2', text: 'Kháng sinh liều cao' },
      { id: 't3', text: 'Nội soi phế quản lấy dị vật' },
      { id: 't4', text: 'Vỗ rung lồng ngực' }
    ],
    correctTreatment: 't1',
    explanation: 'Trẻ có cơ địa dị ứng, khó thở kiểu hen (khò khè, rale rít). Đáp ứng với thuốc giãn phế quản là đặc điểm quan trọng của hen. Xử trí ưu tiên là cắt cơn bằng thuốc giãn phế quản tác dụng nhanh.'
  },
  {
    id: 'case-9',
    title: 'Đau bụng dưới và trễ kinh',
    specialty: 'Sản phụ khoa',
    difficulty: 'hard',
    patientInfo: {
      age: 28,
      gender: 'Nữ',
      chiefComplaint: 'Đau bụng dưới đột ngột, dữ dội, kèm ra máu âm đạo ít.',
      history: 'Trễ kinh 2 tuần. Sáng nay đang đi làm thì đau nhói bụng dưới, cảm giác muốn đại tiện, người mệt, vã mồ hôi.'
    },
    physicalExam: 'Da xanh, niêm mạc nhợt. HA 85/50 mmHg, Mạch 120 lần/phút. Bụng có phản ứng màng bụng. Khám phụ khoa: túi cùng sau căng đau.',
    labTests: [
      { id: 'hcg', name: 'Beta-hCG máu', result: '2500 mUI/mL', normalRange: '< 5 mUI/mL', cost: 150 },
      { id: 'us', name: 'Siêu âm đầu dò âm đạo', result: 'Tử cung trống, có khối hỗn hợp ở cạnh tử cung phải, nhiều dịch tự do ổ bụng.', normalRange: 'Bình thường', cost: 200 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Chửa ngoài tử cung vỡ' },
      { id: 'd2', text: 'Dọa sảy thai' },
      { id: 'd3', text: 'U nang buồng trứng xoắn' },
      { id: 'd4', text: 'Viêm ruột thừa cấp' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Mổ cấp cứu cầm máu và cắt vòi tử cung' },
      { id: 't2', text: 'Điều trị nội khoa bằng Methotrexate' },
      { id: 't3', text: 'Nằm nghỉ tại giường và theo dõi' },
      { id: 't4', text: 'Nạo buồng tử cung' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân nữ trong độ tuổi sinh đẻ, trễ kinh, đau bụng cấp và có dấu hiệu sốc mất máu. Siêu âm thấy dịch ổ bụng và tử cung trống kèm hCG (+) khẳng định chửa ngoài tử cung vỡ. Đây là cấp cứu ngoại khoa tối khẩn cấp.'
  },
  {
    id: 'case-10',
    title: 'Phù và tiểu ít',
    specialty: 'Thận học',
    difficulty: 'medium',
    patientInfo: {
      age: 50,
      gender: 'Nam',
      chiefComplaint: 'Phù toàn thân, tiểu ít, nước tiểu có nhiều bọt.',
      history: 'Phù bắt đầu từ mặt sau đó xuống chân, phù trắng, mềm, ấn lõm. Tiền sử Đái tháo đường 15 năm.'
    },
    physicalExam: 'Phù toàn thân rõ. HA 160/100 mmHg. Phổi có rale ẩm đáy phổi. Gan không to.',
    labTests: [
      { id: 'protein', name: 'Protein niệu 24h', result: '6.5 g/24h', normalRange: '< 0.15 g/24h', cost: 100 },
      { id: 'albumin', name: 'Albumin máu', result: '22 g/L', normalRange: '35-50 g/L', cost: 50 },
      { id: 'creatinine', name: 'Creatinine máu', result: '150 umol/L', normalRange: '62-115 umol/L', cost: 30 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Hội chứng thận hư' },
      { id: 'd2', text: 'Suy tim sung huyết' },
      { id: 'd3', text: 'Xơ gan mất bù' },
      { id: 'd4', text: 'Viêm cầu thận cấp' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Corticoid + Lợi tiểu + Kiểm soát huyết áp và đường huyết' },
      { id: 't2', text: 'Trợ tim Digoxin + Lợi tiểu' },
      { id: 't3', text: 'Truyền Albumin liều cao kéo dài' },
      { id: 't4', text: 'Chạy thận nhân tạo chu kỳ' }
    ],
    correctTreatment: 't1',
    explanation: 'Phù kiểu thận kèm Protein niệu ngưỡng thận hư (>3.5g/24h) và Albumin máu giảm (<30g/L) xác định Hội chứng thận hư. Ở bệnh nhân ĐTĐ lâu năm, đây thường là biến chứng bệnh thận do ĐTĐ.'
  },
  {
    id: 'case-11',
    title: 'Khó thở khi nằm',
    specialty: 'Tim mạch',
    difficulty: 'medium',
    patientInfo: {
      age: 70,
      gender: 'Nữ',
      chiefComplaint: 'Khó thở tăng dần, phải ngồi dậy để thở.',
      history: 'Tiền sử tăng huyết áp và bệnh cơ tim thiếu máu cục bộ. Gần đây khó thở khi gắng sức nhẹ, đêm ngủ phải kê 3 gối.'
    },
    physicalExam: 'Nhịp tim nhanh 110 lần/phút, có tiếng ngựa phi T3. Tĩnh mạch cổ nổi. Phổi rale ẩm 2 đáy. Gan to 3cm dưới bờ sườn, phản hồi gan tĩnh mạch cổ (+).',
    labTests: [
      { id: 'bnp', name: 'NT-proBNP', result: '4500 pg/mL', normalRange: '< 125 pg/mL', cost: 300 },
      { id: 'echo', name: 'Siêu âm tim', result: 'EF 35%, buồng tim trái giãn.', normalRange: 'EF > 50%', cost: 400 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Suy tim mạn tính đợt cấp' },
      { id: 'd2', text: 'Đợt cấp COPD' },
      { id: 'd3', text: 'Thuyên tắc phổi' },
      { id: 'd4', text: 'Viêm phổi nặng' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Lợi tiểu quai (Furosemide) + Ức chế men chuyển + Chẹn Beta (khi ổn định)' },
      { id: 't2', text: 'Kháng sinh + Thuốc giãn phế quản' },
      { id: 't3', text: 'Thuốc tiêu sợi huyết' },
      { id: 't4', text: 'Thở máy xâm nhập ngay lập tức' }
    ],
    correctTreatment: 't1',
    explanation: 'Lâm sàng có đầy đủ triệu chứng của suy tim trái (khó thở khi nằm, rale ẩm phổi) và suy tim phải (gan to, tĩnh mạch cổ nổi). NT-proBNP tăng cao và EF giảm khẳng định suy tim phân suất tống máu giảm.'
  },
  {
    id: 'case-12',
    title: 'Sốt, đau đầu và nôn vọt',
    specialty: 'Thần kinh',
    difficulty: 'hard',
    patientInfo: {
      age: 19,
      gender: 'Nam',
      chiefComplaint: 'Sốt cao, đau đầu dữ dội, nôn vọt.',
      history: 'Bệnh khởi phát 1 ngày nay, đau đầu liên tục, không đáp ứng thuốc giảm đau thông thường. Sợ ánh sáng và tiếng động.'
    },
    physicalExam: 'Sốt 39.5 độ. Tỉnh nhưng chậm chạp. Dấu hiệu cổ cứng (+), Kernig (+), Brudzinski (+). Không có dấu hiệu thần kinh khu trú.',
    labTests: [
      { id: 'lp', name: 'Chọc dò dịch não tủy', result: 'Dịch đục, áp lực tăng. Tế bào 1200/mm3 (80% Neutro). Protein 1.5 g/L, Glucose 1.2 mmol/L (máu 6.0).', normalRange: 'Tế bào < 5/mm3', cost: 400 },
      { id: 'ct', name: 'CT sọ não', result: 'Không thấy tổn thương khu trú hay phù não nặng.', normalRange: 'Bình thường', cost: 500 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm màng não mủ' },
      { id: 'd2', text: 'Viêm màng não do virus' },
      { id: 'd3', text: 'Xuất huyết dưới nhện' },
      { id: 'd4', text: 'Áp xe não' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Kháng sinh liều cao đường tĩnh mạch (Ceftriaxone + Vancomycin) + Dexamethasone' },
      { id: 't2', text: 'Thuốc kháng virus (Acyclovir)' },
      { id: 't3', text: 'Phẫu thuật kẹp cổ túi phình' },
      { id: 't4', text: 'Chọc hút mủ qua da' }
    ],
    correctTreatment: 't1',
    explanation: 'Hội chứng màng não điển hình kèm hội chứng nhiễm trùng. Dịch não tủy đục, bạch cầu đa nhân tăng cao và glucose giảm mạnh hướng tới viêm màng não do vi khuẩn. Cần dùng kháng sinh sớm nhất có thể.'
  },
  {
    id: 'case-13',
    title: 'Ho khạc đờm mạn tính ở người hút thuốc',
    specialty: 'Hô hấp',
    difficulty: 'medium',
    patientInfo: {
      age: 62,
      gender: 'Nam',
      chiefComplaint: 'Khó thở khi gắng sức, ho khạc đờm nhiều năm.',
      history: 'Hút thuốc lá 40 năm. Ho khạc đờm vào buổi sáng ít nhất 3 tháng mỗi năm trong 5 năm qua. Gần đây khó thở cả khi đi bộ bằng phẳng.'
    },
    physicalExam: 'Lồng ngực hình thùng. Rì rào phế nang giảm 2 phế trường, có rale rít ngáy rải rác. Môi tím nhẹ khi gắng sức.',
    labTests: [
      { id: 'pft', name: 'Đo chức năng hô hấp', result: 'FEV1/FVC = 0.6. FEV1 = 55% giá trị dự đoán. Test hồi phục phế quản âm tính.', normalRange: 'FEV1/FVC > 0.7', cost: 200 },
      { id: 'cxr', name: 'X-quang phổi', result: 'Trường phổi quá sáng, cơ hoành hạ thấp, tim hình giọt nước.', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Bệnh phổi tắc nghẽn mạn tính (COPD)' },
      { id: 'd2', text: 'Hen phế quản người già' },
      { id: 'd3', text: 'Giãn phế quản' },
      { id: 'd4', text: 'Lao phổi cũ' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc giãn phế quản tác dụng kéo dài (LAMA/LABA) + Cai thuốc lá' },
      { id: 't2', text: 'Corticoid xịt liều cao đơn thuần' },
      { id: 't3', text: 'Kháng sinh dự phòng dài hạn' },
      { id: 't4', text: 'Thở oxy liều cao liên tục' }
    ],
    correctTreatment: 't1',
    explanation: 'Tiền sử hút thuốc nặng, ho khạc đờm mạn tính và rối loạn thông khí tắc nghẽn không hồi phục (FEV1/FVC < 0.7) là các tiêu chuẩn vàng chẩn đoán COPD. Cai thuốc là biện pháp quan trọng nhất để làm chậm tiến triển bệnh.'
  },
  {
    id: 'case-14',
    title: 'Gầy sút cân và run tay',
    specialty: 'Nội tiết',
    difficulty: 'easy',
    patientInfo: {
      age: 35,
      gender: 'Nữ',
      chiefComplaint: 'Hồi hộp đánh trống ngực, gầy sút 5kg trong 1 tháng dù ăn nhiều.',
      history: 'Người luôn cảm thấy nóng, hay vã mồ hôi, dễ cáu gắt, tay run nhẹ.'
    },
    physicalExam: 'Mạch nhanh 110 lần/phút đều. Tuyến giáp to độ II, lan tỏa, có tiếng thổi tâm thu tại tuyến giáp. Mắt hơi lồi.',
    labTests: [
      { id: 'tsh', name: 'TSH', result: '0.01 mIU/L', normalRange: '0.4 - 4.0 mIU/L', cost: 100 },
      { id: 'ft4', name: 'FT4', result: '45 pmol/L', normalRange: '12 - 22 pmol/L', cost: 100 },
      { id: 'us', name: 'Siêu âm tuyến giáp', result: 'Tuyến giáp to, tăng sinh mạch máu rất nhiều (hình ảnh Inferno).', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Bệnh Basedow (Graves)' },
      { id: 'd2', text: 'Viêm giáp cấp' },
      { id: 'd3', text: 'Bướu nhân độc tuyến giáp' },
      { id: 'd4', text: 'Rối loạn lo âu' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc kháng giáp tổng hợp (Methimazole) + Chẹn Beta' },
      { id: 't2', text: 'Phẫu thuật cắt tuyến giáp ngay lập tức' },
      { id: 't3', text: 'Điều trị bằng Iod phóng xạ ngay' },
      { id: 't4', text: 'An thần và nghỉ ngơi' }
    ],
    correctTreatment: 't1',
    explanation: 'Hội chứng cường giáp rõ (gầy sút, run tay, mạch nhanh) kèm bướu mạch và lồi mắt hướng tới bệnh Basedow. Xét nghiệm TSH giảm và FT4 tăng khẳng định cường giáp tại vòi. Methimazole là lựa chọn đầu tay.'
  },
  {
    id: 'case-15',
    title: 'Bụng to và vàng mắt',
    specialty: 'Tiêu hóa',
    difficulty: 'medium',
    patientInfo: {
      age: 55,
      gender: 'Nam',
      chiefComplaint: 'Bụng trướng to dần, vàng da, mệt mỏi.',
      history: 'Tiền sử viêm gan B mạn tính 20 năm không điều trị đều. Uống rượu thường xuyên.'
    },
    physicalExam: 'Vàng mắt, vàng da rõ. Bụng cổ chướng mức độ vừa. Có nhiều sao mạch ở ngực. Gan không sờ thấy, lách to 3cm dưới bờ sườn.',
    labTests: [
      { id: 'ast_alt', name: 'AST/ALT', result: '120/85 U/L', normalRange: '< 40 U/L', cost: 50 },
      { id: 'bilirubin', name: 'Bilirubin toàn phần', result: '65 umol/L', normalRange: '< 17 umol/L', cost: 50 },
      { id: 'platelet', name: 'Tiểu cầu', result: '80 G/L', normalRange: '150-400 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Xơ gan mất bù' },
      { id: 'd2', text: 'Ung thư gan nguyên phát' },
      { id: 'd3', text: 'Viêm gan virus cấp' },
      { id: 'd4', text: 'Suy tim phải' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Lợi tiểu + Thuốc kháng virus HBV + Chế độ ăn giảm muối' },
      { id: 't2', text: 'Phẫu thuật cắt gan' },
      { id: 't3', text: 'Kháng sinh liều cao' },
      { id: 't4', text: 'Truyền máu cấp cứu' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân có hội chứng suy tế bào gan (vàng da, sao mạch) và hội chứng tăng áp lực tĩnh mạch cửa (cổ chướng, lách to, giảm tiểu cầu). Trên nền viêm gan B mạn, đây là hình ảnh điển hình của xơ gan giai đoạn mất bù.'
  },
  {
    id: 'case-16',
    title: 'Hoa mắt chóng mặt và mệt mỏi',
    specialty: 'Huyết học',
    difficulty: 'easy',
    patientInfo: {
      age: 24,
      gender: 'Nữ',
      chiefComplaint: 'Mệt mỏi kéo dài, hay hoa mắt khi đứng dậy.',
      history: 'Ăn uống kém, đang thực hiện chế độ ăn kiêng nghiêm ngặt. Kinh nguyệt kéo dài (rong kinh) 3 tháng nay.'
    },
    physicalExam: 'Da xanh xao, niêm mạc mắt nhợt. Lưỡi mất gai. Móng tay khô, dễ gãy, hình thìa.',
    labTests: [
      { id: 'hb', name: 'Hemoglobin (Hb)', result: '85 g/L', normalRange: '120-150 g/L', cost: 50 },
      { id: 'mcv', name: 'MCV', result: '72 fL', normalRange: '80-100 fL', cost: 50 },
      { id: 'ferritin', name: 'Ferritin', result: '8 ng/mL', normalRange: '30-400 ng/mL', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Thiếu máu thiếu sắt' },
      { id: 'd2', text: 'Thiếu máu do thiếu Vitamin B12' },
      { id: 'd3', text: 'Bệnh Thalassemia' },
      { id: 'd4', text: 'Thiếu máu do bệnh mạn tính' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Bổ sung sắt đường uống + Điều trị nguyên nhân rong kinh' },
      { id: 't2', text: 'Tiêm Vitamin B12 bắp' },
      { id: 't3', text: 'Truyền máu cấp cứu' },
      { id: 't4', text: 'Thải sắt định kỳ' }
    ],
    correctTreatment: 't1',
    explanation: 'Thiếu máu hồng cầu nhỏ (MCV thấp) kèm Ferritin giảm mạnh là bằng chứng xác thực của thiếu máu thiếu sắt. Nguyên nhân ở bệnh nhân này là do cung cấp thiếu (ăn kiêng) và mất máu (rong kinh).'
  },
  {
    id: 'case-17',
    title: 'Ban đỏ hình cánh bướm và đau khớp',
    specialty: 'Cơ xương khớp',
    difficulty: 'hard',
    patientInfo: {
      age: 29,
      gender: 'Nữ',
      chiefComplaint: 'Sốt nhẹ, đau các khớp nhỏ ở tay, ban đỏ ở mặt.',
      history: 'Bệnh diễn biến 2 tháng nay. Ban đỏ xuất hiện rõ hơn khi đi nắng. Đau khớp kiểu đối xứng, cứng khớp buổi sáng dưới 30 phút.'
    },
    physicalExam: 'Ban đỏ hình cánh bướm ở 2 má và sống mũi. Loét miệng không đau. Sưng đau các khớp bàn ngón tay 2 bên.',
    labTests: [
      { id: 'ana', name: 'Kháng thể kháng nhân (ANA)', result: 'Dương tính 1/320', normalRange: 'Âm tính', cost: 300 },
      { id: 'dsdna', name: 'Anti-dsDNA', result: 'Dương tính', normalRange: 'Âm tính', cost: 400 },
      { id: 'cbc', name: 'Công thức máu', result: 'Bạch cầu 3.0 G/L, Tiểu cầu 120 G/L.', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Lupus ban đỏ hệ thống (SLE)' },
      { id: 'd2', text: 'Viêm khớp dạng thấp' },
      { id: 'd3', text: 'Xơ cứng bì toàn thể' },
      { id: 'd4', text: 'Dị ứng thuốc' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Corticoid + Hydroxychloroquine + Thuốc ức chế miễn dịch' },
      { id: 't2', text: 'Kháng sinh phổ rộng' },
      { id: 't3', text: 'Chỉ dùng giảm đau NSAIDs' },
      { id: 't4', text: 'Kháng Histamin' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân nữ trẻ tuổi có tổn thương đa cơ quan (da, khớp, huyết học) kèm ANA và Anti-dsDNA dương tính thỏa mãn tiêu chuẩn chẩn đoán SLE. Điều trị cần phối hợp kiểm soát triệu chứng và ức chế miễn dịch.'
  },
  {
    id: 'case-18',
    title: 'Trẻ tiểu đỏ sau viêm họng',
    specialty: 'Nhi khoa',
    difficulty: 'medium',
    patientInfo: {
      age: 8,
      gender: 'Nam',
      chiefComplaint: 'Tiểu ít, nước tiểu màu đỏ như nước vối, phù mặt.',
      history: 'Cách đây 2 tuần trẻ có sốt, đau họng, tự điều trị khỏi. 2 ngày nay thấy mắt phù nề vào buổi sáng, tiểu rất ít.'
    },
    physicalExam: 'Phù nhẹ mặt và 2 chân. HA 140/90 mmHg (cao so với tuổi). Tim phổi bình thường.',
    labTests: [
      { id: 'ua', name: 'Tổng phân tích nước tiểu', result: 'Hồng cầu (+++), Protein (++) 1.5 g/L.', normalRange: 'Âm tính', cost: 50 },
      { id: 'aso', name: 'ASO (Antistreptolysin O)', result: '600 UI/mL', normalRange: '< 200 UI/mL', cost: 150 },
      { id: 'c3', name: 'Bổ thể C3', result: 'Giảm mạnh', normalRange: '0.9 - 1.8 g/L', cost: 200 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm cầu thận cấp sau nhiễm liên cầu' },
      { id: 'd2', text: 'Hội chứng thận hư' },
      { id: 'd3', text: 'Nhiễm trùng đường tiết niệu' },
      { id: 'd4', text: 'Sỏi thận' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Nghỉ ngơi, ăn nhạt, kiểm soát huyết áp, kháng sinh nếu còn nhiễm khuẩn' },
      { id: 't2', text: 'Corticoid liều cao kéo dài' },
      { id: 't3', text: 'Truyền dịch liều cao' },
      { id: 't4', text: 'Phẫu thuật lấy sỏi' }
    ],
    correctTreatment: 't1',
    explanation: 'Tiền sử viêm họng (nghi do liên cầu), khoảng lặng 2 tuần, sau đó xuất hiện phù, tăng huyết áp và tiểu máu là điển hình của viêm cầu thận cấp. ASO tăng và C3 giảm giúp khẳng định chẩn đoán.'
  },
  {
    id: 'case-19',
    title: 'Chảy máu âm đạo 3 tháng cuối',
    specialty: 'Sản phụ khoa',
    difficulty: 'medium',
    patientInfo: {
      age: 32,
      gender: 'Nữ',
      chiefComplaint: 'Ra máu âm đạo đỏ tươi đột ngột, không đau bụng.',
      history: 'Thai 34 tuần, con thứ 3. Đang ngủ thì thấy máu chảy ra ở âm đạo, lượng vừa, không kèm đau bụng.'
    },
    physicalExam: 'Tỉnh, HA 110/70 mmHg. Bụng mềm, tử cung không có cơn co. Tim thai 140 lần/phút, đều.',
    labTests: [
      { id: 'us', name: 'Siêu âm thai', result: 'Bánh rau bám thấp, che lấp hoàn toàn lỗ trong cổ tử cung.', normalRange: 'Rau bám đáy/thân tử cung', cost: 200 },
      { id: 'hb', name: 'Hemoglobin', result: '105 g/L', normalRange: '110-150 g/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Rau tiền đạo' },
      { id: 'd2', text: 'Rau bong non' },
      { id: 'd3', text: 'Dọa đẻ non' },
      { id: 'd4', text: 'Vỡ tử cung' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Nằm nghỉ tuyệt đối, thuốc giảm co, hỗ trợ phổi thai nhi, mổ lấy thai nếu chảy máu nhiều' },
      { id: 't2', text: 'Bấm ối cho đẻ đường dưới ngay' },
      { id: 't3', text: 'Khám âm đạo bằng tay để kiểm tra cổ tử cung' },
      { id: 't4', text: 'Truyền Oxytocin gây chuyển dạ' }
    ],
    correctTreatment: 't1',
    explanation: 'Ra máu âm đạo 3 tháng cuối tính chất đỏ tươi, đột ngột, không đau bụng là dấu hiệu điển hình của rau tiền đạo. Siêu âm khẳng định vị trí bánh rau bám bất thường. Cấm khám âm đạo bằng tay vì có thể gây chảy máu dữ dội.'
  },
  {
    id: 'case-20',
    title: 'Đau ngực và khó thở sau phẫu thuật',
    specialty: 'Tim mạch',
    difficulty: 'hard',
    patientInfo: {
      age: 60,
      gender: 'Nữ',
      chiefComplaint: 'Khó thở đột ngột, đau ngực kiểu màng phổi.',
      history: 'Hậu phẫu ngày thứ 5 sau phẫu thuật thay khớp háng. Đang tập đi thì đột ngột khó thở, đau ngực, ho khan.'
    },
    physicalExam: 'Nhịp thở 28 lần/phút, SpO2 88% (khí trời). Phổi trong. Tim nhanh 120 lần/phút. Chân phải sưng to, đau khi ấn vào bắp chân.',
    labTests: [
      { id: 'ddimer', name: 'D-dimer', result: '3500 ng/mL', normalRange: '< 500 ng/mL', cost: 250 },
      { id: 'ctpa', name: 'CT động mạch phổi (CTPA)', result: 'Có huyết khối gây tắc nhánh động mạch phổi thùy dưới bên phải.', normalRange: 'Bình thường', cost: 1200 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Thuyên tắc phổi' },
      { id: 'd2', text: 'Nhồi máu cơ tim cấp' },
      { id: 'd3', text: 'Viêm phổi bệnh viện' },
      { id: 'd4', text: 'Tràn khí màng phổi' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc chống đông (Heparin) + Hỗ trợ hô hấp' },
      { id: 't2', text: 'Kháng sinh phổ rộng' },
      { id: 't3', text: 'Đặt dẫn lưu màng phổi' },
      { id: 't4', text: 'Can thiệp mạch vành' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân có yếu tố nguy cơ cao (sau phẫu thuật lớn, bất động) kèm triệu chứng khó thở đột ngột và dấu hiệu huyết khối tĩnh mạch sâu chi dưới. D-dimer tăng và CTPA xác định tắc động mạch phổi.'
  },
  {
    id: 'case-21',
    title: 'Sưng đau khớp ngón chân cái',
    specialty: 'Cơ xương khớp',
    difficulty: 'easy',
    patientInfo: {
      age: 48,
      gender: 'Nam',
      chiefComplaint: 'Sưng, nóng, đỏ, đau dữ dội khớp bàn ngón chân cái phải.',
      history: 'Đau khởi phát đột ngột vào ban đêm sau một bữa tiệc có nhiều rượu và hải sản. Đau đến mức không thể đi lại được.'
    },
    physicalExam: 'Khớp bàn ngón I chân phải sưng to, đỏ mọng, sờ vào rất đau. Không sốt.',
    labTests: [
      { id: 'uric', name: 'Acid Uric máu', result: '580 umol/L', normalRange: '200-420 umol/L', cost: 50 },
      { id: 'cbc', name: 'Bạch cầu', result: '11 G/L', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Gout cấp' },
      { id: 'd2', text: 'Viêm khớp nhiễm khuẩn' },
      { id: 'd3', text: 'Viêm mô tế bào' },
      { id: 'd4', text: 'Chấn thương khớp' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Colchicine + NSAIDs + Nghỉ ngơi' },
      { id: 't2', text: 'Kháng sinh liều cao' },
      { id: 't3', text: 'Allopurinol ngay trong đợt cấp' },
      { id: 't4', text: 'Chọc hút dịch khớp' }
    ],
    correctTreatment: 't1',
    explanation: 'Cơn đau khớp cấp tính ở vị trí điển hình (ngón chân cái), khởi phát sau bữa ăn nhiều đạm/rượu và Acid Uric tăng cao là đặc điểm của Gout. Lưu ý không bắt đầu thuốc hạ acid uric (Allopurinol) ngay trong cơn cấp.'
  },
  {
    id: 'case-22',
    title: 'Đau bụng dữ dội như dao đâm',
    specialty: 'Ngoại tổng quát',
    difficulty: 'hard',
    patientInfo: {
      age: 52,
      gender: 'Nam',
      chiefComplaint: 'Đau bụng dữ dội đột ngột vùng thượng vị.',
      history: 'Tiền sử viêm loét dạ dày tá tràng nhiều năm. Đang ngồi nghỉ thì đột ngột đau bụng dữ dội, đau lan khắp bụng, người vã mồ hôi.'
    },
    physicalExam: 'Bệnh nhân nằm im, thở nông. Bụng cứng như gỗ, ấn đau khắp bụng. Mất vùng đục trước gan.',
    labTests: [
      { id: 'xr', name: 'X-quang bụng đứng không chuẩn bị', result: 'Hình ảnh liềm hơi dưới cơ hoành 2 bên.', normalRange: 'Bình thường', cost: 150 },
      { id: 'cbc', name: 'Bạch cầu', result: '15 G/L', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Thủng tạng rỗng (thường là loét dạ dày tá tràng)' },
      { id: 'd2', text: 'Viêm tụy cấp' },
      { id: 'd3', text: 'Tắc ruột cấp' },
      { id: 'd4', text: 'Phình tách động mạch chủ bụng' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Mổ cấp cứu khâu lỗ thủng + Rửa ổ bụng' },
      { id: 't2', text: 'Điều trị nội khoa bằng kháng sinh và nhịn ăn' },
      { id: 't3', text: 'Đặt ống thông dạ dày và theo dõi' },
      { id: 't4', text: 'Nội soi dạ dày cấp cứu' }
    ],
    correctTreatment: 't1',
    explanation: 'Đau bụng đột ngột, dữ dội kèm dấu hiệu "bụng cứng như gỗ" và liềm hơi dưới cơ hoành trên X-quang là bằng chứng chắc chắn của thủng tạng rỗng. Đây là cấp cứu ngoại khoa cần can thiệp ngay.'
  },
  {
    id: 'case-23',
    title: 'Yếu cơ và chuột rút',
    specialty: 'Nội khoa',
    difficulty: 'medium',
    patientInfo: {
      age: 42,
      gender: 'Nữ',
      chiefComplaint: 'Yếu mỏi cơ 2 chân, hay bị chuột rút.',
      history: 'Bệnh nhân đang dùng thuốc lợi tiểu điều trị tăng huyết áp. Gần đây thấy mệt mỏi, chân tay bủn rủn, ăn uống kém.'
    },
    physicalExam: 'Sức cơ 2 chi dưới 4/5. Phản xạ gân xương giảm. Nhịp tim không đều, có ngoại tâm thu.',
    labTests: [
      { id: 'k', name: 'Kali máu', result: '2.5 mmol/L', normalRange: '3.5 - 5.0 mmol/L', cost: 30 },
      { id: 'ecg', name: 'Điện tâm đồ', result: 'Sóng T dẹt, xuất hiện sóng U rõ, đoạn ST chênh xuống.', normalRange: 'Bình thường', cost: 100 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Hạ Kali máu' },
      { id: 'd2', text: 'Nhược cơ' },
      { id: 'd3', text: 'Hạ Canxi máu' },
      { id: 'd4', text: 'Tai biến mạch máu não' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Bổ sung Kali (đường uống hoặc truyền tĩnh mạch chậm)' },
      { id: 't2', text: 'Truyền Canxi Gluconat' },
      { id: 't3', text: 'Ngừng ngay thuốc lợi tiểu và theo dõi' },
      { id: 't4', text: 'Tập vật lý trị liệu' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh nhân dùng thuốc lợi tiểu (thường là nhóm mất kali) có biểu hiện yếu cơ và thay đổi trên ECG đặc trưng (sóng U). Xét nghiệm Kali máu thấp khẳng định chẩn đoán. Cần bù kali và theo dõi sát điện tim.'
  },
  {
    id: 'case-24',
    title: 'Tê bì và yếu chi tiến triển',
    specialty: 'Thần kinh',
    difficulty: 'hard',
    patientInfo: {
      age: 34,
      gender: 'Nam',
      chiefComplaint: 'Yếu 2 chân tiến triển dần lên 2 tay.',
      history: 'Cách đây 1 tuần có bị tiêu chảy nhiễm khuẩn. 3 ngày nay thấy tê đầu ngón chân, sau đó yếu chân, đi lại khó khăn, hôm nay thấy yếu cả 2 tay.'
    },
    physicalExam: 'Liệt mềm, đối xứng 2 bên, tiến triển từ dưới lên trên. Phản xạ gân xương mất hoàn toàn. Không có rối loạn cơ tròn.',
    labTests: [
      { id: 'lp', name: 'Dịch não tủy', result: 'Phân ly đạm - tế bào (Protein 1.2 g/L, tế bào 3/mm3).', normalRange: 'Protein < 0.45 g/L', cost: 400 },
      { id: 'emg', name: 'Điện cơ (EMG)', result: 'Giảm tốc độ dẫn truyền thần kinh vận động.', normalRange: 'Bình thường', cost: 500 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Hội chứng Guillain-Barré' },
      { id: 'd2', text: 'Viêm tủy cắt ngang' },
      { id: 'd3', text: 'Hạ Kali máu' },
      { id: 'd4', text: 'Bệnh nhược cơ' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thay huyết tương hoặc truyền Immunoglobulin (IVIG)' },
      { id: 't2', text: 'Corticoid liều cao tĩnh mạch' },
      { id: 't3', text: 'Châm cứu và tập phục hồi chức năng' },
      { id: 't4', text: 'Kháng sinh liều cao' }
    ],
    correctTreatment: 't1',
    explanation: 'Liệt mềm tiến triển nhanh, đối xứng, có tiền sử nhiễm trùng trước đó và dấu hiệu phân ly đạm tế bào trong dịch não tủy là các đặc điểm kinh điển của Guillain-Barré. Điều trị sớm bằng IVIG hoặc thay huyết tương giúp cải thiện tiên lượng.'
  },
  {
    id: 'case-25',
    title: 'Sốt, chảy máu nướu răng và mệt mỏi',
    specialty: 'Huyết học',
    difficulty: 'hard',
    patientInfo: {
      age: 40,
      gender: 'Nữ',
      chiefComplaint: 'Sốt kéo dài, chảy máu chân răng, xuất hiện nhiều vết bầm tím.',
      history: 'Bệnh diễn biến 2 tuần nay, người mệt mỏi nhiều, ăn uống kém, sút cân nhanh.'
    },
    physicalExam: 'Da xanh nhợt, nhiều mảng xuất huyết đa lứa tuổi. Gan, lách, hạch ngoại vi to nhẹ.',
    labTests: [
      { id: 'cbc', name: 'Công thức máu', result: 'Hb 70 g/L, PLT 20 G/L, WBC 45 G/L (xuất hiện tế bào non - Blast 60%).', normalRange: 'Blast 0%', cost: 100 },
      { id: 'bm', name: 'Tủy đồ', result: 'Tủy giàu tế bào, tế bào Blast chiếm 80% tế bào có nhân trong tủy.', normalRange: 'Blast < 5%', cost: 1000 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Lơ-xê-mi cấp (Ung thư máu cấp tính)' },
      { id: 'd2', text: 'Suy tủy xương' },
      { id: 'd3', text: 'Xuất huyết giảm tiểu cầu miễn dịch' },
      { id: 'd4', text: 'Nhiễm khuẩn huyết nặng' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Hóa trị liệu theo phác đồ + Điều trị hỗ trợ (truyền máu, kháng sinh)' },
      { id: 't2', text: 'Chỉ truyền máu và tiểu cầu' },
      { id: 't3', text: 'Cắt lách' },
      { id: 't4', text: 'Dùng thuốc kích thích tủy xương' }
    ],
    correctTreatment: 't1',
    explanation: 'Bệnh cảnh cấp tính với hội chứng thiếu máu, hội chứng xuất huyết và hội chứng nhiễm trùng kèm sự xuất hiện của tế bào non (Blast) trong máu và tủy xương khẳng định chẩn đoán Lơ-xê-mi cấp.'
  },
  {
    id: 'case-26',
    title: 'Đau khớp buổi sáng kéo dài',
    specialty: 'Cơ xương khớp',
    difficulty: 'medium',
    patientInfo: {
      age: 45,
      gender: 'Nữ',
      chiefComplaint: 'Đau và cứng các khớp bàn tay 2 bên vào buổi sáng.',
      history: 'Bệnh diễn biến hơn 6 tháng. Cứng khớp buổi sáng kéo dài hơn 1 giờ. Đau tăng khi nghỉ ngơi, giảm khi vận động nhẹ.'
    },
    physicalExam: 'Sưng đau đối xứng các khớp bàn ngón, khớp cổ tay 2 bên. Có dấu hiệu "bàn tay gió thổi" nhẹ.',
    labTests: [
      { id: 'rf', name: 'Yếu tố dạng thấp (RF)', result: 'Dương tính (+)', normalRange: 'Âm tính', cost: 150 },
      { id: 'anticcp', name: 'Anti-CCP', result: 'Dương tính mạnh', normalRange: 'Âm tính', cost: 300 },
      { id: 'esr', name: 'Tốc độ lắng máu (ESR)', result: '60 mm/h', normalRange: '< 20 mm/h', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm khớp dạng thấp' },
      { id: 'd2', text: 'Thoái hóa khớp' },
      { id: 'd3', text: 'Lupus ban đỏ hệ thống' },
      { id: 'd4', text: 'Viêm khớp Gout mạn tính' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc chống thấp khớp làm thay đổi bệnh (DMARDs - Methotrexate) + Corticoid liều thấp' },
      { id: 't2', text: 'Chỉ dùng giảm đau khi đau' },
      { id: 't3', text: 'Bổ sung Glucosamine và Chondroitin' },
      { id: 't4', text: 'Phẫu thuật thay khớp' }
    ],
    correctTreatment: 't1',
    explanation: 'Viêm đa khớp nhỏ, đối xứng, cứng khớp buổi sáng kéo dài > 1 giờ và sự hiện diện của RF/Anti-CCP là các tiêu chuẩn vàng chẩn đoán Viêm khớp dạng thấp. DMARDs cần được khởi đầu sớm để tránh biến dạng khớp.'
  },
  {
    id: 'case-27',
    title: 'Trẻ khóc thét từng cơn và nôn',
    specialty: 'Nhi khoa',
    difficulty: 'hard',
    patientInfo: {
      age: 8,
      gender: 'Nam',
      chiefComplaint: 'Khóc thét từng cơn, nôn vọt, bỏ bú.',
      history: 'Trẻ 8 tháng tuổi, đang khỏe mạnh đột ngột khóc thét dữ dội, người ưỡn cong, sau đó im lặng rồi lại khóc tiếp. Có nôn ra sữa và dịch xanh.'
    },
    physicalExam: 'Bụng mềm, sờ thấy khối hình quả chuối ở vùng dưới sườn phải. Thăm trực tràng có máu theo găng (màu hoa hiên).',
    labTests: [
      { id: 'us', name: 'Siêu âm bụng', result: 'Hình ảnh "bia bắn" (target sign) trên mặt cắt ngang và "giả thận" trên mặt cắt dọc.', normalRange: 'Bình thường', cost: 100 },
      { id: 'xr', name: 'X-quang bụng không chuẩn bị', result: 'Có vài mức nước - mức hơi ở vùng bụng giữa.', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Lồng ruột cấp' },
      { id: 'd2', text: 'Viêm dạ dày ruột cấp' },
      { id: 'd3', text: 'Tắc ruột do búi giun' },
      { id: 'd4', text: 'Thoát vị bẹn nghẹt' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Tháo lồng bằng hơi hoặc nước (nếu đến sớm) hoặc phẫu thuật' },
      { id: 't2', text: 'Dùng thuốc giảm co thắt' },
      { id: 't3', text: 'Thụt tháo trực tràng' },
      { id: 't4', text: 'Kháng sinh và truyền dịch' }
    ],
    correctTreatment: 't1',
    explanation: 'Tam chứng kinh điển: Đau bụng cơn (khóc thét), nôn và ỉa máu (màu hoa hiên) ở trẻ nhũ nhi gợi ý mạnh lồng ruột. Siêu âm thấy hình ảnh bia bắn khẳng định chẩn đoán. Tháo lồng bằng hơi là phương pháp điều trị ưu tiên.'
  },
  {
    id: 'case-28',
    title: 'Chảy máu sau đẻ',
    specialty: 'Sản phụ khoa',
    difficulty: 'hard',
    patientInfo: {
      age: 30,
      gender: 'Nữ',
      chiefComplaint: 'Chảy máu âm đạo dữ dội ngay sau khi sổ rau.',
      history: 'Vừa đẻ con thứ 4, cân nặng bé 4.2kg. Sau khi rau sổ, máu âm đạo chảy ra liên tục, đỏ tươi.'
    },
    physicalExam: 'Tỉnh, vã mồ hôi, niêm mạc nhợt. HA 80/40 mmHg, Mạch 125 lần/phút. Tử cung nhão, đáy tử cung cao trên rốn, ấn vào máu chảy ra nhiều.',
    labTests: [
      { id: 'hb', name: 'Hemoglobin', result: '75 g/L', normalRange: '110-150 g/L', cost: 50 },
      { id: 'fbg', name: 'Fibrinogen', result: '1.5 g/L', normalRange: '2-4 g/L', cost: 100 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Băng huyết sau sinh do đờ tử cung' },
      { id: 'd2', text: 'Sót rau' },
      { id: 'd3', text: 'Rách đường sinh dục phức tạp' },
      { id: 'd4', text: 'Rối loạn đông máu' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Xoa hồi sức tử cung + Thuốc co hồi tử cung (Oxytocin, Misoprostol) + Bù dịch/máu' },
      { id: 't2', text: 'Kiểm soát tử cung bằng tay ngay lập tức' },
      { id: 't3', text: 'Khâu phục hồi tầng sinh môn' },
      { id: 't4', text: 'Phẫu thuật cắt tử cung ngay' }
    ],
    correctTreatment: 't1',
    explanation: 'Chảy máu ngay sau đẻ kèm tử cung nhão, không co hồi là dấu hiệu của đờ tử cung. Yếu tố nguy cơ là đẻ nhiều lần và con to. Xử trí cấp cứu bao gồm xoa tử cung và dùng thuốc co hồi tử cung mạnh.'
  },
  {
    id: 'case-29',
    title: 'Mệt mỏi và sạm da',
    specialty: 'Nội tiết',
    difficulty: 'hard',
    patientInfo: {
      age: 38,
      gender: 'Nữ',
      chiefComplaint: 'Mệt mỏi cực độ, gầy sút cân, da sạm đi.',
      history: 'Mệt mỏi tăng dần, thèm ăn mặn. Da vùng khuỷu tay, các nếp gấp bàn tay và niêm mạc miệng sạm đen rõ rệt.'
    },
    physicalExam: 'HA thấp 85/50 mmHg. Sạm da ở các vùng hở và vùng tì đè. Lông nách, lông mu thưa thớt.',
    labTests: [
      { id: 'na_k', name: 'Điện giải đồ', result: 'Na+ 125 mmol/L, K+ 5.5 mmol/L.', normalRange: 'Na 135-145', cost: 50 },
      { id: 'cortisol', name: 'Cortisol máu (8h sáng)', result: '50 nmol/L', normalRange: '140 - 700 nmol/L', cost: 200 },
      { id: 'acth', name: 'ACTH', result: '800 pg/mL', normalRange: '10 - 60 pg/mL', cost: 300 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Suy tuyến thượng thận nguyên phát (Bệnh Addison)' },
      { id: 'd2', text: 'Suy tuyến yên' },
      { id: 'd3', text: 'Nhiễm độc giáp' },
      { id: 'd4', text: 'Trầm cảm' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Bổ sung Hormone thay thế (Hydrocortisone + Fludrocortisone) suốt đời' },
      { id: 't2', text: 'Chỉ cần ăn nhiều muối' },
      { id: 't3', text: 'Phẫu thuật cắt bỏ u tuyến thượng thận' },
      { id: 't4', text: 'Dùng thuốc an thần' }
    ],
    correctTreatment: 't1',
    explanation: 'Mệt mỏi, sạm da (do tăng ACTH kéo theo tăng MSH), huyết áp thấp và rối loạn điện giải (hạ Na, tăng K) hướng tới suy thượng thận nguyên phát. Cortisol thấp và ACTH cao khẳng định chẩn đoán.'
  },
  {
    id: 'case-30',
    title: 'Cơn tăng huyết áp kịch phát',
    specialty: 'Nội tiết',
    difficulty: 'hard',
    patientInfo: {
      age: 45,
      gender: 'Nam',
      chiefComplaint: 'Đau đầu dữ dội, vã mồ hôi, đánh trống ngực.',
      history: 'Các triệu chứng xuất hiện thành cơn đột ngột. Trong cơn thấy mặt tái nhợt, lo âu cực độ. Hết cơn thì đi tiểu nhiều.'
    },
    physicalExam: 'Trong cơn: HA 220/120 mmHg, Mạch 120 lần/phút. Ngoài cơn: HA 130/80 mmHg.',
    labTests: [
      { id: 'meta', name: 'Metanephrin nước tiểu 24h', result: 'Tăng gấp 5 lần bình thường.', normalRange: 'Bình thường', cost: 500 },
      { id: 'ct', name: 'CT bụng', result: 'Khối u tuyến thượng thận trái đường kính 4cm.', normalRange: 'Bình thường', cost: 800 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'U tủy thượng thận (Pheochromocytoma)' },
      { id: 'd2', text: 'Tăng huyết áp vô căn' },
      { id: 'd3', text: 'Cơn hoảng loạn (Panic attack)' },
      { id: 'd4', text: 'Cường Aldosteron nguyên phát' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Chuẩn bị nội khoa (Chẹn Alpha trước, Chẹn Beta sau) sau đó phẫu thuật cắt u' },
      { id: 't2', text: 'Dùng thuốc hạ áp đơn thuần suốt đời' },
      { id: 't3', text: 'Châm cứu giảm đau đầu' },
      { id: 't4', text: 'Phẫu thuật cắt u ngay lập tức' }
    ],
    correctTreatment: 't1',
    explanation: 'Tam chứng kinh điển: Đau đầu, vã mồ hôi, đánh trống ngực kèm tăng huyết áp kịch phát gợi ý mạnh Pheochromocytoma. Metanephrin tăng và hình ảnh u thượng thận khẳng định chẩn đoán. Cần chuẩn bị kỹ bằng thuốc chẹn giao cảm trước mổ.'
  },
  {
    id: 'case-31',
    title: 'Trẻ sốt cao và khó thở thanh quản',
    specialty: 'Nhi khoa',
    difficulty: 'hard',
    patientInfo: {
      age: 4,
      gender: 'Nữ',
      chiefComplaint: 'Sốt cao, khó thở, chảy nước dãi.',
      history: 'Trẻ sốt cao đột ngột, đau họng dữ dội, không chịu ăn uống. 2 giờ nay thấy trẻ khó thở, phải ngồi chồm người ra phía trước để thở.'
    },
    physicalExam: 'Tình trạng nhiễm trùng nặng. Trẻ ngồi tư thế "kiềng ba chân", mồm há, chảy nước dãi. Tiếng thở rít thanh quản rõ.',
    labTests: [
      { id: 'xr', name: 'X-quang cổ nghiêng', result: 'Dấu hiệu "ngón tay cái" (thumbprint sign) do phù nề nắp thanh quản.', normalRange: 'Bình thường', cost: 150 },
      { id: 'cbc', name: 'Bạch cầu', result: '18 G/L', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm nắp thanh quản cấp' },
      { id: 'd2', text: 'Viêm thanh khí phế quản cấp (Croup)' },
      { id: 'd3', text: 'Dị vật đường thở' },
      { id: 'd4', text: 'Áp xe thành sau họng' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Đảm bảo đường thở (đặt nội khí quản nếu cần) + Kháng sinh tĩnh mạch' },
      { id: 't2', text: 'Dùng thuốc hạ sốt và theo dõi tại nhà' },
      { id: 't3', text: 'Soi họng bằng đè lưỡi ngay lập tức' },
      { id: 't4', text: 'Xông họng bằng thuốc co mạch' }
    ],
    correctTreatment: 't1',
    explanation: 'Sốt cao, chảy nước dãi và tư thế kiềng ba chân là dấu hiệu báo động của viêm nắp thanh quản cấp. Hình ảnh ngón tay cái trên X-quang là điển hình. Tuyệt đối không dùng đè lưỡi soi họng vì có thể gây co thắt thanh quản dẫn đến tử vong.'
  },
  {
    id: 'case-32',
    title: 'Đau bụng cấp ở phụ nữ trong độ tuổi sinh đẻ',
    specialty: 'Sản phụ khoa',
    difficulty: 'hard',
    patientInfo: {
      age: 26,
      gender: 'Nữ',
      chiefComplaint: 'Đau bụng dưới dữ dội, chậm kinh.',
      history: 'Chậm kinh 2 tuần. Sáng nay đột ngột đau nhói vùng hạ vị, sau đó đau âm ỉ liên tục, cảm giác muốn đi ngoài.'
    },
    physicalExam: 'Da xanh, niêm mạc nhợt, HA 90/60 mmHg. Bụng có phản ứng thành bụng vùng hạ vị. Thăm âm đạo cổ tử cung rất đau khi di động.',
    labTests: [
      { id: 'hcg', name: 'Beta-hCG máu', result: '2500 mIU/mL', normalRange: '< 5 mIU/mL', cost: 150 },
      { id: 'us', name: 'Siêu âm ổ bụng', result: 'Tử cung trống âm, có khối hỗn hợp ở cạnh tử cung phải, dịch tự do ổ bụng nhiều.', normalRange: 'Bình thường', cost: 200 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Chửa ngoài tử cung vỡ' },
      { id: 'd2', text: 'Viêm ruột thừa cấp' },
      { id: 'd3', text: 'U nang buồng trứng xoắn' },
      { id: 'd4', text: 'Sảy thai tự nhiên' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Mổ cấp cứu (nội soi hoặc mổ phanh) + Hồi sức chống sốc' },
      { id: 't2', text: 'Điều trị nội khoa bằng Methotrexate' },
      { id: 't3', text: 'Theo dõi sát và dùng giảm đau' },
      { id: 't4', text: 'Nạo buồng tử cung' }
    ],
    correctTreatment: 't1',
    explanation: 'Phụ nữ trong độ tuổi sinh đẻ, chậm kinh, đau bụng cấp và có dịch ổ bụng trên siêu âm kèm Beta-hCG dương tính là bệnh cảnh điển hình của chửa ngoài tử cung vỡ. Đây là cấp cứu sản khoa đe dọa tính mạng.'
  },
  {
    id: 'case-33',
    title: 'Sốt cao, đau đầu và cứng cổ',
    specialty: 'Truyền nhiễm',
    difficulty: 'hard',
    patientInfo: {
      age: 22,
      gender: 'Nam',
      chiefComplaint: 'Sốt cao, đau đầu dữ dội, nôn vọt.',
      history: 'Bệnh diễn biến nhanh trong vòng 24 giờ. Bệnh nhân sốt cao 39.5 độ, đau đầu liên tục, nôn nhiều lần không liên quan đến bữa ăn.'
    },
    physicalExam: 'Tỉnh, lờ đờ. Dấu hiệu cứng cổ dương tính, dấu hiệu Kerning dương tính. Có vài nốt tử ban rải rác ở chân.',
    labTests: [
      { id: 'lp', name: 'Chọc dò dịch não tủy', result: 'Dịch đục như nước vo gạo, áp lực tăng. Tế bào 2500/mm3 (đa nhân trung tính chiếm 90%). Protein 2.5 g/L, Glucose giảm mạnh.', normalRange: 'Dịch trong', cost: 400 },
      { id: 'gram', name: 'Nhuộm Gram dịch não tủy', result: 'Thấy song cầu khuẩn Gram âm hình hạt đậu.', normalRange: 'Âm tính', cost: 100 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm màng não mủ (do não mô cầu)' },
      { id: 'd2', text: 'Viêm màng não do virus' },
      { id: 'd3', text: 'Xuất huyết dưới nhện' },
      { id: 'd4', text: 'Viêm não Nhật Bản' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Kháng sinh liều cao (Ceftriaxone) + Chống phù não + Cách ly' },
      { id: 't2', text: 'Chỉ dùng thuốc hạ sốt và truyền dịch' },
      { id: 't3', text: 'Dùng thuốc kháng virus (Acyclovir)' },
      { id: 't4', text: 'Phẫu thuật dẫn lưu dịch não tủy' }
    ],
    correctTreatment: 't1',
    explanation: 'Hội chứng màng não điển hình (đau đầu, nôn, cứng cổ) kèm dịch não tủy đục và soi thấy song cầu khuẩn Gram âm khẳng định viêm màng não do não mô cầu. Cần điều trị kháng sinh sớm và phòng ngừa cho người tiếp xúc.'
  },
  {
    id: 'case-34',
    title: 'Khó thở kéo dài ở người hút thuốc',
    specialty: 'Hô hấp',
    difficulty: 'medium',
    patientInfo: {
      age: 65,
      gender: 'Nam',
      chiefComplaint: 'Ho khạc đờm mạn tính và khó thở khi gắng sức.',
      history: 'Hút thuốc lá 40 bao-năm. Ho khạc đờm vào buổi sáng nhiều năm nay. Gần đây khó thở cả khi đi bộ bằng phẳng.'
    },
    physicalExam: 'Lồng ngực hình thùng. Rì rào phế nang giảm 2 phế trường. Gõ vang trống. Có tiếng rít nhẹ khi thở ra gắng sức.',
    labTests: [
      { id: 'pft', name: 'Đo chức năng hô hấp', result: 'FEV1/FVC < 70%. FEV1 cải thiện không đáng kể sau test hồi phục phế quản.', normalRange: 'FEV1/FVC > 70%', cost: 300 },
      { id: 'xr', name: 'X-quang ngực', result: 'Trường phổi quá sáng, cơ hoành hạ thấp, các khoảng liên sườn giãn rộng.', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Bệnh phổi tắc nghẽn mạn tính (COPD)' },
      { id: 'd2', text: 'Hen phế quản' },
      { id: 'd3', text: 'Giãn phế quản' },
      { id: 'd4', text: 'Suy tim trái mạn tính' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc giãn phế quản tác dụng kéo dài (LAMA/LABA) + Cai thuốc lá + Tiêm phòng cúm' },
      { id: 't2', text: 'Kháng sinh dài ngày' },
      { id: 't3', text: 'Thở oxy liều cao liên tục' },
      { id: 't4', text: 'Phẫu thuật cắt thùy phổi' }
    ],
    correctTreatment: 't1',
    explanation: 'Tiền sử hút thuốc lá, ho khạc đờm mạn tính và rối loạn thông khí tắc nghẽn không hồi phục hoàn toàn là các tiêu chuẩn chẩn đoán COPD. Cai thuốc lá là biện pháp quan trọng nhất để làm chậm tiến triển bệnh.'
  },
  {
    id: 'case-35',
    title: 'Đau bụng dưới sườn phải sau bữa ăn',
    specialty: 'Ngoại tổng quát',
    difficulty: 'medium',
    patientInfo: {
      age: 45,
      gender: 'Nữ',
      chiefComplaint: 'Đau bụng vùng hạ sườn phải, sốt nhẹ.',
      history: 'Bệnh nhân béo phì. Đau xuất hiện sau bữa tối nhiều dầu mỡ, đau lan lên vai phải, kèm buồn nôn.'
    },
    physicalExam: 'Ấn điểm thượng vị và hạ sườn phải đau. Dấu hiệu Murphy dương tính. Không vàng da.',
    labTests: [
      { id: 'us', name: 'Siêu âm bụng', result: 'Túi mật căng to, thành dày 5mm, có sỏi kẹt cổ túi mật.', normalRange: 'Thành túi mật < 3mm', cost: 200 },
      { id: 'cbc', name: 'Bạch cầu', result: '13 G/L', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm túi mật cấp do sỏi' },
      { id: 'd2', text: 'Sỏi ống mật chủ' },
      { id: 'd3', text: 'Viêm gan cấp' },
      { id: 'd4', text: 'Thủng loét dạ dày' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Nhịn ăn, truyền dịch, kháng sinh + Phẫu thuật cắt túi mật nội soi' },
      { id: 't2', text: 'Tán sỏi ngoài cơ thể' },
      { id: 't3', text: 'Uống thuốc tan sỏi mật' },
      { id: 't4', text: 'Nội soi mật tụy ngược dòng (ERCP)' }
    ],
    correctTreatment: 't1',
    explanation: 'Đau hạ sườn phải (cơn đau quặn gan) kèm dấu hiệu Murphy (+) và hình ảnh túi mật thành dày, có sỏi trên siêu âm là điển hình của viêm túi mật cấp. Phẫu thuật cắt túi mật nội soi là phương pháp điều trị tiêu chuẩn.'
  },
  {
    id: 'case-36',
    title: 'Hôn mê ở bệnh nhân đái tháo đường',
    specialty: 'Nội tiết',
    difficulty: 'hard',
    patientInfo: {
      age: 20,
      gender: 'Nam',
      chiefComplaint: 'Lơ mơ, thở nhanh, mùi hơi thở lạ.',
      history: 'Tiền sử đái tháo đường tuýp 1. 2 ngày nay bị viêm họng, sốt, tự ý bỏ tiêm Insulin vì không ăn được.'
    },
    physicalExam: 'Bệnh nhân lơ mơ. Da khô, mắt trũng (dấu hiệu mất nước). Nhịp thở nhanh, sâu (kiểu thở Kussmaul), hơi thở có mùi táo chín (mùi ceton).',
    labTests: [
      { id: 'glu', name: 'Đường huyết mao mạch', result: '28 mmol/L', normalRange: '3.9 - 6.4 mmol/L', cost: 20 },
      { id: 'abg', name: 'Khí máu động mạch', result: 'pH 7.1, HCO3- 10 mmol/L (Toan chuyển hóa nặng).', normalRange: 'pH 7.35-7.45', cost: 300 },
      { id: 'ketone', name: 'Ceton niệu', result: 'Dương tính (+++)', normalRange: 'Âm tính', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Nhiễm toan ceton do đái tháo đường (DKA)' },
      { id: 'd2', text: 'Hôn mê tăng áp lực thẩm thấu' },
      { id: 'd3', text: 'Hạ đường huyết' },
      { id: 'd4', text: 'Hôn mê do nhiễm khuẩn huyết' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Truyền dịch tĩnh mạch liều cao + Insulin tĩnh mạch + Bù Kali' },
      { id: 't2', text: 'Truyền đường Glucose 20%' },
      { id: 't3', text: 'Tiêm Insulin dưới da liều cao' },
      { id: 't4', text: 'Dùng thuốc lợi tiểu' }
    ],
    correctTreatment: 't1',
    explanation: 'Đường huyết cao, toan chuyển hóa và ceton niệu dương tính ở bệnh nhân tuýp 1 bỏ thuốc là bộ ba chẩn đoán DKA. Xử trí quan trọng nhất là bù dịch và dùng Insulin đường tĩnh mạch.'
  },
  {
    id: 'case-37',
    title: 'Mất thị lực tạm thời và yếu chi',
    specialty: 'Thần kinh',
    difficulty: 'hard',
    patientInfo: {
      age: 28,
      gender: 'Nữ',
      chiefComplaint: 'Nhìn mờ mắt phải, tê bì tay trái.',
      history: 'Cách đây 1 năm từng bị yếu chân trái trong 2 tuần rồi tự khỏi. Lần này đột ngột nhìn mờ, đau mắt khi vận động nhãn cầu.'
    },
    physicalExam: 'Thị lực mắt phải giảm. Dấu hiệu Lhermitte dương tính (cảm giác điện giật dọc sống lưng khi cúi đầu). Phản xạ gân xương tăng.',
    labTests: [
      { id: 'mri', name: 'MRI não và tủy sống', result: 'Nhiều ổ tổn thương tăng tín hiệu trên T2 rải rác ở chất trắng quanh não thất và tủy cổ.', normalRange: 'Bình thường', cost: 2500 },
      { id: 'lp', name: 'Dịch não tủy', result: 'Có các dải đẳng điện (Oligoclonal bands).', normalRange: 'Âm tính', cost: 600 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Xơ cứng rải rác (Multiple Sclerosis - MS)' },
      { id: 'd2', text: 'Viêm tủy thị kinh (NMO)' },
      { id: 'd3', text: 'U não' },
      { id: 'd4', text: 'Đột quỵ não ở người trẻ' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Corticoid liều cao trong đợt cấp + Thuốc điều trị thay đổi tiến triển bệnh (Interferon...)' },
      { id: 't2', text: 'Kháng sinh liều cao' },
      { id: 't3', text: 'Phẫu thuật lấy khối u' },
      { id: 't4', text: 'Chỉ theo dõi vì bệnh tự khỏi' }
    ],
    correctTreatment: 't1',
    explanation: 'Tổn thương thần kinh phân tán theo không gian (nhiều vị trí) và thời gian (nhiều đợt) ở phụ nữ trẻ gợi ý mạnh MS. MRI và dịch não tủy giúp khẳng định chẩn đoán.'
  },
  {
    id: 'case-38',
    title: 'Phù toàn thân và nước tiểu nhiều bọt',
    specialty: 'Thận học',
    difficulty: 'medium',
    patientInfo: {
      age: 35,
      gender: 'Nam',
      chiefComplaint: 'Phù toàn thân, tăng cân nhanh, nước tiểu có nhiều bọt.',
      history: 'Phù bắt đầu từ mặt, sau đó lan xuống chân và toàn thân. Tăng 5kg trong 1 tuần. Nước tiểu đục, nhiều bọt như xà phòng.'
    },
    physicalExam: 'Phù mềm, trắng, ấn lõm đối xứng 2 bên. Tràn dịch màng tinh hoàn. HA 120/80 mmHg.',
    labTests: [
      { id: 'up', name: 'Protein niệu 24h', result: '6.5 g/24h', normalRange: '< 0.15 g/24h', cost: 100 },
      { id: 'alb', name: 'Albumin máu', result: '22 g/L', normalRange: '35-50 g/L', cost: 50 },
      { id: 'chol', name: 'Cholesterol máu', result: '8.5 mmol/L', normalRange: '< 5.2 mmol/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Hội chứng thận hư' },
      { id: 'd2', text: 'Viêm cầu thận cấp' },
      { id: 'd3', text: 'Suy tim toàn bộ' },
      { id: 'd4', text: 'Xơ gan' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Corticoid (Prednisolone) + Lợi tiểu + Chế độ ăn đủ đạm, giảm muối' },
      { id: 't2', text: 'Kháng sinh liều cao' },
      { id: 't3', text: 'Chạy thận nhân tạo cấp cứu' },
      { id: 't4', text: 'Hạn chế tối đa đạm trong chế độ ăn' }
    ],
    correctTreatment: 't1',
    explanation: 'Phù nặng kèm Protein niệu ngưỡng thận hư (> 3.5g/24h) và Albumin máu giảm (< 30g/L) là các tiêu chuẩn chẩn đoán hội chứng thận hư. Corticoid là lựa chọn điều trị hàng đầu cho thể vô căn.'
  },
  {
    id: 'case-39',
    title: 'Đau ngực giảm khi ngồi cúi người',
    specialty: 'Tim mạch',
    difficulty: 'medium',
    patientInfo: {
      age: 28,
      gender: 'Nam',
      chiefComplaint: 'Đau ngực dữ dội vùng sau xương ức.',
      history: 'Cách đây 1 tuần có sốt, ho, đau họng. Đau ngực tăng khi hít sâu hoặc nằm ngửa, giảm rõ rệt khi ngồi cúi người ra phía trước.'
    },
    physicalExam: 'Nghe tim có tiếng cọ màng tim ở bờ trái xương ức. Nhịp tim nhanh đều.',
    labTests: [
      { id: 'ecg', name: 'Điện tâm đồ', result: 'Đoạn ST chênh lên đồng hướng ở hầu hết các chuyển đạo, đoạn PR chênh xuống.', normalRange: 'Bình thường', cost: 100 },
      { id: 'echo', name: 'Siêu âm tim', result: 'Có lớp dịch mỏng khoang màng tim (5mm).', normalRange: 'Không có dịch', cost: 300 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm màng ngoài tim cấp' },
      { id: 'd2', text: 'Nhồi máu cơ tim cấp' },
      { id: 'd3', text: 'Thuyên tắc phổi' },
      { id: 'd4', text: 'Phình tách động mạch chủ' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'NSAIDs (Aspirin/Ibuprofen) + Colchicine' },
      { id: 't2', text: 'Thuốc tiêu sợi huyết' },
      { id: 't3', text: 'Chọc hút dịch màng tim ngay' },
      { id: 't4', text: 'Kháng sinh tĩnh mạch' }
    ],
    correctTreatment: 't1',
    explanation: 'Đau ngực tư thế đặc trưng, tiếng cọ màng tim và thay đổi ECG lan tỏa (ST chênh lên đồng hướng) là các dấu hiệu điển hình của viêm màng ngoài tim cấp, thường do virus sau nhiễm trùng hô hấp.'
  },
  {
    id: 'case-40',
    title: 'Gầy sút cân và run tay',
    specialty: 'Nội tiết',
    difficulty: 'easy',
    patientInfo: {
      age: 32,
      gender: 'Nữ',
      chiefComplaint: 'Hồi hộp đánh trống ngực, gầy sút 4kg trong 1 tháng dù ăn nhiều.',
      history: 'Luôn cảm thấy nóng, hay vã mồ hôi, tính tình dễ kích động, kinh nguyệt ít dần.'
    },
    physicalExam: 'Tuyến giáp to lan tỏa, mềm, có tiếng thổi tâm thu tại tuyến. Run tay tần số nhanh, biên độ nhỏ. Mắt hơi lồi.',
    labTests: [
      { id: 'tsh', name: 'TSH', result: '0.01 mIU/L', normalRange: '0.4 - 4.0 mIU/L', cost: 150 },
      { id: 'ft4', name: 'FT4', result: '45 pmol/L', normalRange: '12 - 22 pmol/L', cost: 150 },
      { id: 'trab', name: 'Kháng thể kháng thụ thể TSH (TRAb)', result: 'Dương tính', normalRange: 'Âm tính', cost: 300 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Bệnh Basedow (Graves)' },
      { id: 'd2', text: 'Viêm tuyến giáp cấp' },
      { id: 'd3', text: 'U độc tuyến giáp' },
      { id: 'd4', text: 'Rối loạn lo âu' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Thuốc kháng giáp tổng hợp (Methimazole) + Thuốc chẹn Beta' },
      { id: 't2', text: 'Bổ sung I-ốt vào chế độ ăn' },
      { id: 't3', text: 'Phẫu thuật cắt toàn bộ tuyến giáp ngay' },
      { id: 't4', text: 'Uống Levothyroxine' }
    ],
    correctTreatment: 't1',
    explanation: 'Hội chứng cường giáp (gầy sút, run tay, tim nhanh) kèm tuyến giáp to lan tỏa và lồi mắt là biểu hiện của bệnh Basedow. TSH giảm và FT4 tăng khẳng định tình trạng cường giáp.'
  },
  {
    id: 'case-41',
    title: 'Thay đổi thói quen đại tiện ở người già',
    specialty: 'Tiêu hóa',
    difficulty: 'medium',
    patientInfo: {
      age: 68,
      gender: 'Nam',
      chiefComplaint: 'Đi ngoài phân lỏng xen kẽ táo bón, phân có nhầy máu.',
      history: 'Triệu chứng xuất hiện 3 tháng nay. Cảm giác đi ngoài không hết (mót rặn). Gầy sút 5kg.'
    },
    physicalExam: 'Bụng mềm, không u cục. Thăm trực tràng (PR) sờ thấy khối u sùi cách rìa hậu môn 5cm, chạm vào dễ chảy máu.',
    labTests: [
      { id: 'cea', name: 'CEA (Chất chỉ điểm ung thư)', result: '25 ng/mL', normalRange: '< 5 ng/mL', cost: 200 },
      { id: 'colon', name: 'Nội soi đại trực tràng', result: 'Khối u sùi loét chiếm gần hết chu vi lòng trực tràng. Sinh thiết: Ung thư biểu mô tuyến.', normalRange: 'Bình thường', cost: 1000 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Ung thư trực tràng' },
      { id: 'd2', text: 'Trĩ nội độ 3' },
      { id: 'd3', text: 'Viêm loét đại trực tràng chảy máu' },
      { id: 'd4', text: 'Polyp trực tràng' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Phẫu thuật cắt đoạn trực tràng + Hóa xạ trị bổ trợ' },
      { id: 't2', text: 'Thắt trĩ bằng vòng cao su' },
      { id: 't3', text: 'Dùng kháng sinh và thuốc cầm máu' },
      { id: 't4', text: 'Thụt tháo đại tràng hàng ngày' }
    ],
    correctTreatment: 't1',
    explanation: 'Người lớn tuổi có thay đổi thói quen đại tiện và phân máu là dấu hiệu cảnh báo ung thư đại trực tràng. Thăm trực tràng và nội soi sinh thiết là chìa khóa để chẩn đoán xác định.'
  },
  {
    id: 'case-42',
    title: 'Đau khớp gối khi đi cầu thang',
    specialty: 'Cơ xương khớp',
    difficulty: 'easy',
    patientInfo: {
      age: 62,
      gender: 'Nữ',
      chiefComplaint: 'Đau khớp gối 2 bên, đau nhiều khi đi cầu thang hoặc ngồi xổm.',
      history: 'Đau âm ỉ nhiều năm, tăng dần. Cứng khớp buổi sáng khoảng 5-10 phút. Có tiếng "lục khục" trong khớp khi vận động.'
    },
    physicalExam: 'Khớp gối biến dạng nhẹ, có chồi xương quanh khớp. Ấn đau diện khớp. Nghiệm pháp bào gỗ dương tính.',
    labTests: [
      { id: 'xr', name: 'X-quang khớp gối thẳng nghiêng', result: 'Hẹp khe khớp không đối xứng, xơ hóa xương dưới sụn, có gai xương.', normalRange: 'Bình thường', cost: 150 },
      { id: 'esr', name: 'Tốc độ lắng máu', result: '15 mm/h', normalRange: '< 20 mm/h', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Thoái hóa khớp gối' },
      { id: 'd2', text: 'Viêm khớp dạng thấp' },
      { id: 'd3', text: 'Gout mạn tính' },
      { id: 'd4', text: 'Rách sụn chêm' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Giảm cân, tập cơ tứ đầu đùi + Thuốc giảm đau (Paracetamol/NSAIDs) + Tiêm chất nhờn' },
      { id: 't2', text: 'Kháng sinh liều cao' },
      { id: 't3', text: 'Bất động khớp bằng nẹp' },
      { id: 't4', text: 'Phẫu thuật thay khớp ngay lập tức' }
    ],
    correctTreatment: 't1',
    explanation: 'Đau khớp kiểu cơ học (tăng khi vận động, giảm khi nghỉ), cứng khớp buổi sáng ngắn và hình ảnh X-quang điển hình (hẹp khe khớp, gai xương) ở người già hướng tới thoái hóa khớp.'
  },
  {
    id: 'case-43',
    title: 'Khó thở và mẩn ngứa sau khi ăn hải sản',
    specialty: 'Cấp cứu',
    difficulty: 'medium',
    patientInfo: {
      age: 25,
      gender: 'Nam',
      chiefComplaint: 'Khó thở, tức ngực, nổi ban ngứa toàn thân.',
      history: 'Triệu chứng xuất hiện 15 phút sau khi ăn tôm tại nhà hàng. Bệnh nhân thấy ngứa họng, sau đó khó thở nhanh chóng.'
    },
    physicalExam: 'Mạch nhanh 130 lần/phút, HA 80/50 mmHg. Thở rít thanh quản. Ban sẩn đỏ toàn thân. Phổi có ran rít lan tỏa.',
    labTests: [
      { id: 'spo2', name: 'SpO2', result: '85%', normalRange: '95-100%', cost: 10 },
      { id: 'cbc', name: 'Bạch cầu', result: '9 G/L', normalRange: '4-10 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Sốc phản vệ' },
      { id: 'd2', text: 'Mề đay cấp' },
      { id: 'd3', text: 'Cơn hen phế quản cấp' },
      { id: 'd4', text: 'Ngộ độc thực phẩm' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Tiêm Adrenaline bắp ngay lập tức + Thở oxy + Truyền dịch' },
      { id: 't2', text: 'Uống thuốc kháng Histamin' },
      { id: 't3', text: 'Rửa dạ dày cấp cứu' },
      { id: 't4', text: 'Xông họng bằng thuốc giãn phế quản' }
    ],
    correctTreatment: 't1',
    explanation: 'Phản ứng dị ứng xuất hiện nhanh sau tiếp xúc dị nguyên kèm suy hô hấp và tụt huyết áp là tiêu chuẩn chẩn đoán sốc phản vệ. Adrenaline là thuốc thiết yếu và phải được dùng càng sớm càng tốt.'
  },
  {
    id: 'case-44',
    title: 'Sốt cao và đau lưng',
    specialty: 'Thận học',
    difficulty: 'medium',
    patientInfo: {
      age: 40,
      gender: 'Nữ',
      chiefComplaint: 'Sốt cao, rét run, đau vùng thắt lưng phải.',
      history: 'Tiền sử hay bị viêm bàng quang. 2 ngày nay sốt cao 39 độ, tiểu buốt, tiểu rắt và đau tức vùng lưng bên phải.'
    },
    physicalExam: 'Tình trạng nhiễm trùng rõ. Chạm thận (-), bập bềnh thận (-). Ấn điểm niệu quản trên bên phải đau dữ dội. Vỗ hông lưng (+) bên phải.',
    labTests: [
      { id: 'ua', name: 'Tổng phân tích nước tiểu', result: 'Bạch cầu (+++), Nitrit (+).', normalRange: 'Âm tính', cost: 50 },
      { id: 'cbc', name: 'Bạch cầu máu', result: '16 G/L (trung tính 85%)', normalRange: '4-10 G/L', cost: 50 },
      { id: 'us', name: 'Siêu âm thận', result: 'Thận phải kích thước hơi to, đài bể thận giãn nhẹ.', normalRange: 'Bình thường', cost: 200 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Viêm thận bể thận cấp' },
      { id: 'd2', text: 'Viêm bàng quang cấp' },
      { id: 'd3', text: 'Sỏi niệu quản' },
      { id: 'd4', text: 'Áp xe cơ thắt lưng chậu' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Kháng sinh đường tĩnh mạch + Truyền dịch + Theo dõi chức năng thận' },
      { id: 't2', text: 'Chỉ dùng kháng sinh đường uống tại nhà' },
      { id: 't3', text: 'Phẫu thuật lấy sỏi cấp cứu' },
      { id: 't4', text: 'Đặt ống thông tiểu và theo dõi' }
    ],
    correctTreatment: 't1',
    explanation: 'Sốt cao, rét run kèm đau hông lưng và bằng chứng nhiễm trùng nước tiểu (Bạch cầu, Nitrit) hướng tới viêm thận bể thận cấp. Cần dùng kháng sinh phổ rộng sớm để tránh biến chứng nhiễm khuẩn huyết.'
  },
  {
    id: 'case-45',
    title: 'Nhức đầu và phù ở phụ nữ mang thai',
    specialty: 'Sản phụ khoa',
    difficulty: 'medium',
    patientInfo: {
      age: 28,
      gender: 'Nữ',
      chiefComplaint: 'Nhức đầu, hoa mắt, phù chân.',
      history: 'Thai con so, 36 tuần. Khám thai định kỳ thấy huyết áp tăng cao, phù chân tăng nhanh trong 1 tuần nay.'
    },
    physicalExam: 'HA 160/100 mmHg. Phù chân (++) trắng, mềm, ấn lõm. Tim thai 140 lần/phút. Không có cơn co tử cung.',
    labTests: [
      { id: 'up', name: 'Protein niệu (que thử)', result: 'Dương tính (+++)', normalRange: 'Âm tính', cost: 20 },
      { id: 'plt', name: 'Tiểu cầu', result: '160 G/L', normalRange: '150-400 G/L', cost: 50 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Tiền sản giật' },
      { id: 'd2', text: 'Tăng huyết áp thai kỳ' },
      { id: 'd3', text: 'Sản giật' },
      { id: 'd4', text: 'Hội chứng HELLP' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Nghỉ ngơi, thuốc hạ áp, Magnesium Sulfate dự phòng co giật, cân nhắc đình chỉ thai nghén' },
      { id: 't2', text: 'Chỉ cần ăn nhạt và theo dõi tại nhà' },
      { id: 't3', text: 'Mổ lấy thai cấp cứu ngay lập tức' },
      { id: 't4', text: 'Dùng thuốc lợi tiểu liều cao' }
    ],
    correctTreatment: 't1',
    explanation: 'Thai > 20 tuần có tăng huyết áp và protein niệu là tiêu chuẩn chẩn đoán tiền sản giật. Nhức đầu, hoa mắt là dấu hiệu tiền sản giật nặng, cần dùng Magnesium Sulfate để dự phòng cơn co giật (sản giật).'
  },
  {
    id: 'case-46',
    title: 'Hồi hộp và nhịp tim không đều',
    specialty: 'Tim mạch',
    difficulty: 'medium',
    patientInfo: {
      age: 72,
      gender: 'Nam',
      chiefComplaint: 'Cảm giác tim đập nhanh, không đều, hụt hẫng trong ngực.',
      history: 'Tiền sử tăng huyết áp nhiều năm. Triệu chứng xuất hiện vài giờ nay, kèm theo mệt mỏi và hơi khó thở.'
    },
    physicalExam: 'Nhịp tim hoàn toàn không đều về cả tần số và cường độ. Tần số tim 130 lần/phút. HA 110/70 mmHg.',
    labTests: [
      { id: 'ecg', name: 'Điện tâm đồ', result: 'Mất sóng P, thay bằng các sóng f lăn tăn, khoảng cách R-R hoàn toàn không đều.', normalRange: 'Nhịp xoang đều', cost: 100 },
      { id: 'echo', name: 'Siêu âm tim', result: 'Nhĩ trái giãn (45mm), chức năng tâm thu thất trái (EF) 50%.', normalRange: 'Nhĩ trái < 40mm', cost: 300 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Rung nhĩ' },
      { id: 'd2', text: 'Ngoại tâm thu nhĩ' },
      { id: 'd3', text: 'Cuồng nhĩ' },
      { id: 'd4', text: 'Nhịp nhanh kịch phát trên thất' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Kiểm soát tần số thất (Digoxin/Chẹn Beta) + Thuốc chống đông dự phòng tắc mạch' },
      { id: 't2', text: 'Sốc điện chuyển nhịp ngay lập tức' },
      { id: 't3', text: 'Đặt máy tạo nhịp tim' },
      { id: 't4', text: 'Chỉ cần nghỉ ngơi và theo dõi' }
    ],
    correctTreatment: 't1',
    explanation: 'Loạn nhịp hoàn toàn trên lâm sàng và hình ảnh mất sóng P, thay bằng sóng f trên ECG là đặc trưng của rung nhĩ. Mục tiêu điều trị quan trọng là kiểm soát nhịp và dự phòng đột quỵ do huyết khối.'
  },
  {
    id: 'case-47',
    title: 'Run tay và đi lại chậm chạp',
    specialty: 'Thần kinh',
    difficulty: 'easy',
    patientInfo: {
      age: 70,
      gender: 'Nam',
      chiefComplaint: 'Run tay khi nghỉ, đi lại khó khăn.',
      history: 'Triệu chứng bắt đầu từ run ở tay phải, sau đó lan sang tay trái. Đi lại chậm, hay bị ngã, chữ viết nhỏ dần.'
    },
    physicalExam: 'Run tay tần số chậm (4-6 chu kỳ/giây) khi nghỉ, giảm khi vận động. Vẻ mặt vô cảm (mặt nạ). Tăng trương lực cơ kiểu "bánh xe răng cưa". Dáng đi chúi người ra trước, bước nhỏ.',
    labTests: [
      { id: 'mri', name: 'MRI não', result: 'Không thấy tổn thương khu trú rõ rệt, teo não nhẹ theo tuổi.', normalRange: 'Bình thường', cost: 2000 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Bệnh Parkinson' },
      { id: 'd2', text: 'Run vô căn' },
      { id: 'd3', text: 'Tai biến mạch máu não cũ' },
      { id: 'd4', text: 'Sa sút trí tuệ' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Levodopa/Carbidopa + Thuốc đồng vận Dopamine + Phục hồi chức năng' },
      { id: 't2', text: 'Kháng sinh liều cao' },
      { id: 't3', text: 'Phẫu thuật não' },
      { id: 't4', text: 'Dùng thuốc an thần' }
    ],
    correctTreatment: 't1',
    explanation: 'Tam chứng: Run khi nghỉ, cứng đờ người và chậm vận động là các dấu hiệu lâm sàng kinh điển của bệnh Parkinson. Chẩn đoán chủ yếu dựa vào lâm sàng và đáp ứng với liệu pháp Levodopa.'
  },
  {
    id: 'case-48',
    title: 'Tiêu chảy mạn tính và gầy sút',
    specialty: 'Tiêu hóa',
    difficulty: 'hard',
    patientInfo: {
      age: 30,
      gender: 'Nữ',
      chiefComplaint: 'Tiêu chảy kéo dài, đầy hơi, sụt cân.',
      history: 'Đi ngoài phân lỏng, nát, có mùi hôi, phân bóng mỡ. Triệu chứng nặng lên khi ăn các món có bột mì (bánh mì, mì tôm).'
    },
    physicalExam: 'Người gầy, chỉ số BMI 17. Niêm mạc nhợt (thiếu máu). Bụng chướng nhẹ.',
    labTests: [
      { id: 'tga', name: 'Kháng thể kháng Transglutaminase (tTG-IgA)', result: 'Dương tính mạnh', normalRange: 'Âm tính', cost: 300 },
      { id: 'biopsy', name: 'Sinh thiết tá tràng qua nội soi', result: 'Teo nhung mao ruột non, tăng tế bào lympho biểu mô.', normalRange: 'Bình thường', cost: 1200 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Bệnh Celiac' },
      { id: 'd2', text: 'Hội chứng ruột kích thích (IBS)' },
      { id: 'd3', text: 'Viêm loét đại tràng' },
      { id: 'd4', text: 'Nhiễm ký sinh trùng đường ruột' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Chế độ ăn không Gluten (Gluten-free diet) suốt đời' },
      { id: 't2', text: 'Dùng thuốc cầm tiêu chảy' },
      { id: 't3', text: 'Kháng sinh đường ruột' },
      { id: 't4', text: 'Phẫu thuật cắt đoạn ruột' }
    ],
    correctTreatment: 't1',
    explanation: 'Tiêu chảy mạn tính kèm hội chứng kém hấp thu và liên quan rõ rệt với Gluten (trong bột mì) gợi ý bệnh Celiac. Kháng thể tTG-IgA và sinh thiết tá tràng giúp khẳng định chẩn đoán.'
  },
  {
    id: 'case-49',
    title: 'Hạch cổ to không đau',
    specialty: 'Huyết học',
    difficulty: 'medium',
    patientInfo: {
      age: 24,
      gender: 'Nam',
      chiefComplaint: 'Xuất hiện hạch vùng cổ phải to dần, không đau.',
      history: 'Hạch xuất hiện 2 tháng nay. Kèm theo sốt nhẹ về chiều, vã mồ hôi trộm ban đêm và sút 3kg.'
    },
    physicalExam: 'Hạch cổ phải kích thước 3cm, chắc, di động, không đau, không nóng đỏ. Gan lách không to.',
    labTests: [
      { id: 'bx', name: 'Sinh thiết hạch', result: 'Thấy tế bào Reed-Sternberg (tế bào mắt cú) trên nền thâm nhiễm tế bào viêm.', normalRange: 'Bình thường', cost: 1000 },
      { id: 'ct', name: 'CT ngực bụng', result: 'Có vài hạch trung thất kích thước 1.5cm.', normalRange: 'Bình thường', cost: 1500 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'U lympho Hodgkin' },
      { id: 'd2', text: 'Lao hạch' },
      { id: 'd3', text: 'Viêm hạch mạn tính' },
      { id: 'd4', text: 'Ung thư di căn hạch' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Hóa trị liệu (phác đồ ABVD) +/- Xạ trị' },
      { id: 't2', text: 'Điều trị lao theo phác đồ' },
      { id: 't3', text: 'Phẫu thuật cắt bỏ toàn bộ hạch' },
      { id: 't4', text: 'Chỉ dùng kháng sinh và theo dõi' }
    ],
    correctTreatment: 't1',
    explanation: 'Hạch to không đau ở người trẻ kèm triệu chứng hệ thống (sốt, sút cân, mồ hôi trộm - triệu chứng B) gợi ý bệnh lý ác tính hệ lympho. Tế bào Reed-Sternberg là dấu hiệu đặc trưng của bệnh Hodgkin.'
  },
  {
    id: 'case-50',
    title: 'Ho kéo dài và sốt nhẹ về chiều',
    specialty: 'Truyền nhiễm',
    difficulty: 'easy',
    patientInfo: {
      age: 45,
      gender: 'Nam',
      chiefComplaint: 'Ho khạc đờm kéo dài > 3 tuần, thỉnh thoảng ho ra máu.',
      history: 'Sốt nhẹ về chiều, mệt mỏi, kém ăn, sút 4kg trong 1 tháng. Tiền sử hút thuốc lá nhiều.'
    },
    physicalExam: 'Người gầy. Nghe phổi có ran ẩm, ran nổ khu trú ở vùng đỉnh phổi phải.',
    labTests: [
      { id: 'afb', name: 'Soi đờm tìm AFB', result: 'Dương tính (+)', normalRange: 'Âm tính', cost: 50 },
      { id: 'xr', name: 'X-quang phổi', result: 'Tổn thương dạng thâm nhiễm và hang ở hạ đòn và đỉnh phổi phải.', normalRange: 'Bình thường', cost: 150 }
    ],
    diagnosisOptions: [
      { id: 'd1', text: 'Lao phổi' },
      { id: 'd2', text: 'Ung thư phổi' },
      { id: 'd3', text: 'Viêm phổi thùy' },
      { id: 'd4', text: 'Áp xe phổi' }
    ],
    correctDiagnosis: 'd1',
    treatmentOptions: [
      { id: 't1', text: 'Điều trị thuốc chống lao theo phác đồ quốc gia (6 tháng)' },
      { id: 't2', text: 'Kháng sinh phổ rộng trong 2 tuần' },
      { id: 't3', text: 'Phẫu thuật cắt thùy phổi' },
      { id: 't4', text: 'Hóa trị liệu ung thư' }
    ],
    correctTreatment: 't1',
    explanation: 'Ho kéo dài, sốt nhẹ về chiều, sút cân và hình ảnh thâm nhiễm vùng đỉnh phổi là bệnh cảnh điển hình của lao phổi. Soi đờm thấy AFB (+) khẳng định chẩn đoán và khả năng lây nhiễm.'
  }
];
