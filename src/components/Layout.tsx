import React from 'react';
import { Heart, Stethoscope, Thermometer, Baby, Settings, Home, BookOpen, BarChart2, MessageSquare, Menu, X, Key, ShieldCheck, Moon, Sun, Download, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSettings: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onOpenSettings, theme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'cases', label: 'Ca lâm sàng', icon: Stethoscope },
    { id: 'progress', label: 'Tiến độ', icon: BarChart2 },
    { id: 'tutor', label: 'AI Tutor', icon: MessageSquare },
  ];

  return (
    <div className={cn("min-h-screen transition-colors duration-300", theme === 'dark' ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900")}>
      {/* Header */}
      <header className={cn("sticky top-0 z-40 w-full border-b backdrop-blur transition-colors duration-300", 
        theme === 'dark' ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-slate-200")}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 lg:hidden hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500 hidden sm:block">MedSim</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Đổi giao diện"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={onOpenSettings}
              className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border border-blue-100 dark:border-blue-800"
            >
              <Key size={18} />
              <span className="text-sm font-medium hidden sm:inline">Cài đặt API</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar Desktop */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none" 
                  : "hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm"
              )}
            >
              <item.icon size={20} className={cn(activeTab === item.id ? "text-white" : "text-slate-400 group-hover:text-blue-500")} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              />
              <motion.aside 
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                className={cn("fixed left-0 top-0 bottom-0 w-72 z-50 p-6 flex flex-col gap-4 lg:hidden", 
                  theme === 'dark' ? "bg-slate-900" : "bg-white")}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="font-bold text-lg">MedSim</span>
                  </div>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <X size={20} />
                  </button>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                      activeTab === item.id 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Bottom Nav Mobile */}
      <nav className={cn("fixed bottom-0 left-0 right-0 lg:hidden z-40 border-t backdrop-blur px-4 py-2 flex justify-around items-center",
        theme === 'dark' ? "bg-slate-900/90 border-slate-800" : "bg-white/90 border-slate-200")}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
              activeTab === item.id ? "text-blue-600" : "text-slate-400"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
