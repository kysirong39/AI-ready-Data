import React, { useState } from 'react';
import { ExternalLink, Maximize2, X, TrendingUp, AlertTriangle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-800">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,#1e3a6e_0%,transparent_70%)] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Subtext */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase font-display mb-3">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Gartner Data Fabric Architecture · 2025–2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15] mb-4">
              Top giải pháp <br />
              <span className="text-blue-400">AI-Ready Data Fabric</span> <br />
              trên thị trường
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              Phân tích chuyên sâu các nền tảng dữ liệu hàng đầu đáp ứng kiến trúc Data Fabric theo tiêu chí{' '}
              <strong className="text-white">Active Metadata, Agentic Readiness</strong> và{' '}
              <strong className="text-white">Governance</strong>. Khảo sát kịch bản tối ưu cho hạ tầng ngân hàng Việt Nam (bảo tồn khoản đầu tư Ab Initio Metadata Hub &amp; Analytic Workbench).
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-display">
                  $3.24<span className="text-blue-400 text-sm font-normal"> tỷ</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Quy mô thị trường 2025</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-display">
                  $13.35<span className="text-blue-400 text-sm font-normal"> tỷ</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Dự kiến năm 2035</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-display flex items-center gap-1">
                  15.2% <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">CAGR 2026–2035</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-display flex items-center gap-1">
                  &gt;80% <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Dự án AI hụt ROI do data</div>
              </div>
            </div>
          </div>

          {/* Right Column: Gartner Magic Quadrant 2026 Graphic */}
          <div className="lg:col-span-5">
            <figure className="relative group bg-neutral-900/90 rounded-xl p-3 border border-neutral-800 shadow-2xl">
              <div className="relative overflow-hidden rounded-lg bg-white">
                <img
                  src="https://pages.dataiku.com/hs-fs/hubfs/Gartner%20June%202026.png?width=3275&height=3626&name=Gartner%20June%202026.png"
                  alt="Gartner Magic Quadrant for AI Platforms for Data Science and Machine Learning — June 2026"
                  className="w-full h-auto object-cover max-h-[340px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                  onClick={() => setShowImageModal(true)}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setShowImageModal(true)}
                  className="absolute bottom-2 right-2 bg-neutral-900/80 hover:bg-neutral-900 text-white text-xs px-2.5 py-1 rounded flex items-center gap-1.5 backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Phóng to</span>
                </button>
              </div>

              <figcaption className="mt-2.5 text-xs text-neutral-400 flex items-center justify-between">
                <span>Gartner® Magic Quadrant™ AI Platforms — 22/06/2026</span>
                <a
                  href="https://pages.dataiku.com/2026-gartner-mq-ai-platforms-dsml"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Nguồn Dataiku <ExternalLink className="w-3 h-3" />
                </a>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>

      {/* Image Modal Preview */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-neutral-800 text-white">
              <span className="text-sm font-semibold">
                Gartner Magic Quadrant for AI Platforms for DS&amp;ML (June 2026)
              </span>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-white rounded-b-lg flex justify-center max-h-[80vh] overflow-y-auto">
              <img
                src="https://pages.dataiku.com/hs-fs/hubfs/Gartner%20June%202026.png?width=3275&height=3626&name=Gartner%20June%202026.png"
                alt="Gartner Magic Quadrant June 2026 Full View"
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
