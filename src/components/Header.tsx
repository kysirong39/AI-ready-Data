import React from 'react';
import { GitBranch, Download, Printer } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenGitHubModal: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenGitHubModal,
  onPrint
}) => {
  const navItems = [
    { id: 'overview', label: 'Tổng quan & Xu hướng' },
    { id: 'vendors', label: 'Chi tiết giải pháp' },
    { id: 'matrix', label: 'Ma trận Gartner' },
    { id: 'lockin', label: 'Đánh giá Lock-in' },
    { id: 'decision', label: 'Tư vấn lựa chọn' },
    { id: 'vietnam-insights', label: 'Bài học Ngân hàng VN' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single element wordmark */}
        <a 
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            onTabChange('overview');
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 font-display flex items-center gap-2 whitespace-nowrap"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
          AI-Ready Data Fabric
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`pb-1 transition-colors whitespace-nowrap cursor-pointer text-sm font-medium ${
                activeTab === item.id
                  ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                  : 'hover:text-neutral-900 border-b-2 border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onPrint}
            title="In hoặc Lưu PDF báo cáo"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Lưu PDF</span>
          </button>

          <button
            onClick={onOpenGitHubModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Đẩy lên GitHub</span>
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Sub-bar */}
      <div className="lg:hidden overflow-x-auto flex gap-4 px-4 py-2 border-t border-neutral-100 bg-neutral-50 text-xs custom-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition-colors ${
              activeTab === item.id
                ? 'bg-blue-600 text-white font-medium'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
