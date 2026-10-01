import React, { useState, useMemo } from 'react';
import { VENDORS } from '../data/vendorsData';
import { Vendor } from '../types';
import { Search, ExternalLink, SlidersHorizontal, CheckSquare, Square, X, ShieldAlert, Award, Database } from 'lucide-react';

export const VendorsTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [archFilter, setArchFilter] = useState<string>('all');
  const [lockinFilter, setLockinFilter] = useState<string>('all');
  const [selectedVendorsForCompare, setSelectedVendorsForCompare] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const filteredVendors = useMemo(() => {
    return VENDORS.filter((v) => {
      const matchesSearch =
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesArch = archFilter === 'all' || v.architectureType === archFilter;

      const matchesLockin =
        lockinFilter === 'all' ||
        (lockinFilter === 'low' && (v.lockinScore === 'low' || v.lockinScore === 'low-mid')) ||
        (lockinFilter === 'mid' && (v.lockinScore === 'mid' || v.lockinScore === 'mid-high')) ||
        (lockinFilter === 'high' && v.lockinScore === 'high');

      return matchesSearch && matchesArch && matchesLockin;
    });
  }, [searchTerm, archFilter, lockinFilter]);

  const toggleCompare = (vendorId: string) => {
    if (selectedVendorsForCompare.includes(vendorId)) {
      setSelectedVendorsForCompare(selectedVendorsForCompare.filter((id) => id !== vendorId));
    } else {
      if (selectedVendorsForCompare.length >= 3) {
        alert('Bạn chỉ có thể so sánh tối đa 3 giải pháp cùng lúc.');
        return;
      }
      setSelectedVendorsForCompare([...selectedVendorsForCompare, vendorId]);
    }
  };

  const compareVendorsList = useMemo(() => {
    return VENDORS.filter((v) => selectedVendorsForCompare.includes(v.id));
  }, [selectedVendorsForCompare]);

  return (
    <div className="space-y-8">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
            Vendor Profiles · Gartner Leaders 2025–2026
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
            Chi tiết các giải pháp AI-Ready Data Fabric
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Khảo sát 8 nền tảng hàng đầu thị trường được xếp hạng Leader trong các Magic Quadrant của Gartner.
          </p>
        </div>

        {/* Compare Floating Trigger */}
        {selectedVendorsForCompare.length > 0 && (
          <button
            onClick={() => setShowCompareModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm cursor-pointer whitespace-nowrap transition-colors self-start md:self-auto"
          >
            <span>So sánh {selectedVendorsForCompare.length} giải pháp đã chọn</span>
          </button>
        )}
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Search Box */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm giải pháp, từ khóa, tính năng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Architecture Filter */}
          <div className="sm:col-span-4">
            <select
              value={archFilter}
              onChange={(e) => setArchFilter(e.target.value)}
              className="w-full py-1.5 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
            >
              <option value="all">Tất cả kiến trúc</option>
              <option value="Virtualization-first">Virtualization-first (Ảo hóa no-copy)</option>
              <option value="Integration-led">Integration-led (Tích hợp &amp; Governance)</option>
              <option value="Unified lakehouse">Unified lakehouse (Hồ dữ liệu hợp nhất)</option>
              <option value="Universal AI Orchestration">Universal AI Orchestration (Điều phối AI)</option>
            </select>
          </div>

          {/* Lock-in Filter */}
          <div className="sm:col-span-3">
            <select
              value={lockinFilter}
              onChange={(e) => setLockinFilter(e.target.value)}
              className="w-full py-1.5 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
            >
              <option value="all">Tất cả mức Lock-in</option>
              <option value="low">Lock-in Thấp (An toàn)</option>
              <option value="mid">Lock-in Trung bình</option>
              <option value="high">Lock-in Cao (Thận trọng)</option>
            </select>
          </div>
        </div>

        {/* Selected Compare Checkbox Helper */}
        <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-neutral-100">
          <div>
            Hiển thị <strong>{filteredVendors.length}</strong> / {VENDORS.length} giải pháp
          </div>
          {selectedVendorsForCompare.length > 0 && (
            <button
              onClick={() => setSelectedVendorsForCompare([])}
              className="text-neutral-500 hover:text-neutral-800 underline cursor-pointer"
            >
              Xóa chọn so sánh ({selectedVendorsForCompare.length})
            </button>
          )}
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.map((vendor) => {
          const isSelected = selectedVendorsForCompare.includes(vendor.id);

          return (
            <div
              key={vendor.id}
              className={`bg-white rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                  : 'border-neutral-200 hover:border-neutral-300 shadow-2xs hover:shadow-sm'
              }`}
            >
              <div className="p-5">
                {/* Top Row: Wordmark, Compare toggle & Tier */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">
                      {vendor.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium">
                      {vendor.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleCompare(vendor.id)}
                    className="text-neutral-400 hover:text-blue-600 transition-colors p-1 cursor-pointer"
                    title={isSelected ? 'Bỏ chọn so sánh' : 'Chọn để so sánh'}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Gartner Recognition Badge (Clean Unboxed metadata) */}
                <div className="flex items-center gap-1.5 text-xs text-neutral-600 my-2.5">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-semibold text-neutral-800">{vendor.gartnerRecognition}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-4 mb-4">
                  {vendor.description}
                </p>

                {/* Metadata Line */}
                <div className="text-[11px] text-neutral-500 space-y-1.5 pt-3 border-t border-neutral-100">
                  <div>
                    <span className="font-semibold text-neutral-700">Kiến trúc:</span>{' '}
                    <span>{vendor.architectureType}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700">Mức độ Lock-in:</span>{' '}
                    <span
                      className={`font-semibold ${
                        vendor.lockinScore === 'low' || vendor.lockinScore === 'low-mid'
                          ? 'text-teal-700'
                          : vendor.lockinScore === 'mid' || vendor.lockinScore === 'mid-high'
                          ? 'text-amber-700'
                          : 'text-red-700'
                      }`}
                    >
                      {vendor.lockinLabel}
                    </span>
                  </div>
                  {vendor.marketShare && (
                    <div className="truncate">
                      <span className="font-semibold text-neutral-700">Thị phần:</span>{' '}
                      <span>{vendor.marketShare}</span>
                    </div>
                  )}
                </div>

                {/* Tags (Clean inline tags with bullet separation) */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {vendor.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Links & Compare Button */}
              <div className="px-5 py-3 bg-neutral-50 rounded-b-xl border-t border-neutral-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  {vendor.links.slice(0, 1).map((l, idx) => (
                    <a
                      key={idx}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                    >
                      <span>{l.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => toggleCompare(vendor.id)}
                  className={`text-[11px] font-medium cursor-pointer ${
                    isSelected ? 'text-blue-600 font-bold' : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {isSelected ? 'Đang so sánh' : '+ So sánh'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-side Compare Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-300">
            {/* Modal Header */}
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <h3 className="text-base font-bold text-neutral-900 font-display">
                  So sánh đối chiếu các giải pháp AI-Ready Data Fabric
                </h3>
                <p className="text-xs text-neutral-500">
                  So sánh {compareVendorsList.length} giải pháp theo kiến trúc, mức độ lock-in và tính tương thích ngân hàng
                </p>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                className="p-1 rounded-md text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Table Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-neutral-200">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="p-3 border border-neutral-200 font-bold text-neutral-700 w-44">
                        Tiêu chí so sánh
                      </th>
                      {compareVendorsList.map((v) => (
                        <th
                          key={v.id}
                          className="p-3 border border-neutral-200 font-bold text-neutral-900 text-sm"
                        >
                          {v.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Kiến trúc Data Fabric
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200">
                          {v.architectureType}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Xếp hạng Gartner
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200 text-amber-800 font-medium">
                          {v.gartnerRecognition}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Mức độ Lock-in
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200 font-bold">
                          <span
                            className={
                              v.lockinScore === 'low' || v.lockinScore === 'low-mid'
                                ? 'text-teal-700'
                                : v.lockinScore === 'mid' || v.lockinScore === 'mid-high'
                                ? 'text-amber-700'
                                : 'text-red-700'
                            }
                          >
                            {v.lockinLabel}
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Ràng buộc chính
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200 text-neutral-600">
                          {v.mainConstraint}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Tương thích Ab Initio &amp; Analytic Workbench
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200 text-neutral-700 font-medium">
                          {v.abInitioCompatibility}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Chi phí rời bỏ (Exit Cost)
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200 text-neutral-600">
                          {v.exitCost}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-semibold text-neutral-700 bg-neutral-50">
                        Use-case phù hợp nhất
                      </td>
                      {compareVendorsList.map((v) => (
                        <td key={v.id} className="p-3 border border-neutral-200 text-neutral-700">
                          {v.bestFitScenario}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
              <button
                onClick={() => setShowCompareModal(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg cursor-pointer"
              >
                Đóng bảng so sánh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
