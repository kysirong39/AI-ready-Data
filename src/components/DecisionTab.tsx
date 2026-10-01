import React, { useState, useMemo } from 'react';
import { DECISION_QUESTIONS } from '../data/decisionData';
import { CheckCircle2, RotateCcw, Award, Lightbulb, FileText, Printer } from 'lucide-react';

export const DecisionTab: React.FC = () => {
  // Default selections reflecting bank scenario
  const [answers, setAnswers] = useState<Record<string, string>>({
    q1: 'a',
    q2: 'c',
    q3: 'a',
    q4: 'a',
    q5: 'd'
  });

  const [showReport, setShowReport] = useState(false);

  const handleSelect = (questionId: string, optionKey: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  const resetAnswers = () => {
    setAnswers({
      q1: 'a',
      q2: 'a',
      q3: 'a',
      q4: 'a',
      q5: 'a'
    });
  };

  // Compute recommendation scores
  const recommendationResults = useMemo(() => {
    const scores: Record<string, number> = {};
    const totalQuestions = DECISION_QUESTIONS.length;

    DECISION_QUESTIONS.forEach((q) => {
      const selectedKey = answers[q.id];
      const opt = q.options.find((o) => o.key === selectedKey);
      if (opt) {
        opt.recommendations.forEach((vendorName) => {
          scores[vendorName] = (scores[vendorName] || 0) + 1;
        });
      }
    });

    const sorted = Object.entries(scores)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalQuestions) * 100)
      }))
      .sort((a, b) => b.count - a.count);

    return sorted;
  }, [answers]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
            Decision Framework · 5 Câu hỏi định hướng
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
            Khung câu hỏi lựa chọn giải pháp phù hợp
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Trả lời 5 câu hỏi chiến lược để hệ thống tính toán và đưa ra đề xuất vendor tối ưu nhất cho bối cảnh tổ chức.
          </p>
        </div>

        <button
          onClick={resetAnswers}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg cursor-pointer transition-colors self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* Main Grid: Questions (Left) & Dynamic Recommendation Scoreboard (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Questions Column */}
        <div className="lg:col-span-8 space-y-6">
          {DECISION_QUESTIONS.map((q) => {
            const selectedOption = q.options.find((o) => o.key === answers[q.id]);

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 shadow-2xs space-y-4"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                    Câu hỏi {q.number}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 font-display mt-0.5">
                    {q.title}
                  </h3>
                  {q.description && (
                    <p className="text-xs text-neutral-500 mt-1">{q.description}</p>
                  )}
                </div>

                {/* Options Radio List */}
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isChecked = answers[q.id] === opt.key;
                    return (
                      <label
                        key={opt.key}
                        onClick={() => handleSelect(q.id, opt.key)}
                        className={`flex items-start gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-blue-50/70 border-blue-300 text-neutral-900 ring-1 ring-blue-200'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          checked={isChecked}
                          onChange={() => handleSelect(q.id, opt.key)}
                          className="mt-0.5 accent-blue-600 cursor-pointer"
                        />
                        <span className="leading-relaxed">{opt.text}</span>
                      </label>
                    );
                  })}
                </div>

                {/* Dynamic Inline Recommendation Rationale */}
                {selectedOption && (
                  <div className="p-3 bg-teal-50/60 rounded-lg border border-teal-200 text-xs text-teal-950 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      <strong>Khuyến nghị cho câu hỏi này:</strong>{' '}
                      <span className="font-semibold text-teal-800">
                        {selectedOption.recommendations.join(', ')}
                      </span>
                      . {selectedOption.rationale}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Recommendation Panel (Sticky Right) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
          <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display">
              <Award className="w-4 h-4 text-blue-600" />
              Kết quả khuyến nghị tổng hợp
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Dựa trên <strong>5 tiêu chí</strong> bạn đã lựa chọn, hệ thống phân tích và xếp hạng mức độ phù hợp:
            </p>

            {/* Vendor Ranking Bars */}
            <div className="space-y-3 pt-2">
              {recommendationResults.map((item, idx) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-neutral-900 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-[10px] font-mono">
                        {idx + 1}
                      </span>
                      {item.name}
                    </span>
                    <span className="font-mono text-blue-700">
                      {item.count}/5 điểm ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === 0
                          ? 'bg-blue-600'
                          : idx === 1
                          ? 'bg-teal-600'
                          : 'bg-neutral-400'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Conclusion */}
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              💡 <strong>Kết luận tư vấn:</strong> Nhóm giải pháp{' '}
              <strong className="text-neutral-950">
                {recommendationResults.slice(0, 2).map((r) => r.name).join(' & ')}
              </strong>{' '}
              đạt điểm tương thích cao nhất với yêu cầu hiện tại.
            </div>

            {/* Action to show Full Executive Report */}
            <button
              onClick={() => setShowReport(true)}
              className="w-full py-2 px-3 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-600" />
              <span>Xem Báo cáo Tư vấn Chuyên sâu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Executive Report Modal */}
      {showReport && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-300">
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <h3 className="text-base font-bold text-neutral-900 font-display">
                  Báo cáo Tư vấn Kiến trúc AI-Ready Data Fabric
                </h3>
                <p className="text-xs text-neutral-500">
                  Tài liệu tóm tắt cho Hội đồng Công nghệ &amp; Ban Điều hành
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline mr-4 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" /> In / Lưu PDF
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 text-xs text-neutral-800 leading-relaxed">
              <div className="border-b border-neutral-200 pb-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                  1. Tóm tắt nhu cầu &amp; Đầu vào đánh giá
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {DECISION_QUESTIONS.map((q) => {
                    const opt = q.options.find((o) => o.key === answers[q.id]);
                    return (
                      <div key={q.id} className="p-2.5 bg-neutral-50 rounded border border-neutral-100">
                        <span className="font-semibold block text-neutral-900">{q.title}</span>
                        <span className="text-neutral-600 mt-1 block">→ {opt?.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-b border-neutral-200 pb-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-2">
                  2. Khuyến nghị Giải pháp Mục tiêu
                </h4>
                <div className="space-y-3">
                  {recommendationResults.slice(0, 3).map((item, idx) => (
                    <div
                      key={item.name}
                      className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-neutral-900 text-sm">
                          #{idx + 1}. {item.name}
                        </div>
                        <div className="text-neutral-500 text-[11px] mt-0.5">
                          Tương thích {item.percentage}% với mục tiêu chiến lược
                        </div>
                      </div>
                      <span className="text-blue-700 font-mono font-bold text-sm">
                        {item.count} / 5 Tiêu chí
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-2">
                  3. Lộ trình Triển khai Đề xuất (3 Giai đoạn)
                </h4>
                <div className="space-y-2">
                  <div className="p-2.5 bg-teal-50/70 border border-teal-200 rounded">
                    <strong>Giai đoạn 1 (Tháng 1–3):</strong> Thiết lập lớp ảo hóa no-copy (Denodo/IBM) kết nối với Ab Initio Metadata Hub, phục vụ ngay dữ liệu phân tán cho Analytic Workbench mà không di chuyển dữ liệu.
                  </div>
                  <div className="p-2.5 bg-blue-50/70 border border-blue-200 rounded">
                    <strong>Giai đoạn 2 (Tháng 4–9):</strong> Triển khai hồ dữ liệu mở (Apache Iceberg Lakehouse) kết hợp Active Metadata để tự động hóa kiểm toán chất lượng và lineage cho NHNN/Basel.
                  </div>
                  <div className="p-2.5 bg-purple-50/70 border border-purple-200 rounded">
                    <strong>Giai đoạn 3 (Tháng 10–18):</strong> Mở rộng kết nối AI Agents, tích hợp API Gateway quản trị mô hình và mở cổng Open Banking an toàn.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
              <button
                onClick={() => setShowReport(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg cursor-pointer"
              >
                Đóng báo cáo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
