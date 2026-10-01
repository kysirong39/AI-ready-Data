import { Criterion } from '../types';

export const CRITERIA_CATEGORIES = [
  {
    key: 'Traditional Alignment',
    nameVi: 'Chuẩn hóa truyền thống (Traditional Alignment)',
    description: 'Nền tảng định lượng, số liệu giám sát và độ tin cậy của nguồn dữ liệu thô.'
  },
  {
    key: 'Qualified Usage',
    nameVi: 'Sẵn sàng khai thác (Qualified Usage)',
    description: 'Chất lượng theo ngữ cảnh, nguồn gốc (lineage), đồ thị tri thức (Knowledge Graph) và RAG metadata.'
  },
  {
    key: 'Certified for Production',
    nameVi: 'Chứng nhận cho môi trường Production',
    description: 'Phiên bản hóa, kiểm định dữ liệu huấn luyện, tuân thủ rủi ro & quy chuẩn pháp lý ngân hàng.'
  },
  {
    key: 'Augmentation Enabled',
    nameVi: 'Tự động hóa nâng cao (Augmentation Enabled)',
    description: 'Phát hiện đầu độc dữ liệu (poisoning), cảnh báo thay đổi theo thời gian thực và giải trình suy luận.'
  }
] as const;

export const CRITERIA: Criterion[] = [
  // Traditional Alignment (4)
  {
    id: 'c1',
    code: 'TA-1',
    name: 'Quantification',
    category: 'Traditional Alignment',
    categoryVi: 'Chuẩn hóa truyền thống',
    descriptionVi: 'Định lượng khối lượng, tần suất và cấu trúc dữ liệu để lập kế hoạch tài nguyên tính toán.',
    significance: 'Đảm bảo khả năng dự báo chi phí hạ tầng và dung lượng lưu trữ cho các tác vụ AI.'
  },
  {
    id: 'c2',
    code: 'TA-2',
    name: 'Observability Metrics',
    category: 'Traditional Alignment',
    categoryVi: 'Chuẩn hóa truyền thống',
    descriptionVi: 'Chỉ số đo lường khả năng quan sát (Data Observability), giám sát pipeline và độ trễ dữ liệu.',
    significance: 'Phát hiện sớm lỗi luồng dữ liệu trước khi ảnh hưởng đến mô hình dự báo tài chính.'
  },
  {
    id: 'c3',
    code: 'TA-3',
    name: 'Consistent Content',
    category: 'Traditional Alignment',
    categoryVi: 'Chuẩn hóa truyền thống',
    descriptionVi: 'Tính nhất quán của dữ liệu xuyên suốt các kênh giao dịch, chi nhánh và hệ thống core.',
    significance: 'Ngăn ngừa bất đồng bộ dữ liệu khách hàng 360 độ giữa core banking và CRM.'
  },
  {
    id: 'c4',
    code: 'TA-4',
    name: 'Verified Source Capture',
    category: 'Traditional Alignment',
    categoryVi: 'Chuẩn hóa truyền thống',
    descriptionVi: 'Thu thập và xác thực danh tính nguồn dữ liệu gốc (Golden Source / System of Record).',
    significance: 'Loại bỏ việc sử dụng dữ liệu trôi nổi chưa qua phê duyệt vào huấn luyện mô hình.'
  },

  // Qualified Usage (9)
  {
    id: 'c5',
    code: 'QU-1',
    name: 'Contextual Quality',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Đánh giá chất lượng dữ liệu phù hợp với ngữ cảnh kinh doanh và thuật toán AI cụ thể.',
    significance: 'Dữ liệu có thể chuẩn cho kế toán nhưng lại thiếu thuộc tính đặc trưng cho mô hình chấm điểm tín dụng.'
  },
  {
    id: 'c6',
    code: 'QU-2',
    name: 'Lineage',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Khả năng truy vết nguồn gốc luồng dữ liệu từ điểm sinh ra qua các bước chuyển đổi đến báo cáo/AI.',
    significance: 'Bắt buộc đối với kiểm toán nội bộ, thanh tra NHNN và giải trình mô hình rủi ro (Basel, IFRS9).'
  },
  {
    id: 'c7',
    code: 'QU-3',
    name: 'Validated Authority',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Xác thực quyền hạn và thẩm quyền của chủ sở hữu dữ liệu (Data Owner / Data Steward).',
    significance: 'Đảm bảo mỗi tập dữ liệu đều có đầu mối trách nhiệm và chính sách phê duyệt rõ ràng.'
  },
  {
    id: 'c8',
    code: 'QU-4',
    name: 'Diversity',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Độ đa dạng của các loại hình dữ liệu: có cấu trúc (SQL), bán cấu trúc (JSON, XML) và phi cấu trúc (PDF, audio).',
    significance: 'Sức mạnh quyết định khả năng triển khai mô hình GenAI / Multimodal trong ngân hàng số.'
  },
  {
    id: 'c9',
    code: 'QU-5',
    name: 'SLA Performance',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Cam kết thời gian phản hồi và độ sẵn sàng dữ liệu cho các truy vấn thời gian thực (Real-time SLA).',
    significance: 'Phục vụ chấm điểm gian lận thẻ tín dụng (Fraud Detection) dưới 50ms khi quẹt thẻ.'
  },
  {
    id: 'c10',
    code: 'QU-6',
    name: 'Variable Access Rights',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Phân quyền truy cập động theo vai trò (RBAC), theo thuộc tính (ABAC) và theo ngữ cảnh truy vấn.',
    significance: 'Bảo vệ thông tin tài khoản và số dư theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.'
  },
  {
    id: 'c11',
    code: 'QU-7',
    name: 'Get Multi-content Metadata Connected (RAG)',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Liên kết metadata giữa nhiều nguồn văn bản, tài liệu và bảng số liệu cho kiến trúc RAG.',
    significance: 'Cốt lõi để AI Agents trả lời nghiệp vụ ngân hàng dựa trên văn bản quy trình và số dư thực tế.'
  },
  {
    id: 'c12',
    code: 'QU-8',
    name: 'Semantic Context Linked to KG',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Liên kết ngữ nghĩa dữ liệu với Đồ thị tri thức doanh nghiệp (Enterprise Knowledge Graph).',
    significance: 'Cho phép AI hiểu mối quan hệ thực thể phức tạp (chủ sở hữu hưởng lợi, tập đoàn mẹ - con).'
  },
  {
    id: 'c13',
    code: 'QU-9',
    name: 'Use-Case Commonality',
    category: 'Qualified Usage',
    categoryVi: 'Sẵn sàng khai thác',
    descriptionVi: 'Tái sử dụng các đặc trưng (features) và tập dữ liệu qua nhiều bài toán AI khác nhau.',
    significance: 'Tránh việc mỗi đơn vị kinh doanh lại xây lại dữ liệu khách hàng từ đầu, tiết kiệm chi phí.'
  },

  // Certified for Production (8)
  {
    id: 'c14',
    code: 'CP-1',
    name: 'Versioning',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Quản lý phiên bản dữ liệu (Time-travel / Data Versioning) tại từng thời điểm huấn luyện.',
    significance: 'Tái lập chính xác tập dữ liệu đã dùng để huấn luyện mô hình khi thanh tra kiểm toán yêu cầu.'
  },
  {
    id: 'c15',
    code: 'CP-2',
    name: 'Training to Production Data Verification',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Kiểm chứng độ tương đồng và tính trôi lệch (Data Drift) giữa dữ liệu train và dữ liệu thực tế chạy live.',
    significance: 'Cảnh báo khi hành vi giao dịch khách hàng thay đổi đột ngột khiến mô hình giảm độ chính xác.'
  },
  {
    id: 'c16',
    code: 'CP-3',
    name: 'Risk Compliance',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Đánh giá và kiểm soát rủi ro dữ liệu theo chuẩn quản trị rủi ro công nghệ ngân hàng.',
    significance: 'Đáp ứng Thông tư 09/2020/TT-NHNN và Thông tư 50/2024/TT-NHNN về an toàn thông tin ngành ngân hàng.'
  },
  {
    id: 'c17',
    code: 'CP-4',
    name: 'Regulatory Compliance',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Tuân thủ các đạo luật quản lý AI và dữ liệu: EU AI Act, NIST AI RMF, Basel II/III, GDPR.',
    significance: 'Yêu cầu pháp lý bắt buộc khi ngân hàng công bố các sản phẩm AI ra thị trường.'
  },
  {
    id: 'c18',
    code: 'CP-5',
    name: 'AI Use-Case to Technique Alignment',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Khớp nối kỹ thuật xử lý dữ liệu với bản chất thuật toán (Supervised, Unsupervised, LLM, Agentic).',
    significance: 'Tối ưu hóa pipeline cho từng họ mô hình thay vì áp dụng một cách cứng nhắc.'
  },
  {
    id: 'c19',
    code: 'CP-6',
    name: 'Ethical Exposure Risk',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Đánh giá rủi ro thiên vị đạo đức (Bias, Fairness) và bảo vệ dữ liệu nhạy cảm.',
    significance: 'Tránh việc thuật toán từ chối cho vay dựa trên định kiến giới tính, vùng miền hoặc dân tộc.'
  },
  {
    id: 'c20',
    code: 'CP-7',
    name: 'Data Share Logs',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Ghi nhận toàn bộ nhật ký chia sẻ, truy xuất dữ liệu nội bộ và với đối tác liên kết bên ngoài.',
    significance: 'Bằng chứng bất khả chối bỏ trong các cuộc điều tra an ninh mạng và lộ lọt thông tin.'
  },
  {
    id: 'c21',
    code: 'CP-8',
    name: 'Observability of Content Use Cases',
    category: 'Certified for Production',
    categoryVi: 'Chứng nhận Production',
    descriptionVi: 'Khả năng quan sát cách thức dữ liệu được tiêu thụ bởi các tác tử AI và người dùng cuối.',
    significance: 'Nhận diện các tập dữ liệu quan trọng nhất và các dữ liệu rác không còn giá trị sử dụng.'
  },

  // Augmentation Enabled (5)
  {
    id: 'c22',
    code: 'AE-1',
    name: 'Regression Testing (Poisoning)',
    category: 'Augmentation Enabled',
    categoryVi: 'Tự động hóa nâng cao',
    descriptionVi: 'Kiểm thử hồi quy phát hiện tấn công đầu độc dữ liệu (Data Poisoning) và chèn mã độc vào vector/tập huấn luyện.',
    significance: 'Bảo vệ mô hình AI ngân hàng trước các hành vi thao túng dữ liệu từ bên ngoài.'
  },
  {
    id: 'c23',
    code: 'AE-2',
    name: 'Continuous Profiling & Analytics',
    category: 'Augmentation Enabled',
    categoryVi: 'Tự động hóa nâng cao',
    descriptionVi: 'Tự động trích xuất hồ sơ dữ liệu (data profiling) liên tục bằng thuật toán học máy.',
    significance: 'Tự động phát hiện bất thường về phân phối dữ liệu giao dịch 24/7 mà không cần viết SQL thủ công.'
  },
  {
    id: 'c24',
    code: 'AE-3',
    name: 'Change Recognition & Alerting',
    category: 'Augmentation Enabled',
    categoryVi: 'Tự động hóa nâng cao',
    descriptionVi: 'Nhận diện thay đổi schema, metadata và phân phối dữ liệu để tự động cảnh báo luồng hạ nguồn.',
    significance: 'Ngăn ngừa sự cố gãy pipeline báo cáo tài chính khi bảng core banking thay đổi cấu trúc.'
  },
  {
    id: 'c25',
    code: 'AE-4',
    name: 'Explainable Inferred Calculations',
    category: 'Augmentation Enabled',
    categoryVi: 'Tự động hóa nâng cao',
    descriptionVi: 'Khả năng giải trình các phép tính và giá trị được AI tự động suy luận hoặc gán nhãn.',
    significance: 'Cung cấp cơ sở lý luận rõ ràng cho kiểm toán khi AI tự động điều chỉnh hạn mức tín dụng.'
  },
  {
    id: 'c26',
    code: 'AE-5',
    name: 'Presumed Reuse of Derivations',
    category: 'Augmentation Enabled',
    categoryVi: 'Tự động hóa nâng cao',
    descriptionVi: 'Tự động nhận diện và tái sử dụng các bảng tính phái sinh giữa các phòng ban.',
    significance: 'Tránh việc bộ phận Rủi ro và bộ phận Khách hàng Cá nhân tính trùng một chỉ số tín nhiệm.'
  }
];
