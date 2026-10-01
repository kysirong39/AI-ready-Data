import React from 'react';
import { Landmark, ShieldAlert, Cpu, BookOpen, CheckCircle, ArrowRight, FileCheck } from 'lucide-react';

export const VietnamBankingInsights: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-display">
          Chuyên gia Phân tích Cấp cao (Innovation Analyst) · Góc nhìn Chiến lược
        </span>
        <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
          Bài học &amp; Cơ hội triển khai AI-Ready Data Fabric tại Ngân hàng Việt Nam
        </h2>
        <p className="text-neutral-600 text-sm mt-1">
          Phân tích thực tiễn chuyển đổi số, áp lực tuân thủ quy định Ngân hàng Nhà nước (NHNN) và kiến trúc tối ưu bảo vệ các khoản đầu tư đã có.
        </p>
      </div>

      {/* Key Takeaways Card */}
      <div className="p-6 bg-blue-50/70 rounded-xl border border-blue-200 space-y-3">
        <div className="flex items-center gap-2 text-base font-bold text-blue-900 font-display">
          <BookOpen className="w-5 h-5 text-blue-700" />
          Tóm tắt các Ý chính (Key Takeaways)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-3 bg-white rounded-lg border border-blue-100 text-xs space-y-1">
            <span className="font-bold text-neutral-900 block">1. Tránh bẫy "Rip-and-Replace"</span>
            <p className="text-neutral-600 leading-relaxed">
              Các ngân hàng Việt Nam không thể thay thế toàn bộ hệ thống Core Banking và kho dữ liệu on-prem. Lựa chọn kiến trúc phủ (Overlay / Data Virtualization) là con đường khả thi duy nhất.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-blue-100 text-xs space-y-1">
            <span className="font-bold text-neutral-900 block">2. Bảo vệ Ab Initio &amp; Workbench</span>
            <p className="text-neutral-600 leading-relaxed">
              Giữ Ab Initio Metadata Hub làm System of Record cho metadata và lineage. Chọn giải pháp Data Fabric đóng vai trò lớp truy cập liên thông (Federated Access Layer) mà không xâm lấn vai trò.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-blue-100 text-xs space-y-1">
            <span className="font-bold text-neutral-900 block">3. Tuân thủ Quy chuẩn NHNN</span>
            <p className="text-neutral-600 leading-relaxed">
              Đáp ứng Thông tư 09/2020/TT-NHNN, Thông tư 50/2024/TT-NHNN và Nghị định 13/2023/NĐ-CP về dữ liệu cá nhân thông qua kiểm toán truy vết (Data Lineage) và kiểm soát ranh giới dữ liệu.
            </p>
          </div>
        </div>
      </div>

      {/* Vietnam Banking Challenges vs Solutions */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-neutral-900 font-display">
          Thực trạng 4 rào cản lớn tại các NHTMCP &amp; Big4 Việt Nam
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase">
              <Landmark className="w-4 h-4 text-blue-600" />
              1. Dữ liệu phân mảnh sâu sắc giữa các khối
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Dữ liệu tài khoản nằm ở Core (T24, Flexcube), dữ liệu thẻ ở Way4, dữ liệu khách hàng ở CRM, dữ liệu giải ngân ở LOS. Việc tổng hợp dữ liệu 360 độ cho phê duyệt tín dụng tức thì (Instant Lending) mất hàng tuần qua các luồng batch đêm.
            </p>
            <div className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded border border-teal-100 font-medium">
              💡 <strong>Giải pháp Data Fabric:</strong> Cung cấp Semantic Layer ảo hóa, truy vấn liên thông tại nguồn mà không cần chờ ETL sao chép.
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              2. Áp lực tuân thủ pháp lý ngày càng khắt khe
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Thông tư 50/2024/TT-NHNN về an toàn hệ thống thông tin và Nghị định 13/2023/NĐ-CP yêu cầu ngân hàng phải chứng minh ranh giới bảo vệ dữ liệu nhạy cảm PII, nhật ký truy cập bất khả chối bỏ và kiểm soát chia sẻ dữ liệu với bên thứ ba.
            </p>
            <div className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded border border-teal-100 font-medium">
              💡 <strong>Giải pháp Data Fabric:</strong> Tự động phát hiện nhãn nhạy cảm qua Active Metadata và cấp quyền truy cập theo ngữ cảnh (ABAC).
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase">
              <Cpu className="w-4 h-4 text-purple-600" />
              3. Nút thắt đưa mô hình AI/ML lên Production
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Các chuyên gia dữ liệu trên Analytic Workbench xây dựng mô hình rủi ro tín dụng rất tốt trên môi trường sandbox, nhưng khi đưa vào luồng chấm điểm thời gian thực của ứng dụng Mobile Banking thì pipeline dữ liệu bị nghẽn do không đủ SLA.
            </p>
            <div className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded border border-teal-100 font-medium">
              💡 <strong>Giải pháp Data Fabric:</strong> Tích hợp Feature Store và Stream Processing để đảm bảo dữ liệu train đồng nhất 100% với dữ liệu inference.
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              4. Cạnh tranh trong làn sóng Open Banking &amp; API
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Chiến lược chuyển đổi số ngành ngân hàng đến 2030 đặt mục tiêu mở rộng hệ sinh thái số liên kết thương mại điện tử, dịch vụ công và Fintech. Chia sẻ dữ liệu thô ra ngoài là điều cấm kỵ.
            </p>
            <div className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded border border-teal-100 font-medium">
              💡 <strong>Giải pháp Data Fabric:</strong> Ứng dụng mô hình Data Clean Room và Data Sharing không copy để liên kết dữ liệu an toàn.
            </div>
          </div>
        </div>
      </div>

      {/* 3-Phase Recommended Roadmap Table */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4">
        <h3 className="text-lg font-bold text-neutral-900 font-display">
          Lộ trình 3 giai đoạn kiến tạo AI-Ready Data Fabric cho Ngân hàng
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-neutral-200">
            <thead>
              <tr className="bg-neutral-100">
                <th className="p-3 border border-neutral-200 font-bold w-32">Giai đoạn</th>
                <th className="p-3 border border-neutral-200 font-bold w-52">Mục tiêu chính</th>
                <th className="p-3 border border-neutral-200 font-bold">Giải pháp &amp; Hành động cốt lõi</th>
                <th className="p-3 border border-neutral-200 font-bold w-48">Kết quả đầu ra (Deliverable)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-neutral-200 font-bold text-teal-700 bg-teal-50/40">
                  Giai đoạn 1 <br />
                  <span className="font-normal text-neutral-500">(1–3 tháng)</span>
                </td>
                <td className="p-3 border border-neutral-200 font-semibold text-neutral-800">
                  Liên kết ảo hóa &amp; Kết nối Ab Initio
                </td>
                <td className="p-3 border border-neutral-200 text-neutral-600">
                  Triển khai lớp Data Virtualization (Denodo hoặc IBM) phủ lên Core Banking, Cards, DW. Đẩy toàn bộ catalog và lineage về Ab Initio Metadata Hub. Cấp quyền truy xuất cho Analytic Workbench.
                </td>
                <td className="p-3 border border-neutral-200 text-neutral-800 font-medium">
                  Semantic Layer hoạt động, giảm 80% thời gian lấy dữ liệu thử nghiệm.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-neutral-200 font-bold text-blue-700 bg-blue-50/40">
                  Giai đoạn 2 <br />
                  <span className="font-normal text-neutral-500">(4–9 tháng)</span>
                </td>
                <td className="p-3 border border-neutral-200 font-semibold text-neutral-800">
                  Lakehouse mở &amp; Active Governance
                </td>
                <td className="p-3 border border-neutral-200 text-neutral-600">
                  Xây dựng kho lưu trữ mở trên định dạng Apache Iceberg. Tự động hóa giám sát chất lượng dữ liệu (Data Observability) và gắn nhãn PII theo Nghị định 13/2023.
                </td>
                <td className="p-3 border border-neutral-200 text-neutral-800 font-medium">
                  Báo cáo tuân thủ tự động cho kiểm toán nội bộ và thanh tra NHNN.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-neutral-200 font-bold text-purple-700 bg-purple-50/40">
                  Giai đoạn 3 <br />
                  <span className="font-normal text-neutral-500">(10–18 tháng)</span>
                </td>
                <td className="p-3 border border-neutral-200 font-semibold text-neutral-800">
                  AI Agents &amp; Open Banking Ecosystem
                </td>
                <td className="p-3 border border-neutral-200 text-neutral-600">
                  Tích hợp AI Gateway quản lý quyền truy cập dữ liệu của AI Agents và Copilots. Thiết lập Data Clean Room phục vụ liên kết đối tác Fintech bên ngoài.
                </td>
                <td className="p-3 border border-neutral-200 text-neutral-800 font-medium">
                  Sản phẩm AI tạo sinh phục vụ khách hàng và nhân viên vận hành an toàn.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
