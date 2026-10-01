import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OverviewTab } from './components/OverviewTab';
import { VendorsTab } from './components/VendorsTab';
import { MatrixTab } from './components/MatrixTab';
import { LockinTab } from './components/LockinTab';
import { DecisionTab } from './components/DecisionTab';
import { VietnamBankingInsights } from './components/VietnamBankingInsights';
import { ReferencesModal } from './components/ReferencesModal';
import { GitHubDeployModal } from './components/GitHubDeployModal';
import { BookOpen, ExternalLink, GitBranch, ArrowUp } from 'lucide-react';
import { REFERENCES_DATA } from './data/referencesData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [showReferencesModal, setShowReferencesModal] = useState<boolean>(false);
  const [showGitHubModal, setShowGitHubModal] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans">
      {/* Top Bar Contract (Wordmark, Nav links, Actions) */}
      <Header
        activeTab={activeTab}
        onTabChange={(tabId) => {
          setActiveTab(tabId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGitHubModal={() => setShowGitHubModal(true)}
        onPrint={handlePrint}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'vendors' && <VendorsTab />}
        {activeTab === 'matrix' && <MatrixTab />}
        {activeTab === 'lockin' && <LockinTab />}
        {activeTab === 'decision' && <DecisionTab />}
        {activeTab === 'vietnam-insights' && <VietnamBankingInsights />}

        {/* Inline References Section at bottom of page */}
        <section className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Tài liệu tham khảo &amp; Nguồn trích dẫn (2025–2026)
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Các số liệu, bảng xếp hạng và ma trận được tổng hợp trực tiếp từ báo cáo Gartner, thông cáo báo chí các hãng và nghiên cứu thị trường.
              </p>
            </div>

            <button
              onClick={() => setShowReferencesModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer transition-colors self-start sm:self-auto"
            >
              <span>Xem đầy đủ 21 tài liệu gốc</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {REFERENCES_DATA.slice(0, 6).map((ref, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col justify-between text-xs"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase text-neutral-400 font-mono">
                    {ref.type}
                  </div>
                  <div className="font-semibold text-neutral-900 mt-0.5 line-clamp-1">
                    {ref.name}
                  </div>
                  <p className="text-neutral-500 text-[11px] line-clamp-2 mt-1">
                    {ref.highlight}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-100 flex justify-end">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>Xem nguồn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-semibold text-neutral-700">AI-Ready Data Fabric Navigator 2025–2026</span>
            <span className="mx-2 hidden sm:inline">·</span>
            <span>R&amp;D AIIC — Nghiên cứu &amp; Đổi mới Sáng tạo Ngân hàng</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowGitHubModal(true)}
              className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1 cursor-pointer"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Triển khai GitHub</span>
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Đầu trang</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ReferencesModal
        isOpen={showReferencesModal}
        onClose={() => setShowReferencesModal(false)}
      />

      <GitHubDeployModal
        isOpen={showGitHubModal}
        onClose={() => setShowGitHubModal(false)}
        userEmail="kysirong39@gmail.com"
      />
    </div>
  );
}
