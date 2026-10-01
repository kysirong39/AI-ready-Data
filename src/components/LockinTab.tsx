import React from 'react';
import { LOCKIN_ASSESSMENTS, BIDV_STRATEGIC_VERDICT } from '../data/lockinData';
import { ShieldCheck, AlertTriangle, Layers, Database, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const LockinTab: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
          Risk Assessment · Kịch bản BIDV &amp; Ngân hàng Việt Nam
        </span>
        <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
          Đánh giá mức độ Lock-in vào Vendor
        </h2>
        <p className="text-neutral-600 text-sm mt-1">
          Chấm điểm rủi ro phụ thuộc nhà cung cấp trên bốn trục: Dữ liệu, Metadata, Compute Engine và Lớp AI.
        </p>
      </div>

      {/* BIDV Infrastructure Context Assumption Box */}
      <div className="p-5 sm:p-6 bg-purple-50/70 rounded-xl border border-purple-200 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-purple-900 font-display">
          <Database className="w-4 h-4 text-purple-700" />
          Bối cảnh giả định kiến trúc tại BIDV &amp; NHTMCP lớn
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
          Ngân hàng có hạ tầng dữ liệu quy mô lớn, <strong>phân tán và đa dạng</strong> (Core banking T24/Flexcube, thẻ, CRM, kho dữ liệu vệ tinh, phi cấu trúc).
          Đặc biệt, ngân hàng đã đầu tư <strong className="text-purple-900">Ab Initio Metadata Hub</strong> làm trung tâm metadata &amp; lineage toàn diện và{' '}
          <strong className="text-purple-900">Analytic Workbench</strong> làm môi trường phân tích cho đội ngũ chuyên gia dữ liệu.
        </p>
        <div className="p-3 bg-white/80 rounded-lg border border-purple-100 text-xs text-purple-950 font-medium leading-relaxed">
          💡 <strong>Nguyên tắc vàng:</strong> Hai khoản đầu tư trên quyết định trực tiếp việc chấm điểm: <em>giải pháp nào buộc phải thay thế Metadata Hub hoặc nuốt trọn vai trò của Analytic Workbench thì chi phí chuyển đổi và rủi ro lock-in tăng vọt</em>, bất kể năng lực kỹ thuật thuần túy của hãng đó có mạnh đến đâu.
        </div>
      </div>

      {/* Lockin Table */}
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-xs text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-neutral-100 text-neutral-700 border-b border-neutral-200">
                <th className="p-3.5 font-bold w-40">Giải pháp</th>
                <th className="p-3.5 font-bold w-32">Mức Lock-in</th>
                <th className="p-3.5 font-bold w-64">Ràng buộc chính</th>
                <th className="p-3.5 font-bold">Tương thích Ab Initio Hub + Analytic Workbench</th>
                <th className="p-3.5 font-bold w-48">Chi phí rời bỏ (Exit Cost)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {LOCKIN_ASSESSMENTS.map((item) => (
                <tr key={item.vendorId} className="hover:bg-neutral-50 transition-colors">
                  <td className="p-3.5 font-bold text-neutral-900 align-top whitespace-nowrap">
                    {item.vendorName}
                  </td>
                  <td className="p-3.5 align-top">
                    <span
                      className={`inline-block px-2.5 py-1 rounded text-[11px] font-bold ${
                        item.levelType === 'low'
                          ? 'bg-teal-50 text-teal-700 border border-teal-200'
                          : item.levelType === 'low-mid'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.levelType === 'mid'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : item.levelType === 'mid-high'
                          ? 'bg-orange-50 text-orange-700 border border-orange-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {item.level}
                    </span>
                  </td>
                  <td className="p-3.5 text-neutral-600 align-top leading-relaxed">
                    {item.constraint}
                  </td>
                  <td className="p-3.5 align-top space-y-1">
                    <div className="font-semibold text-neutral-800 flex items-center gap-1">
                      <span>Độ tương thích:</span>
                      <span className="text-blue-700">{item.compatibilityLevel}</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed text-[11.5px]">
                      {item.compatibilityNote}
                    </p>
                  </td>
                  <td className="p-3.5 text-neutral-600 align-top leading-relaxed">
                    {item.exitCost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Verdict Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Verdict */}
        <div className="p-6 bg-teal-50/70 rounded-xl border border-teal-200 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-teal-900 font-display">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              {BIDV_STRATEGIC_VERDICT.recommendedVerdict.title}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              {BIDV_STRATEGIC_VERDICT.recommendedVerdict.vendors.join(' & ')}
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {BIDV_STRATEGIC_VERDICT.recommendedVerdict.explanation}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-teal-200/80 text-xs text-teal-950 font-medium">
            → Khuyến nghị hành động: Giữ Ab Initio làm System of Record cho Metadata; dùng Denodo / IBM làm lớp truy cập (Federated Access Layer).
          </div>
        </div>

        {/* Caution Verdict */}
        <div className="p-6 bg-amber-50/70 rounded-xl border border-amber-200 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-amber-900 font-display">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              {BIDV_STRATEGIC_VERDICT.cautiousVerdict.title}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
              {BIDV_STRATEGIC_VERDICT.cautiousVerdict.vendors.join(', ')}
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {BIDV_STRATEGIC_VERDICT.cautiousVerdict.explanation}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200/80 text-xs text-amber-950 font-medium">
            → Khuyến nghị hành động: Yêu cầu PoC chứng minh khả năng tích hợp không chồng chéo trước khi ký kết mua sắm giải pháp lớn.
          </div>
        </div>
      </div>
    </div>
  );
};
