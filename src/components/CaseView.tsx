import React from 'react';
import { ClinicalCase, Option } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Info, FlaskConical, Stethoscope, ClipboardList, CheckCircle2, XCircle, Loader2, Sparkles } from 'lucide-react';
import { cn } from './Layout';
import { Marked } from 'marked';

const marked = new Marked();

interface CaseViewProps {
  clinicalCase: ClinicalCase;
  onComplete: (diagnosis: string, treatment: string, explanation: string) => void;
  onClose: () => void;
  isGeneratingExplanation: boolean;
  aiExplanation: string | null;
}

export const CaseView: React.FC<CaseViewProps> = ({ clinicalCase, onComplete, onClose, isGeneratingExplanation, aiExplanation }) => {
  const [step, setStep] = React.useState(1);
  const [selectedTests, setSelectedTests] = React.useState<string[]>([]);
  const [selectedDiagnosis, setSelectedDiagnosis] = React.useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = React.useState<string | null>(null);
  const [showResults, setShowResults] = React.useState(false);

  const handleTestSelect = (testId: string) => {
    if (!selectedTests.includes(testId)) {
      setSelectedTests([...selectedTests, testId]);
    }
  };

  const handleSubmit = () => {
    if (selectedDiagnosis && selectedTreatment) {
      onComplete(selectedDiagnosis, selectedTreatment, clinicalCase.explanation);
      setShowResults(true);
      setStep(4);
    }
  };

  const isCorrectDiagnosis = selectedDiagnosis === clinicalCase.correctDiagnosis;
  const isCorrectTreatment = selectedTreatment === clinicalCase.correctTreatment;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="font-bold text-lg">{clinicalCase.title}</h2>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">{clinicalCase.specialty}</span>
              <span className={cn("px-2 py-0.5 rounded-full", 
                clinicalCase.difficulty === 'easy' ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" :
                clinicalCase.difficulty === 'medium' ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" :
                "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
              )}>
                {clinicalCase.difficulty === 'easy' ? 'Dễ' : clinicalCase.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={cn("w-8 h-1.5 rounded-full transition-all duration-300", 
              step >= s ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"
            )} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                <Info size={20} />
                <h3>Thông tin bệnh nhân & Bệnh sử</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Tuổi</span>
                  <p className="text-lg font-bold">{clinicalCase.patientInfo.age}</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Giới tính</span>
                  <p className="text-lg font-bold">{clinicalCase.patientInfo.gender}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                  <span className="text-xs text-orange-600 dark:text-orange-400 uppercase font-bold tracking-wider">Lý do vào viện</span>
                  <p className="mt-1 font-medium">{clinicalCase.patientInfo.chiefComplaint}</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Bệnh sử</span>
                  <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{clinicalCase.patientInfo.history}</p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                <Stethoscope size={20} />
                <h3>Khám lâm sàng & Chỉ định xét nghiệm</h3>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Kết quả khám</span>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{clinicalCase.physicalExam}</p>
              </div>
              
              <div className="space-y-3">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Danh sách xét nghiệm đề xuất</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {clinicalCase.labTests.map((test) => (
                    <button
                      key={test.id}
                      onClick={() => handleTestSelect(test.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group",
                        selectedTests.includes(test.id)
                          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg transition-colors", 
                          selectedTests.includes(test.id) ? "bg-blue-500 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500 group-hover:text-blue-500"
                        )}>
                          <FlaskConical size={18} />
                        </div>
                        <span className="font-medium text-sm">{test.name}</span>
                      </div>
                      {selectedTests.includes(test.id) && <CheckCircle2 size={18} className="text-blue-500" />}
                    </button>
                  ))}
                </div>
              </div>

              {selectedTests.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Kết quả cận lâm sàng</span>
                  <div className="space-y-3">
                    {selectedTests.map((testId) => {
                      const test = clinicalCase.labTests.find(t => t.id === testId);
                      if (!test) return null;
                      return (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={testId} 
                          className="p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <span className="font-bold text-sm">{test.name}</span>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{test.result}</p>
                              <p className="text-[10px] text-slate-500">BT: {test.normalRange}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                <ClipboardList size={20} />
                <h3>Chẩn đoán & Xử trí</h3>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Chẩn đoán của bạn là gì?</span>
                <div className="space-y-2">
                  {clinicalCase.diagnosisOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedDiagnosis(opt.id)}
                      className={cn(
                        "w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between",
                        selectedDiagnosis === opt.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 dark:shadow-none"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      )}
                    >
                      <span className="font-medium">{opt.text}</span>
                      <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", 
                        selectedDiagnosis === opt.id ? "border-white bg-white" : "border-slate-300 dark:border-slate-600"
                      )}>
                        {selectedDiagnosis === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Hướng điều trị ưu tiên?</span>
                <div className="space-y-2">
                  {clinicalCase.treatmentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedTreatment(opt.id)}
                      className={cn(
                        "w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between",
                        selectedTreatment === opt.id
                          ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-200 dark:shadow-none"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      )}
                    >
                      <span className="font-medium">{opt.text}</span>
                      <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", 
                        selectedTreatment === opt.id ? "border-white bg-white" : "border-slate-300 dark:border-slate-600"
                      )}>
                        {selectedTreatment === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="text-center space-y-4 py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold">Hoàn thành ca bệnh!</h3>
                <p className="text-slate-500 max-w-md mx-auto">Bạn đã đưa ra các quyết định lâm sàng. Hãy xem kết quả và nhận phản hồi chi tiết từ chuyên gia AI.</p>
                
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-4">
                  <div className={cn("p-4 rounded-2xl border flex flex-col items-center gap-2", 
                    isCorrectDiagnosis ? "bg-green-50 border-green-100 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400" : "bg-red-50 border-red-100 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                  )}>
                    {isCorrectDiagnosis ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                    <span className="text-xs font-bold uppercase">Chẩn đoán</span>
                    <span className="text-sm font-bold">{isCorrectDiagnosis ? 'Chính xác' : 'Chưa đúng'}</span>
                  </div>
                  <div className={cn("p-4 rounded-2xl border flex flex-col items-center gap-2", 
                    isCorrectTreatment ? "bg-green-50 border-green-100 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400" : "bg-red-50 border-red-100 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                  )}>
                    {isCorrectTreatment ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                    <span className="text-xs font-bold uppercase">Điều trị</span>
                    <span className="text-sm font-bold">{isCorrectTreatment ? 'Chính xác' : 'Chưa đúng'}</span>
                  </div>
                </div>
              </div>

              {isGeneratingExplanation ? (
                <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 flex flex-col items-center gap-4 text-center">
                  <Loader2 className="animate-spin text-blue-600" size={32} />
                  <div>
                    <p className="font-bold text-blue-900 dark:text-blue-100">Đang phân tích chuyên sâu...</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">AI đang tổng hợp kiến thức y khoa để phản hồi cho bạn.</p>
                  </div>
                </div>
              ) : aiExplanation ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <Sparkles size={20} />
                    <h3>Phản hồi từ chuyên gia AI</h3>
                  </div>
                  <div 
                    className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: marked.parse(aiExplanation) as string }}
                  />
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
        {step < 4 ? (
          <>
            <button 
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="font-medium">Quay lại</span>
            </button>
            <button 
              onClick={() => {
                if (step === 3) handleSubmit();
                else setStep(step + 1);
              }}
              disabled={step === 3 && (!selectedDiagnosis || !selectedTreatment)}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 dark:shadow-none disabled:opacity-50"
            >
              <span className="font-bold">{step === 3 ? 'Gửi kết quả' : 'Tiếp tục'}</span>
              <ChevronRight size={20} />
            </button>
          </>
        ) : (
          <button 
            onClick={onClose}
            className="w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Đóng ca bệnh
          </button>
        )}
      </div>
    </div>
  );
};
