import { LockinAssessmentItem } from '../types';

export const LOCKIN_ASSESSMENTS: LockinAssessmentItem[] = [
  {
    vendorId: 'denodo',
    vendorName: 'Denodo Platform',
    level: 'THẤP',
    levelType: 'low',
    constraint: 'Không giữ dữ liệu (no-copy). Ràng buộc nằm ở view/semantic model viết bằng VQL — tài sản logic, không phải dữ liệu vật lý.',
    compatibilityNote: 'Là lớp truy cập ảo phủ lên nguồn phân tán hiện có; đẩy được lineage sang Metadata Hub và phục vụ dữ liệu cho Analytic Workbench qua JDBC/ODBC/REST mà không đụng vào hai hệ thống đó.',
    compatibilityLevel: 'Cao',
    exitCost: 'Thấp — dữ liệu vẫn nằm nguyên tại nguồn, chỉ cần dựng lại lớp view.',
    vietnamBankingNote: 'Cực kỳ phù hợp với các NHTMCP và Big4 có nhiều hệ thống Core Banking (T24, Flexcube, Silverlake), thẻ (Way4, SmartVista) phân tán on-prem, tránh việc phải di chuyển dữ liệu nhạy cảm ra khỏi trung tâm dữ liệu.'
  },
  {
    vendorId: 'ibm_watsonx',
    vendorName: 'IBM watsonx (Data Fabric)',
    level: 'THẤP–TRUNG BÌNH',
    levelType: 'low-mid',
    constraint: 'Lakehouse mở trên Iceberg, hybrid by design, chủ trương overlay thay vì rip-and-replace. Ràng buộc tăng dần nếu dùng trọn bộ watsonx.governance + Guardium.',
    compatibilityNote: 'Triết lý "phủ lên hệ thống sẵn có" khớp với việc giữ nguyên Metadata Hub. Cần làm rõ ranh giới chức năng với watsonx.data intelligence để tránh trùng lặp đầu tư metadata.',
    compatibilityLevel: 'Cao',
    exitCost: 'Trung bình — dữ liệu ở định dạng mở, nhưng governance/policy phải dựng lại.',
    vietnamBankingNote: 'Lựa chọn truyền thống đáng tin cậy của các ngân hàng nhà nước và tổ chức tài chính lớn nhờ hỗ trợ sâu cả Mainframe, AIX, x86 và tuân thủ an toàn theo Thông tư 09/2020/TT-NHNN.'
  },
  {
    vendorId: 'dataiku',
    vendorName: 'Dataiku',
    level: 'THẤP–TRUNG BÌNH',
    levelType: 'low-mid',
    constraint: 'Không sở hữu storage/compute, chỉ điều phối. Ràng buộc là các visual recipe/flow đặc thù nền tảng.',
    compatibilityNote: 'Chạy tốt trên nguồn phân tán và triển khai được self-managed on-prem. Cần cân nhắc: phạm vi của Dataiku trùng đáng kể với Analytic Workbench, dễ thành đầu tư song trùng nếu không phân vai rõ.',
    compatibilityLevel: 'Cao — nhưng chồng lấn',
    exitCost: 'Thấp–trung bình — dữ liệu không bị giữ; chi phí chủ yếu là viết lại flow.',
    vietnamBankingNote: 'Cần phân định rạch ròi: nếu ngân hàng đã có Analytic Workbench cho data science chuyên sâu, Dataiku chỉ nên được xem xét nếu muốn mở rộng cho khối nghiệp vụ kinh doanh tự xây dựng mô hình đơn giản.'
  },
  {
    vendorId: 'informatica',
    vendorName: 'Informatica IDMC',
    level: 'TRUNG BÌNH',
    levelType: 'mid',
    constraint: 'CLAIRE là metadata engine độc quyền; mapping và data quality rule ở định dạng riêng, khó port.',
    compatibilityNote: 'IDMC muốn làm trung tâm metadata, đúng chỗ Ab Initio Metadata Hub đang đứng. Chỉ nên chọn nếu BIDV chấp nhận lộ trình thay thế Metadata Hub, không nên chạy song song lâu dài.',
    compatibilityLevel: 'Trung bình — xung đột vai trò',
    exitCost: 'Cao — toàn bộ mapping, lineage và DQ rule phải xây lại.',
    vietnamBankingNote: 'Nếu chạy song song hai metadata engine khổng lồ (Ab Initio và Informatica), ngân hàng sẽ đối mặt với chi phí license kép, xung đột định nghĩa nghiệp vụ và lineage phân mảnh.'
  },
  {
    vendorId: 'databricks',
    vendorName: 'Databricks',
    level: 'TRUNG BÌNH',
    levelType: 'mid',
    constraint: 'Delta Lake + Unity Catalog. Đã mở nguồn Unity Catalog và hỗ trợ Iceberg, nhưng notebook, job và Photon engine gắn chặt nền tảng.',
    compatibilityNote: 'Đọc được dữ liệu phân tán, nhưng Unity Catalog sẽ cạnh tranh vai trò catalog với Metadata Hub; cần thiết kế liên thông metadata hai chiều ngay từ đầu.',
    compatibilityLevel: 'Trung bình',
    exitCost: 'Trung bình–cao — dữ liệu port được, workload thì không.',
    vietnamBankingNote: 'Rất mạnh cho trung tâm xuất sắc AI (AI Center of Excellence) hoặc các dự án ML chấm điểm tín dụng, nhưng cần cân nhắc chi phí vận hành hạ tầng đám mây / hybrid.'
  },
  {
    vendorId: 'snowflake',
    vendorName: 'Snowflake',
    level: 'TRUNG BÌNH',
    levelType: 'mid',
    constraint: 'Iceberg + Polaris giảm lock-in ở tầng lưu trữ, nhưng Horizon Catalog, Cortex AI và mô hình tính phí theo credit là đặc thù.',
    compatibilityNote: 'Cần đưa dữ liệu vào Snowflake mới khai thác hết giá trị — ngược với thực tế phân tán và yêu cầu dữ liệu tại chỗ của ngân hàng.',
    compatibilityLevel: 'Trung bình',
    exitCost: 'Trung bình — Iceberg giúp thoát dữ liệu, nhưng logic và governance phải làm lại.',
    vietnamBankingNote: 'Mô hình Data Clean Room và Data Sharing cực kỳ xuất sắc nếu ngân hàng phát triển hệ sinh thái Open Banking kết nối Fintech, sàn TMĐT và chuỗi cung ứng bên ngoài.'
  },
  {
    vendorId: 'google_bigquery',
    vendorName: 'Google BigQuery',
    level: 'TRUNG BÌNH–CAO',
    levelType: 'mid-high',
    constraint: 'Serverless gắn với GCP; BigLake và Iceberg REST Catalog mở một phần, phần còn lại phụ thuộc hệ sinh thái Google.',
    compatibilityNote: 'Là cloud-only, khó phù hợp phần lớn khối lượng dữ liệu on-prem của BIDV nếu chưa có chiến lược cloud rõ ràng.',
    compatibilityLevel: 'Thấp–trung bình',
    exitCost: 'Cao — ràng buộc cả hạ tầng lẫn AI layer (Vertex AI, Gemini).',
    vietnamBankingNote: 'Cần tuân thủ quy định về lưu trữ dữ liệu tài chính trọng yếu trong nước theo Luật An ninh mạng và các hướng dẫn của NHNN về điện toán đám mây.'
  },
  {
    vendorId: 'microsoft_fabric',
    vendorName: 'Microsoft Fabric',
    level: 'CAO',
    levelType: 'high',
    constraint: 'SaaS all-in-one: OneLake, Power BI, Copilot, Azure AI Foundry đóng gói cùng nhau. Giá trị lớn nhất chỉ hiện ra khi dùng trọn bộ.',
    compatibilityNote: 'Shortcut đọc được nguồn ngoài, nhưng mô hình vận hành hướng tới hợp nhất về OneLake và thay thế luôn lớp analytics — chồng trực tiếp lên Analytic Workbench.',
    compatibilityLevel: 'Thấp–trung bình',
    exitCost: 'Rất cao — rời Fabric gần như là rời cả Azure data estate.',
    vietnamBankingNote: 'Nếu lãnh đạo ngân hàng muốn trải nghiệm Copilot nhanh, Fabric rất hấp dẫn, nhưng nguy cơ phụ thuộc hoàn toàn vào Microsoft Azure và làm suy giảm giá trị các khoản đầu tư on-prem là rất lớn.'
  }
];

export const BIDV_STRATEGIC_VERDICT = {
  assumptions: [
    'BIDV sở hữu hạ tầng dữ liệu quy mô lớn, phân tán và đa dạng (Core Banking, Data Warehouse, Satellite Systems, phi cấu trúc).',
    'Đã đầu tư Ab Initio Metadata Hub làm nơi tập trung metadata, quản trị dữ liệu và lineage end-to-end cho toàn ngân hàng.',
    'Đã đầu tư Analytic Workbench làm môi trường phân tích dữ liệu, khai phá và mô hình hóa cho đội ngũ phân tích/data science.',
    'Nguyên tắc vàng: Giữ Ab Initio Metadata Hub làm System of Record cho Metadata; chọn Data Fabric làm lớp truy cập liên thông (Access Layer) — KHÔNG chọn Fabric làm lớp thay thế Metadata.'
  ],
  recommendedVerdict: {
    title: 'Phù hợp nhất với bối cảnh BIDV & Ngân hàng Việt Nam',
    vendors: ['Denodo Platform', 'IBM watsonx'],
    explanation: 'Denodo hoặc IBM watsonx đóng vai trò lớp fabric nền hoàn hảo: cả hai đều tôn trọng hạ tầng phân tán sẵn có, không đòi hỏi gom toàn bộ dữ liệu về một chỗ (no-copy) và không tranh chấp vai trò của Ab Initio Metadata Hub. Hệ thống có thể đẩy metadata và lineage trực tiếp sang Ab Initio và cấp nguồn cho Analytic Workbench mà không làm gián đoạn vận hành.'
  },
  cautiousVerdict: {
    title: 'Cần đặc biệt thận trọng khi đánh giá',
    vendors: ['Microsoft Fabric', 'Informatica IDMC', 'Dataiku'],
    explanation: 'Microsoft Fabric có mức độ lock-in cao nhất và hướng tới việc thay thế luôn lớp phân tích hiện hữu. Informatica IDMC trực tiếp xung đột chức năng với Ab Initio Metadata Hub tạo nên chi phí trùng lặp khổng lồ. Dataiku nếu đầu tư cần phân vai rạch ròi với Analytic Workbench để tránh lãng phí ngân sách.'
  }
};
