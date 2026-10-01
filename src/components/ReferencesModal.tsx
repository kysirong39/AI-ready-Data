import React, { useState, useMemo } from 'react';
import { REFERENCES_DATA } from '../data/referencesData';
import { Search, ExternalLink, BookOpen, X } from 'lucide-react';

interface ReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReferences = useMemo(() => {
    return REFERENCES_DATA.filter(
      (ref) =>
        ref.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.highlight.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-300">
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display">
                Kho Tài liệu &amp; Nguồn Trích dẫn Nghiên cứu
              </h3>
              <p className="text-xs text-neutral-500">
                21 tài liệu chính thức từ Gartner Magic Quadrant 2025/2026, thông cáo hội nghị và tài liệu hãng
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-neutral-200 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm theo tên báo cáo, tổ chức (Gartner, Databricks, Snowflake, IBM, Denodo...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* References List */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-3">
          {filteredReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                  <span>{ref.type}</span>
                  {ref.date && (
                    <>
                      <span>·</span>
                      <span className="text-neutral-500">{ref.date}</span>
                    </>
                  )}
                </div>
                <div className="font-bold text-neutral-900 text-sm">{ref.name}</div>
                <div className="text-neutral-600">{ref.highlight}</div>
              </div>

              <a
                href={ref.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold shrink-0 cursor-pointer text-xs"
              >
                <span>Xem tài liệu gốc</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}

          {filteredReferences.length === 0 && (
            <div className="text-center py-10 text-neutral-500 text-xs">
              Không tìm thấy tài liệu phù hợp với từ khóa "{searchTerm}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500">
          <span>Tổng hợp bởi R&amp;D AIIC · Cập nhật mới nhất 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
