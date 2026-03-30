import { GoogleGenAI } from "@google/genai";

const MODELS = ['gemini-3-flash-preview', 'gemini-3.1-pro-preview', 'gemini-2.5-flash-preview'];

export async function callGeminiAI(prompt: string, apiKey: string, modelIndex = 0): Promise<string | null> {
  if (!apiKey) {
    throw new Error('Vui lòng nhập API Key!');
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const modelName = MODELS[modelIndex] || MODELS[0];
    
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        temperature: 0.7,
        maxOutputTokens: 4096,
      },
    });

    return response.text || '';
  } catch (error: any) {
    console.error(`Error with model ${MODELS[modelIndex]}:`, error);
    
    // Fallback to next model if available
    if (modelIndex < MODELS.length - 1) {
      return callGeminiAI(prompt, apiKey, modelIndex + 1);
    }
    
    throw error;
  }
}

export const getMedicalExplanationPrompt = (caseTitle: string, userDiagnosis: string, correctDiagnosis: string, userTreatment: string, correctTreatment: string, explanation: string) => {
  return `Bạn là một chuyên gia y khoa cao cấp. Hãy phân tích ca lâm sàng "${caseTitle}".
  
  Dữ liệu ca bệnh:
  - Chẩn đoán đúng: ${correctDiagnosis}
  - Điều trị đúng: ${correctTreatment}
  - Giải thích cơ bản: ${explanation}
  
  Lựa chọn của người dùng:
  - Chẩn đoán: ${userDiagnosis}
  - Điều trị: ${userTreatment}
  
  Hãy cung cấp phản hồi chi tiết (khoảng 300-500 từ) bằng tiếng Việt, bao gồm:
  1. Nhận xét về lựa chọn của người dùng (đúng hay sai, tại sao).
  2. Phân tích sâu về cơ chế bệnh sinh và các dấu hiệu lâm sàng then chốt.
  3. Giải thích tại sao các chẩn đoán phân biệt khác bị loại trừ.
  4. Cập nhật phác đồ điều trị mới nhất liên quan đến ca bệnh này.
  5. Lời khuyên cho sinh viên y khoa để không bỏ sót ca này trong thực tế.
  
  Sử dụng định dạng Markdown để trình bày đẹp mắt.`;
};
