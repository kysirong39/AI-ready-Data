import React, { useState, useMemo } from 'react';
import { CRITERIA, CRITERIA_CATEGORIES } from '../data/criteriaData';
import { VENDORS } from '../data/vendorsData';
import { Criterion, CapabilityRating, Vendor } from '../types';
import { Search, Filter, HelpCircle, X, Check, Minus, AlertCircle, Info, Image as ImageIcon } from 'lucide-react';

export const MatrixTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [selectedVendorFilter, setSelectedVendorFilter] = useState<string>('all');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<string>('all');
  const [activeCriterionModal, setActiveCriterionModal] = useState<Criterion | null>(null);
  const [showGartnerMatrixImage, setShowGartnerMatrixImage] = useState(false);

  // Compute vendor scores (Full = 2, Partial = 1, Limited = 0)
  const vendorScores = useMemo(() => {
    return VENDORS.map((v) => {
      let score = 0;
      let fullCount = 0;
      let partialCount = 0;
      let limitedCount = 0;

      CRITERIA.forEach((c) => {
        const rating = v.ratings[c.id];
        if (rating === 'f') {
          score += 2;
          fullCount += 1;
        } else if (rating === 'p') {
          score += 1;
          partialCount += 1;
        } else {
          limitedCount += 1;
        }
      });

      return {
        vendor: v,
        score,
        maxScore: CRITERIA.length * 2,
        percentage: Math.round((score / (CRITERIA.length * 2)) * 100),
        fullCount,
        partialCount,
        limitedCount
      };
    }).sort((a, b) => b.score - a.score);
  }, []);

  const filteredCriteria = useMemo(() => {
    return CRITERIA.filter((c) => {
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const matchesSearch =
        c.name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        c.descriptionVi.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        c.code.toLowerCase().includes(searchCriteria.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchCriteria]);

  const displayedVendors = useMemo(() => {
    if (selectedVendorFilter === 'all') return VENDORS;
    return VENDORS.filter((v) => v.id === selectedVendorFilter);
  }, [selectedVendorFilter]);

  const renderRatingCell = (rating: CapabilityRating, vendorName: string, criterionName: string) => {
    if (rating === 'f') {
      return (
        <div
          title={`${vendorName} - ${criterionName}: Năng lực đầy đủ (Full)`}
          className="flex items-center justify-center"
        >
          <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-[10px] font-bold">
            ✓
          </span>
        </div>
      );
    }
    if (rating === 'p') {
      return (
        <div
          title={`${vendorName} - ${criterionName}: Một phần (Partial)`}
          className="flex items-center justify-center"
        >
          <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center text-[10px] font-bold">
            ~
          </span>
        </div>
      );
    }
    return (
      <div
        title={`${vendorName} - ${criterionName}: Hạn chế / Chưa hỗ trợ (Limited)`}
        className="flex items-center justify-center"
      >
        <span className="w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-400 flex items-center justify-center text-[10px]">
          -
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
            Capability Assessment · 26 Criteria
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
            Ma trận đánh giá AI Data Readiness (Gartner)
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Đánh giá 8 nền tảng theo 26 tiêu chuẩn sẵn sàng dữ liệu cho AI của Gartner qua 4 trụ cột chiến lược.
          </p>
        </div>

        <button
          onClick={() => setShowGartnerMatrixImage(!showGartnerMatrixImage)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors self-start md:self-auto"
        >
          <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
          <span>{showGartnerMatrixImage ? 'Ẩn sơ đồ gốc' : 'Xem sơ đồ gốc Gartner'}</span>
        </button>
      </div>

      {/* Official Gartner Figure Preview Accordion */}
      {showGartnerMatrixImage && (
        <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-neutral-700">
              Gartner Figure 4: AI Data Readiness Checklist and Priority Matrix
            </span>
            <button
              onClick={() => setShowGartnerMatrixImage(false)}
              className="text-neutral-400 hover:text-neutral-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-neutral-50 p-2 rounded-lg flex justify-center">
            <img
              src="https://www.gartner.com/resources/805800/805875/Figure_4_AI_Data_Readiness_Checklist_and_Priority_Matrix.png"
              alt="Gartner AI Data Readiness Checklist and Priority Matrix"
              className="max-h-[380px] w-auto object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

      {/* Scoreboard Summary Cards */}
      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs">
        <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-3">
          Bảng tổng điểm sẵn sàng AI (AI-Readiness Index · Thang 52 điểm)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {vendorScores.map((item) => (
            <div
              key={item.vendor.id}
              className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200/80 text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-neutral-900 truncate" title={item.vendor.name}>
                  {item.vendor.name}
                </div>
                <div className="text-lg font-bold font-mono text-blue-600 mt-1">
                  {item.score}
                  <span className="text-[10px] text-neutral-400 font-normal">/52</span>
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-neutral-200 text-[10px] text-neutral-500 flex justify-center gap-1 font-mono">
                <span className="text-emerald-700" title="Đầy đủ">{item.fullCount}✓</span>
                <span>·</span>
                <span className="text-amber-700" title="Một phần">{item.partialCount}~</span>
                <span>·</span>
                <span className="text-neutral-400" title="Hạn chế">{item.limitedCount}-</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Search Box */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm tiêu chí (vd: Lineage, Versioning, KG, RAG...)"
              value={searchCriteria}
              onChange={(e) => setSearchCriteria(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Category Filter */}
          <div className="sm:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-1.5 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
            >
              <option value="all">Tất cả 4 nhóm tiêu chí (26)</option>
              {CRITERIA_CATEGORIES.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.nameVi}
                </option>
              ))}
            </select>
          </div>

          {/* Vendor Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedVendorFilter}
              onChange={(e) => setSelectedVendorFilter(e.target.value)}
              className="w-full py-1.5 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
            >
              <option value="all">Tất cả 8 Vendors</option>
              {VENDORS.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between text-xs text-neutral-600 pt-2 border-t border-neutral-100 gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-neutral-700">Quy ước:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-[9px] font-bold">
                ✓
              </span>
              <span>Năng lực đầy đủ (2 điểm)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center text-[9px] font-bold">
                ~
              </span>
              <span>Một phần / Đang phát triển (1 điểm)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-400 flex items-center justify-center text-[9px]">
                -
              </span>
              <span>Hạn chế / Chưa có (0 điểm)</span>
            </span>
          </div>

          <div className="text-[11px] text-neutral-500">
            Hiển thị <strong>{filteredCriteria.length}</strong> / 26 tiêu chí
          </div>
        </div>
      </div>

      {/* Interactive Matrix Table */}
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 border-b border-neutral-200">
                <th className="p-3 font-bold w-12 text-center">#</th>
                <th className="p-3 font-bold w-48">Tiêu chí Gartner</th>
                <th className="p-3 font-bold w-44">Nhóm trụ cột</th>
                {displayedVendors.map((v) => (
                  <th key={v.id} className="p-3 font-bold text-center border-l border-neutral-200">
                    <div className="truncate max-w-[100px] mx-auto" title={v.name}>
                      {v.name}
                    </div>
                  </th>
                ))}
                <th className="p-3 font-bold w-14 text-center border-l border-neutral-200">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filteredCriteria.map((c, index) => (
                <tr key={c.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="p-3 text-center text-neutral-400 font-mono text-[11px]">
                    {c.code}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => setActiveCriterionModal(c)}
                      className="font-semibold text-neutral-900 hover:text-blue-600 transition-colors text-left flex items-center gap-1 cursor-pointer"
                    >
                      <span>{c.name}</span>
                    </button>
                    <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                      {c.descriptionVi}
                    </p>
                  </td>
                  <td className="p-3 text-neutral-600 text-[11px]">
                    <span className="font-medium">{c.categoryVi}</span>
                  </td>
                  {displayedVendors.map((v) => (
                    <td key={v.id} className="p-2 border-l border-neutral-100">
                      {renderRatingCell(v.ratings[c.id], v.name, c.name)}
                    </td>
                  ))}
                  <td className="p-3 text-center border-l border-neutral-100">
                    <button
                      onClick={() => setActiveCriterionModal(c)}
                      className="text-neutral-400 hover:text-blue-600 p-1 cursor-pointer"
                      title="Xem ý nghĩa tiêu chí"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Criterion Detail Modal */}
      {activeCriterionModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl border border-neutral-200 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                  {activeCriterionModal.code} · {activeCriterionModal.categoryVi}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 font-display mt-0.5">
                  {activeCriterionModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveCriterionModal(null)}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-neutral-700">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="font-bold text-neutral-900 block mb-1">Mô tả tiêu chuẩn:</span>
                {activeCriterionModal.descriptionVi}
              </div>

              <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-600" /> Ý nghĩa chiến lược trong Ngân hàng &amp; AI:
                </span>
                {activeCriterionModal.significance}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveCriterionModal(null)}
                className="px-4 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
