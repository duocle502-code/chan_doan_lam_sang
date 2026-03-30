import React from 'react';
import { Session, ClinicalCase } from '../types';
import { motion } from 'motion/react';
import { X, CheckCircle2, XCircle, Info, Stethoscope, FlaskConical, ClipboardList, Sparkles, Calendar, Trophy, AlertCircle } from 'lucide-react';
import { cn } from './Layout';
import { Marked } from 'marked';

const marked = new Marked();

interface SessionReviewProps {
  session: Session;
  clinicalCase: ClinicalCase | undefined;
  onClose: () => void;
}

export const SessionReview: React.FC<SessionReviewProps> = ({ session, clinicalCase, onClose }) => {
  const [activeSection, setActiveSection] = React.useState<'overview' | 'case' | 'result' | 'ai'>('overview');

  if (!clinicalCase) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md text-center shadow-2xl"
        >
          <AlertCircle size={48} className="mx-auto text-orange-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Không tìm thấy ca bệnh</h3>
          <p className="text-slate-500 mb-6">Ca bệnh này đã bị xóa hoặc phiên thực hành cũ không lưu đủ thông tin để xem lại.</p>
          <button onClick={onClose} className="px-6 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
            Đóng
          </button>
        </motion.div>
      </div>
    );
  }

  const isCorrectDiagnosis = session.selectedDiagnosisId === clinicalCase.correctDiagnosis;
  const isCorrectTreatment = session.selectedTreatmentId === clinicalCase.correctTreatment;

  const selectedDiagnosisText = clinicalCase.diagnosisOptions.find(o => o.id === session.selectedDiagnosisId)?.text || 'Không xác định';
  const correctDiagnosisText = clinicalCase.diagnosisOptions.find(o => o.id === clinicalCase.correctDiagnosis)?.text || '';
  const selectedTreatmentText = clinicalCase.treatmentOptions.find(o => o.id === session.selectedTreatmentId)?.text || 'Không xác định';
  const correctTreatmentText = clinicalCase.treatmentOptions.find(o => o.id === clinicalCase.correctTreatment)?.text || '';

  const sections = [
    { id: 'overview' as const, label: 'Tổng quan', icon: Trophy },
    { id: 'case' as const, label: 'Ca bệnh', icon: Info },
    { id: 'result' as const, label: 'Kết quả', icon: ClipboardList },
    { id: 'ai' as const, label: 'Phản hồi AI', icon: Sparkles },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-100 text-xs mb-1">
                <Calendar size={14} />
                <span>{new Date(session.date).toLocaleString('vi-VN')}</span>
                <span className="mx-1">•</span>
                <span>Điểm: {session.score}/100</span>
              </div>
              <h2 className="font-bold text-lg">{clinicalCase.title}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-[11px] font-bold">{clinicalCase.specialty}</span>
                <span className={cn("px-2 py-0.5 rounded-full text-[11px] font-bold",
                  clinicalCase.difficulty === 'easy' ? "bg-green-400/30" :
                  clinicalCase.difficulty === 'medium' ? "bg-orange-400/30" :
                  "bg-red-400/30"
                )}>
                  {clinicalCase.difficulty === 'easy' ? 'Dễ' : clinicalCase.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-2 pt-1">
          {sections.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-t-lg transition-all relative",
                activeSection === sec.id
                  ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 border border-b-0 border-slate-200 dark:border-slate-700 -mb-px"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              )}
            >
              <sec.icon size={16} />
              <span className="hidden sm:inline">{sec.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeSection === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Score Summary */}
              <div className="text-center py-4">
                <div className={cn("inline-flex items-center justify-center w-24 h-24 rounded-full mb-4",
                  session.score >= 80 ? "bg-green-100 dark:bg-green-900/30 text-green-600" :
                  session.score >= 50 ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600" :
                  "bg-red-100 dark:bg-red-900/30 text-red-600"
                )}>
                  <span className="text-3xl font-bold">{session.score}</span>
                </div>
                <p className="text-lg font-bold">
                  {session.score >= 80 ? 'Xuất sắc!' : session.score >= 50 ? 'Khá tốt!' : 'Cần cải thiện'}
                </p>
                <p className="text-sm text-slate-500">{session.correctAnswers}/{session.totalQuestions} câu trả lời đúng</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={cn("p-5 rounded-2xl border flex flex-col items-center gap-3",
                  isCorrectDiagnosis
                    ? "bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800"
                    : "bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800"
                )}>
                  {isCorrectDiagnosis ? <CheckCircle2 size={28} className="text-green-500" /> : <XCircle size={28} className="text-red-500" />}
                  <span className="text-xs font-bold uppercase text-slate-500">Chẩn đoán</span>
                  <span className={cn("text-sm font-bold text-center", isCorrectDiagnosis ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400")}>
                    {isCorrectDiagnosis ? 'Chính xác' : 'Chưa đúng'}
                  </span>
                </div>
                <div className={cn("p-5 rounded-2xl border flex flex-col items-center gap-3",
                  isCorrectTreatment
                    ? "bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800"
                    : "bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800"
                )}>
                  {isCorrectTreatment ? <CheckCircle2 size={28} className="text-green-500" /> : <XCircle size={28} className="text-red-500" />}
                  <span className="text-xs font-bold uppercase text-slate-500">Điều trị</span>
                  <span className={cn("text-sm font-bold text-center", isCorrectTreatment ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400")}>
                    {isCorrectTreatment ? 'Chính xác' : 'Chưa đúng'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'case' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Patient Info */}
              <div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-4">
                  <Info size={18} />
                  <h3>Thông tin bệnh nhân</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Tuổi</span>
                    <p className="text-lg font-bold">{clinicalCase.patientInfo.age}</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Giới tính</span>
                    <p className="text-lg font-bold">{clinicalCase.patientInfo.gender}</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                  <span className="text-[10px] text-orange-600 dark:text-orange-400 uppercase font-bold tracking-wider">Lý do vào viện</span>
                  <p className="mt-1 font-medium text-sm">{clinicalCase.patientInfo.chiefComplaint}</p>
                </div>
                <div className="mt-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Bệnh sử</span>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{clinicalCase.patientInfo.history}</p>
                </div>
              </div>

              {/* Physical Exam */}
              <div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-3">
                  <Stethoscope size={18} />
                  <h3>Khám lâm sàng</h3>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{clinicalCase.physicalExam}</p>
                </div>
              </div>

              {/* Lab Tests */}
              <div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-3">
                  <FlaskConical size={18} />
                  <h3>Cận lâm sàng</h3>
                </div>
                <div className="space-y-2">
                  {clinicalCase.labTests.map(test => (
                    <div key={test.id} className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                      <span className="font-bold text-sm">{test.name}</span>
                      <div className="text-right">
                        <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{test.result}</p>
                        <p className="text-[10px] text-slate-500">BT: {test.normalRange}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'result' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Diagnosis */}
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Chẩn đoán</h3>
                <div className="space-y-2">
                  {clinicalCase.diagnosisOptions.map(opt => {
                    const isSelected = opt.id === session.selectedDiagnosisId;
                    const isCorrect = opt.id === clinicalCase.correctDiagnosis;
                    let bgClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700";
                    let icon = null;

                    if (isCorrect && isSelected) {
                      bgClass = "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700";
                      icon = <CheckCircle2 size={20} className="text-green-500 shrink-0" />;
                    } else if (isSelected && !isCorrect) {
                      bgClass = "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700";
                      icon = <XCircle size={20} className="text-red-500 shrink-0" />;
                    } else if (isCorrect) {
                      bgClass = "bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800";
                      icon = <CheckCircle2 size={20} className="text-green-400 shrink-0" />;
                    }

                    return (
                      <div key={opt.id} className={cn("p-4 rounded-xl border flex items-center justify-between gap-3", bgClass)}>
                        <div className="flex items-center gap-3">
                          {icon}
                          <span className="font-medium text-sm">{opt.text}</span>
                        </div>
                        <div className="flex gap-1.5 shrink-0">
                          {isSelected && (
                            <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold",
                              isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            )}>Bạn chọn</span>
                          )}
                          {isCorrect && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-[10px] font-bold">Đáp án đúng</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Treatment */}
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Hướng điều trị</h3>
                <div className="space-y-2">
                  {clinicalCase.treatmentOptions.map(opt => {
                    const isSelected = opt.id === session.selectedTreatmentId;
                    const isCorrect = opt.id === clinicalCase.correctTreatment;
                    let bgClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700";
                    let icon = null;

                    if (isCorrect && isSelected) {
                      bgClass = "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700";
                      icon = <CheckCircle2 size={20} className="text-green-500 shrink-0" />;
                    } else if (isSelected && !isCorrect) {
                      bgClass = "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700";
                      icon = <XCircle size={20} className="text-red-500 shrink-0" />;
                    } else if (isCorrect) {
                      bgClass = "bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800";
                      icon = <CheckCircle2 size={20} className="text-green-400 shrink-0" />;
                    }

                    return (
                      <div key={opt.id} className={cn("p-4 rounded-xl border flex items-center justify-between gap-3", bgClass)}>
                        <div className="flex items-center gap-3">
                          {icon}
                          <span className="font-medium text-sm">{opt.text}</span>
                        </div>
                        <div className="flex gap-1.5 shrink-0">
                          {isSelected && (
                            <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold",
                              isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            )}>Bạn chọn</span>
                          )}
                          {isCorrect && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-[10px] font-bold">Đáp án đúng</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'ai' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {session.aiExplanation ? (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <Sparkles size={20} />
                    <h3>Phản hồi từ chuyên gia AI</h3>
                  </div>
                  <div
                    className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: marked.parse(session.aiExplanation) as string }}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle size={40} className="mx-auto text-slate-200 dark:text-slate-700 mb-4" />
                  <p className="text-slate-500 font-medium">Phiên thực hành này không có phản hồi AI.</p>
                  <p className="text-sm text-slate-400 mt-1">Hãy đảm bảo đã nhập API Key trong Cài đặt để nhận phản hồi cho các lần thực hành tiếp theo.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Đóng
          </button>
        </div>
      </motion.div>
    </div>
  );
};
