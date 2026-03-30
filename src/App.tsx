import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { CaseView } from './components/CaseView';
import { AppData, ClinicalCase, Settings } from './types';
import { loadAppData, saveAppData, updateSettings, addSession, exportData, importData } from './services/storage';
import { callGeminiAI, getMedicalExplanationPrompt } from './services/gemini';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stethoscope, Thermometer, Baby, Key, ShieldCheck, ChevronRight, BarChart2, MessageSquare, AlertCircle, CheckCircle2, Trophy, Flame, Target, BookOpen, Search, Filter, Settings as SettingsIcon, Download, Upload, Trash2, X, Sun, Moon } from 'lucide-react';
import Swal from 'sweetalert2';
import { cn } from './components/Layout';

export default function App() {
  const [data, setData] = useState<AppData>(loadAppData());
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isGeneratingExplanation, setIsGeneratingExplanation] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  useEffect(() => {
    saveAppData(data);
  }, [data]);

  const handleOpenSettings = () => setIsSettingsOpen(true);

  const handleSaveSettings = (newSettings: Partial<Settings>) => {
    const updatedData = { ...data, settings: { ...data.settings, ...newSettings } };
    setData(updatedData);
    setIsSettingsOpen(false);
    Swal.fire({
      icon: 'success',
      title: 'Đã lưu cài đặt',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
  };

  const handleCaseComplete = async (diagnosisId: string, treatmentId: string, explanation: string) => {
    if (!selectedCase) return;

    const diagnosis = selectedCase.diagnosisOptions.find(o => o.id === diagnosisId)?.text || '';
    const treatment = selectedCase.treatmentOptions.find(o => o.id === treatmentId)?.text || '';
    const correctDiagnosis = selectedCase.diagnosisOptions.find(o => o.id === selectedCase.correctDiagnosis)?.text || '';
    const correctTreatment = selectedCase.treatmentOptions.find(o => o.id === selectedCase.correctTreatment)?.text || '';

    const score = (diagnosisId === selectedCase.correctDiagnosis ? 50 : 0) + (treatmentId === selectedCase.correctTreatment ? 50 : 0);
    
    addSession({
      id: Math.random().toString(36).substr(2, 9),
      subjectId: selectedCase.specialty,
      score,
      totalQuestions: 2,
      correctAnswers: (diagnosisId === selectedCase.correctDiagnosis ? 1 : 0) + (treatmentId === selectedCase.correctTreatment ? 1 : 0),
      timeSpent: 0, // Simplified
      date: new Date().toISOString()
    });

    setData(loadAppData()); // Refresh data from storage

    if (data.settings.geminiApiKey) {
      setIsGeneratingExplanation(true);
      try {
        const prompt = getMedicalExplanationPrompt(
          selectedCase.title,
          diagnosis,
          correctDiagnosis,
          treatment,
          correctTreatment,
          explanation
        );
        const result = await callGeminiAI(prompt, data.settings.geminiApiKey);
        setAiExplanation(result);
      } catch (error: any) {
        Swal.fire('Lỗi AI', error.message || 'Không thể kết nối với Gemini AI', 'error');
      } finally {
        setIsGeneratingExplanation(false);
      }
    } else {
      setAiExplanation(`### Giải thích lâm sàng\n\n${explanation}\n\n*Lưu ý: Nhập Gemini API Key trong phần Cài đặt để nhận phản hồi chuyên sâu từ AI.*`);
    }
  };

  const filteredCases = data.cases.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'all' || c.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  const specialties = Array.from(new Set(data.cases.map(c => c.specialty)));

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      onOpenSettings={handleOpenSettings}
      theme={data.settings.theme}
      toggleTheme={() => handleSaveSettings({ theme: data.settings.theme === 'light' ? 'dark' : 'light' })}
    >
      <AnimatePresence mode="wait">
        {activeTab === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Chào mừng đến với MedSim</h2>
                <p className="text-blue-50 opacity-90 text-lg mb-6 leading-relaxed">
                  Nâng cao kỹ năng chẩn đoán lâm sàng thông qua các ca bệnh thực tế và phản hồi chuyên sâu từ AI.
                </p>
                <button 
                  onClick={() => setActiveTab('cases')}
                  className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 group"
                >
                  Bắt đầu thực hành ngay
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                <ShieldCheck size={400} />
              </div>
            </section>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Tổng lượt thực hành', value: data.progress.totalAttempts, icon: Target, color: 'bg-blue-500' },
                { label: 'Điểm trung bình', value: `${Math.round(data.progress.averageScore)}%`, icon: Trophy, color: 'bg-orange-500' },
                { label: 'Chuỗi ngày học', value: data.progress.streakDays, icon: Flame, color: 'bg-red-500' },
                { label: 'Ca bệnh sẵn có', value: data.cases.length, icon: BookOpen, color: 'bg-green-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn("p-3 rounded-xl text-white", stat.color)}>
                      <stat.icon size={24} />
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* Recent Activity / Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Stethoscope size={24} className="text-blue-600" />
                    Ca bệnh đề xuất
                  </h3>
                  <button onClick={() => setActiveTab('cases')} className="text-sm font-bold text-blue-600 hover:underline">Xem tất cả</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.cases.slice(0, 2).map((c) => (
                    <div 
                      key={c.id} 
                      onClick={() => {
                        setSelectedCase(c);
                        setAiExplanation(null);
                      }}
                      className="group cursor-pointer bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">{c.specialty}</span>
                        <div className={cn("w-2 h-2 rounded-full", 
                          c.difficulty === 'easy' ? "bg-green-500" : c.difficulty === 'medium' ? "bg-orange-500" : "bg-red-500"
                        )} />
                      </div>
                      <h4 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{c.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">{c.patientInfo.chiefComplaint}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
                        <span className="text-xs text-slate-400">Độ khó: {c.difficulty === 'easy' ? 'Dễ' : c.difficulty === 'medium' ? 'Trung bình' : 'Khó'}</span>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BarChart2 size={24} className="text-orange-500" />
                  Tiến độ gần đây
                </h3>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-4">
                  {data.sessions.length > 0 ? (
                    data.sessions.slice(-3).reverse().map((s, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold", 
                          s.score >= 80 ? "bg-green-500" : s.score >= 50 ? "bg-orange-500" : "bg-red-500"
                        )}>
                          {s.score}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm truncate">{s.subjectId}</p>
                          <p className="text-xs text-slate-400">{new Date(s.date).toLocaleDateString('vi-VN')}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <AlertCircle size={40} className="mx-auto text-slate-200 mb-2" />
                      <p className="text-sm text-slate-400">Chưa có hoạt động nào</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'cases' && (
          <motion.div 
            key="cases"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Thư viện ca lâm sàng</h2>
                <p className="text-slate-500">Lựa chọn ca bệnh để bắt đầu thực hành chẩn đoán.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm ca bệnh..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all w-full sm:w-64"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select 
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                    className="pl-10 pr-8 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                  >
                    <option value="all">Tất cả chuyên khoa</option>
                    {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCases.map((c) => (
                <motion.div 
                  layout
                  key={c.id} 
                  onClick={() => {
                    setSelectedCase(c);
                    setAiExplanation(null);
                  }}
                  className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-orange-500" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">{c.specialty}</span>
                      <div className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider", 
                        c.difficulty === 'easy' ? "bg-green-100 text-green-600" : c.difficulty === 'medium' ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"
                      )}>
                        {c.difficulty === 'easy' ? 'Dễ' : c.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{c.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Target size={16} />
                        <span>Lý do: {c.patientInfo.chiefComplaint}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <BookOpen size={16} />
                        <span>Bệnh nhân: {c.patientInfo.age} tuổi, {c.patientInfo.gender}</span>
                      </div>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-700">
                      <span className="text-xs font-bold text-blue-600 group-hover:underline">Bắt đầu mô phỏng</span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredCases.length === 0 && (
                <div className="col-span-full py-20 text-center space-y-4">
                  <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400">
                    <Search size={40} />
                  </div>
                  <p className="text-slate-500 font-medium">Không tìm thấy ca bệnh nào phù hợp.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'progress' && (
          <motion.div 
            key="progress"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tiến độ học tập</h2>
              <div className="flex items-center gap-2">
                <button onClick={exportData} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                  <Download size={18} />
                  Xuất dữ liệu
                </button>
                <label className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors cursor-pointer">
                  <Upload size={18} />
                  Nhập dữ liệu
                  <input type="file" className="hidden" accept=".json" onChange={async (e) => {
                    if (e.target.files?.[0]) {
                      const ok = await importData(e.target.files[0]);
                      if (ok) {
                        setData(loadAppData());
                        Swal.fire('Thành công', 'Đã nhập dữ liệu thành công', 'success');
                      } else {
                        Swal.fire('Lỗi', 'Không thể nhập dữ liệu', 'error');
                      }
                    }
                  }} />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold mb-6 flex items-center gap-2">
                    <BarChart2 size={20} className="text-blue-600" />
                    Lịch sử thực hành
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-xs text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700">
                          <th className="pb-4 font-bold">Ngày</th>
                          <th className="pb-4 font-bold">Chuyên khoa</th>
                          <th className="pb-4 font-bold">Kết quả</th>
                          <th className="pb-4 font-bold">Điểm</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                        {data.sessions.length > 0 ? (
                          data.sessions.slice().reverse().map((s) => (
                            <tr key={s.id} className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                              <td className="py-4 text-sm">{new Date(s.date).toLocaleDateString('vi-VN')}</td>
                              <td className="py-4 text-sm font-bold">{s.subjectId}</td>
                              <td className="py-4 text-sm">
                                <span className={cn("px-2 py-1 rounded-lg text-[10px] font-bold uppercase", 
                                  s.score >= 80 ? "bg-green-100 text-green-600" : s.score >= 50 ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"
                                )}>
                                  {s.correctAnswers}/{s.totalQuestions} Đúng
                                </span>
                              </td>
                              <td className="py-4 text-sm font-bold">{s.score}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="py-10 text-center text-slate-400">Chưa có dữ liệu thực hành.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold mb-6 flex items-center gap-2">
                    <AlertCircle size={20} className="text-orange-500" />
                    Chuyên khoa cần cải thiện
                  </h3>
                  <div className="space-y-4">
                    {data.progress.weakTopics.length > 0 ? (
                      data.progress.weakTopics.map((topic, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800">
                          <span className="font-bold text-sm text-orange-700 dark:text-orange-400">{topic}</span>
                          <ChevronRight size={16} className="text-orange-300" />
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle2 size={40} className="mx-auto text-green-200 mb-2" />
                        <p className="text-sm text-slate-400">Bạn đang làm rất tốt ở mọi chuyên khoa!</p>
                      </div>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    Swal.fire({
                      title: 'Xóa toàn bộ dữ liệu?',
                      text: "Hành động này không thể hoàn tác!",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#ef4444',
                      cancelButtonColor: '#64748b',
                      confirmButtonText: 'Xóa ngay',
                      cancelButtonText: 'Hủy'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        localStorage.removeItem('medsim_app_data');
                        window.location.reload();
                      }
                    })
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30 transition-colors font-bold"
                >
                  <Trash2 size={18} />
                  Xóa lịch sử thực hành
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'tutor' && (
          <motion.div 
            key="tutor"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-[calc(100vh-12rem)] flex flex-col"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex-1 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-blue-50 dark:bg-blue-900/20 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold">AI Tutor</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Trợ lý y khoa thông minh</p>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-xl font-bold">Hỏi đáp với AI Tutor</h3>
                <p className="text-slate-500 max-w-md">Tính năng này cho phép bạn đặt câu hỏi về bất kỳ ca bệnh hoặc kiến thức y khoa nào. AI sẽ giải đáp dựa trên các phác đồ chuẩn.</p>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800 text-orange-700 dark:text-orange-400 text-sm max-w-md">
                  <p className="font-bold mb-1">💡 Mẹo:</p>
                  <p>Bạn có thể hỏi: "Phác đồ điều trị STEMI mới nhất là gì?" hoặc "Phân biệt viêm ruột thừa và viêm túi thừa Meckel?"</p>
                </div>
                <button 
                  onClick={() => Swal.fire('Tính năng đang phát triển', 'Chúng tôi đang hoàn thiện giao diện chat chuyên sâu. Hãy thử tính năng phản hồi AI sau mỗi ca bệnh!', 'info')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                >
                  Bắt đầu thảo luận
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Simulation Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl z-10"
            >
              <CaseView 
                clinicalCase={selectedCase} 
                onClose={() => setSelectedCase(null)}
                onComplete={handleCaseComplete}
                isGeneratingExplanation={isGeneratingExplanation}
                aiExplanation={aiExplanation}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSettingsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <SettingsIcon size={24} className="text-blue-600" />
                  Cài đặt hệ thống
                </h3>
                <button onClick={() => setIsSettingsOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Gemini API Key</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="password" 
                      placeholder="Nhập API Key của bạn..." 
                      defaultValue={data.settings.geminiApiKey}
                      onBlur={(e) => handleSaveSettings({ geminiApiKey: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">API Key được lưu an toàn trong LocalStorage của trình duyệt.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Mô hình AI</label>
                  <select 
                    value={data.settings.selectedModel}
                    onChange={(e) => handleSaveSettings({ selectedModel: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                  >
                    <option value="gemini-3-flash-preview">Gemini 3 Flash (Nhanh)</option>
                    <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro (Thông minh)</option>
                    <option value="gemini-2.5-flash-preview">Gemini 2.5 Flash</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-3">
                  <button 
                    onClick={() => handleSaveSettings({ theme: data.settings.theme === 'light' ? 'dark' : 'light' })}
                    className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {data.settings.theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                      <span className="font-medium">Chế độ tối</span>
                    </div>
                    <div className={cn("w-10 h-5 rounded-full relative transition-colors", data.settings.theme === 'dark' ? "bg-blue-600" : "bg-slate-200")}>
                      <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", data.settings.theme === 'dark' ? "right-1" : "left-1")} />
                    </div>
                  </button>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700">
                <button 
                  onClick={() => setIsSettingsOpen(false)}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  Hoàn tất
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
