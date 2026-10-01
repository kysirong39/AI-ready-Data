import React, { useState } from 'react';
import { ExternalLink, Database, Cpu, Layers, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const OverviewTab: React.FC = () => {
  const [selectedArch, setSelectedArch] = useState<'virtual' | 'integration' | 'lakehouse'>('virtual');

  return (
    <div className="space-y-12">
      {/* Market Stats Grid */}
      <section>
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
            Bức tranh thị trường 2025–2026
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
            Tổng quan thị trường Data Fabric toàn cầu
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Data Fabric không còn là khái niệm thử nghiệm — đây là hạ tầng chiến lược bắt buộc để doanh nghiệp hiện thực hóa giá trị từ AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-blue-600 font-display">$3.24 <span className="text-lg font-normal text-neutral-600">tỷ</span></div>
            <div className="text-xs font-semibold text-neutral-800 mt-2">Quy mô thị trường 2025</div>
            <p className="text-xs text-neutral-500 mt-1">
              Theo Precedence Research 2026, nền tảng data fabric tăng trưởng mạnh mẽ trong các khối tài chính.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-neutral-900 font-display">$13.35 <span className="text-lg font-normal text-neutral-600">tỷ</span></div>
            <div className="text-xs font-semibold text-neutral-800 mt-2">Dự báo quy mô 2035</div>
            <p className="text-xs text-neutral-500 mt-1">
              Thị trường mở rộng hơn 4 lần trong thập kỷ tới khi AI Agents trở thành người tiêu thụ dữ liệu chính.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-emerald-600 font-display">15.2%</div>
            <div className="text-xs font-semibold text-neutral-800 mt-2">Tốc độ tăng trưởng kép (CAGR)</div>
            <p className="text-xs text-neutral-500 mt-1">
              Giai đoạn 2026–2035; động lực chính từ ngân hàng số, tuân thủ pháp lý và GenAI quy mô lớn.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-amber-600 font-display">$644 <span className="text-lg font-normal text-neutral-600">tỷ</span></div>
            <div className="text-xs font-semibold text-neutral-800 mt-2">Nghịch lý chi tiêu AI toàn cầu</div>
            <p className="text-xs text-neutral-500 mt-1">
              Hơn 80% tổ chức không đạt kỳ vọng ROI do dữ liệu phân mảnh, không tiếp cận được bởi AI.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Strategic Trends */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
            Market Intelligence
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
            3 xu hướng chiến lược định hình kiến trúc 2025–2026
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Thesis */}
          <div className="md:col-span-2 bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              Luận điểm cốt lõi: Nút thắt AI không nằm ở mô hình — mà nằm ở dữ liệu
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Thị trường Data Fabric đạt <strong className="text-neutral-900">$3,24 tỷ USD (2025)</strong> và dự kiến đạt{' '}
              <strong className="text-neutral-900">$3,75 tỷ USD (2026)</strong> với CAGR 15,2%/năm giai đoạn 2026–2035 (theo{' '}
              <a href="https://www.precedenceresearch.com/data-fabric-market" target="_blank" rel="noreferrer" className="text-blue-600 underline">Precedence Research 2026</a>).
              Toàn bộ các nhà cung cấp Gartner Leaders năm 2025–2026 đều định vị lại theo hướng <em>"AI-ready data platform"</em> hoặc <em>"agentic data fabric"</em>.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed mt-3">
              Nghịch lý lớn: chi tiêu AI toàn cầu đạt $644 tỷ USD năm 2025 nhưng hơn 80% không đạt kỳ vọng kinh doanh. Lý do không phải mô hình AI kém — các họ mô hình GPT-5, Claude, Gemini, Llama 4 đều có năng lực suy luận cực cao. 
              <strong> Nút thắt thực sự là dữ liệu: phân mảnh, silo giữa các phòng ban, quản trị không nhất quán, và không thể truy cập an toàn bởi các AI agents.</strong>
            </p>
          </div>

          {/* Trend 1 */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display mb-2">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                Xu hướng #1: Quản trị tác tử (Agentic Data Governance)
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Active Metadata + AI Governance Inventory + lineage end-to-end không còn là khuyến nghị thực hành tốt — mà trở thành <strong>yêu cầu bắt buộc pháp lý</strong> do EU AI Act, NIST AI RMF, ISO/IEC 42001 và nguyên tắc SR 11-7 cho các tổ chức tài chính.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                Gartner nhận định: <em>"Metadata management solutions đang chuyển từ augmented data catalogs sang metadata 'anywhere' orchestration platforms."</em> Informatica IDMC và IBM watsonx.data thể hiện ưu thế mạnh nhất ở phân khúc này.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-neutral-500">
              Trọng tâm: Catalog hóa dữ liệu huấn luyện, kiểm toán suy luận AI và ranh giới quyền truy cập của Agent.
            </div>
          </div>

          {/* Trend 2 */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display mb-2">
                <Database className="w-4 h-4 text-emerald-600" />
                Xu hướng #2: Cuộc chiến định dạng mở (Open Format War)
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                <strong>Apache Iceberg + Apache Polaris</strong> trở thành chuẩn mở de facto cho lớp lưu trữ và catalog. Snowflake, Databricks, Google BigQuery đều đã hỗ trợ khả năng tương tác toàn diện (GA interoperability) với Iceberg.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                Dự án Apache Gravitino trở thành "catalog of catalogs" cho môi trường đa đám mây. Rủi ro vendor lock-in ở tầng lưu trữ giảm mạnh — mang lại lợi thế to lớn cho các ngân hàng có hạ tầng on-premise muốn bắc cầu sang cloud mà không phải viết lại toàn bộ dữ liệu.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-neutral-500">
              Trọng tâm: Tách biệt hoàn toàn tầng lưu trữ (Storage) khỏi công cụ tính toán (Compute Engine).
            </div>
          </div>
        </div>
      </section>

      {/* 3 Competing Architectures Interactive Deep Dive */}
      <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
            Khung kiến trúc so sánh
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mt-1">
            Ba trường phái kiến trúc Data Fabric đang cạnh tranh
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Không có một giải pháp đơn lẻ nào phù hợp cho mọi bài toán. Lựa chọn trường phái quyết định mức độ chi phí, thời gian triển khai và rủi ro phụ thuộc vendor.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-100 rounded-lg max-w-2xl mb-6">
          <button
            onClick={() => setSelectedArch('virtual')}
            className={`flex-1 min-w-[160px] py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer text-center ${
              selectedArch === 'virtual'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            1. Virtualization-first (No-copy)
          </button>
          <button
            onClick={() => setSelectedArch('integration')}
            className={`flex-1 min-w-[160px] py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer text-center ${
              selectedArch === 'integration'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            2. Integration-led (Hybrid Overlay)
          </button>
          <button
            onClick={() => setSelectedArch('lakehouse')}
            className={`flex-1 min-w-[160px] py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer text-center ${
              selectedArch === 'lakehouse'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            3. Unified Lakehouse (All-in-one)
          </button>
        </div>

        {/* Architecture Details */}
        {selectedArch === 'virtual' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-neutral-900">
                  <Layers className="w-5 h-5 text-teal-600" />
                  Trường phái Ảo hóa Dữ liệu (Data Virtualization-first)
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  <strong>Đại diện tiêu biểu:</strong> Denodo Platform. <br />
                  <strong>Triết lý cốt lõi:</strong> Không di chuyển dữ liệu vật lý (Zero Data Movement). Thay vì gom hàng terabyte dữ liệu từ các hệ thống Core Banking, thẻ, CRM về một kho tập trung mới có thể phân tích, kiến trúc này đặt một <em>lớp Semantic Layer ảo hóa</em> kết nối trực tiếp đến các nguồn dữ liệu tại chỗ. Các truy vấn SQL/AI được tối ưu hóa và đẩy xử lý xuống nguồn (push-down optimization).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-teal-50/60 rounded-lg border border-teal-100">
                    <div className="text-xs font-bold text-teal-800 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ưu điểm vượt trội
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Triển khai cực nhanh (tính bằng tuần thay vì năm).</li>
                      <li>Dữ liệu nhạy cảm không rời khỏi ranh giới on-premise.</li>
                      <li>Khóa chặt vendor lock-in ở mức tối thiểu (Thấp nhất thị trường).</li>
                      <li>Bảo tồn nguyên vẹn Ab Initio Metadata Hub hiện hữu.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-100">
                    <div className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Giới hạn cần lưu ý
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Phụ thuộc vào năng lực chịu tải của nguồn dữ liệu gốc.</li>
                      <li>Khó xử lý các tác vụ huấn luyện Deep Learning trên hàng tỷ tham số mà không có bộ đệm lưu trữ.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs space-y-3">
                <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                  Kịch bản phù hợp tại Ngân hàng VN
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Rất lý tưởng cho ngân hàng có hàng chục hệ thống nghiệp vụ phân tán, muốn cấp dữ liệu ngay cho đội ngũ Data Science trên Analytic Workbench mà không có ngân sách hoặc thời gian xây lại Data Lakehouse từ đầu.
                </p>
                <div className="pt-2 border-t border-neutral-200">
                  <span className="font-semibold text-neutral-800">Đánh giá Lock-in:</span>{' '}
                  <span className="text-teal-700 font-bold">THẤP (An toàn nhất)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedArch === 'integration' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-neutral-900">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  Trường phái Tích hợp &amp; Active Governance (Integration-led)
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  <strong>Đại diện tiêu biểu:</strong> IBM watsonx.data, Informatica IDMC, Qlik/Talend. <br />
                  <strong>Triết lý cốt lõi:</strong> Kiến trúc lớp phủ (Overlay Architecture), tôn trọng hệ sinh thái đa dạng (Hybrid-by-design). Không bắt buộc thay thế toàn bộ (no rip-and-replace). Tập trung vào sức mạnh của <em>Active Metadata Engine</em> để tự động phát hiện quan hệ dữ liệu, kiểm soát chất lượng (DQ), định danh dữ liệu nhạy cảm (PII) và quản trị tuân thủ theo thời gian thực.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-purple-50/60 rounded-lg border border-purple-100">
                    <div className="text-xs font-bold text-purple-800 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ưu điểm vượt trội
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Khả năng tuân thủ pháp lý cao nhất (Basel II/III, NHNN, GDPR).</li>
                      <li>Hỗ trợ sâu cả dữ liệu Mainframe, AIX, CDC streaming và Lakehouse mở.</li>
                      <li>Tự động hóa quản trị và lineage bằng AI engine (CLAIRE, watsonx).</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-100">
                    <div className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Giới hạn cần lưu ý
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Chi phí bản quyền và bảo trì tương đối cao.</li>
                      <li>Nguy cơ trùng lặp chức năng nếu ngân hàng đã có Ab Initio Metadata Hub.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs space-y-3">
                <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                  Kịch bản phù hợp tại Ngân hàng VN
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Phù hợp cho các ngân hàng lớn chịu sự giám sát ngặt nghèo của thanh tra, cần chứng minh nguồn gốc dữ liệu (lineage) chi tiết đến từng phép tính và muốn mở rộng lên môi trường đám mây một cách an toàn, có kiểm soát.
                </p>
                <div className="pt-2 border-t border-neutral-200">
                  <span className="font-semibold text-neutral-800">Đánh giá Lock-in:</span>{' '}
                  <span className="text-amber-700 font-bold">THẤP ĐẾN TRUNG BÌNH</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedArch === 'lakehouse' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-neutral-900">
                  <Database className="w-5 h-5 text-blue-600" />
                  Trường phái Lakehouse Hợp nhất (Unified Lakehouse)
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  <strong>Đại diện tiêu biểu:</strong> Databricks, Snowflake, Microsoft Fabric, Google BigQuery. <br />
                  <strong>Triết lý cốt lõi:</strong> Hợp nhất tất cả dữ liệu (Structured, Unstructured, Streaming) vào một nền tảng tính toán và lưu trữ duy nhất. Tích hợp trực tiếp các công cụ AI thế hệ mới (Mosaic AI, Cortex, Vertex AI, Azure AI Foundry) để giảm thiểu độ trễ giữa phân tích dữ liệu và suy luận mô hình.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100">
                    <div className="text-xs font-bold text-blue-800 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ưu điểm vượt trội
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Sức mạnh tính toán và khả năng mở rộng AI/ML vô hạn.</li>
                      <li>Hỗ trợ trực tiếp cho AI Agents và RAG tốc độ cao.</li>
                      <li>Trải nghiệm đồng nhất cho Data Engineers, Analysts và Data Scientists.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-red-50/60 rounded-lg border border-red-100">
                    <div className="text-xs font-bold text-red-800 flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Giới hạn cần lưu ý
                    </div>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Rủi ro lock-in cao (đặc biệt với giải pháp đóng gói như Fabric).</li>
                      <li>Đòi hỏi phải di chuyển dữ liệu lên cloud, vấp phải rào cản quy định ngân hàng.</li>
                      <li>Chi phí vận hành (compute consumption) có thể tăng vọt nếu không quản trị chặt.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs space-y-3">
                <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                  Kịch bản phù hợp tại Ngân hàng VN
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Dành cho các ngân hàng thương mại cổ phần năng động muốn bứt phá về chấm điểm tín dụng AI, cá nhân hóa trải nghiệm khách hàng và đã có chiến lược Cloud-First được phê duyệt bởi Hội đồng Quản trị.
                </p>
                <div className="pt-2 border-t border-neutral-200">
                  <span className="font-semibold text-neutral-800">Đánh giá Lock-in:</span>{' '}
                  <span className="text-red-700 font-bold">TRUNG BÌNH ĐẾN CAO</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
