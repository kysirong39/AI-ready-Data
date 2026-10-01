import { Vendor } from '../types';

export const VENDORS: Vendor[] = [
  {
    id: 'snowflake',
    name: 'Snowflake',
    subtitle: 'AI Data Cloud · Horizon Catalog',
    gartnerTier: 'Leader',
    gartnerRecognition: 'Leader · Gartner Cloud DBMS MQ 2025',
    architectureType: 'Unified lakehouse',
    description: 'Horizon Catalog là AI catalog phổ quát - đảm bảo tuân thủ cho AI agents tại runtime, không chỉ các truy vấn của người dùng. Tại Summit 2026, ra mắt Horizon Context đảm bảo mọi người dùng, tool và AI agent hoạt động từ cùng một ngữ cảnh nghiệp vụ. Hỗ trợ Apache Iceberg + Polaris cho giảm thiểu lock-in. Hơn 13.900 khách hàng bao gồm Merck, Affirm, Samsung Ads.',
    tags: ['Data sharing', 'Multi-cloud', 'Cortex AI', 'Open format', 'Iceberg', 'Horizon Context'],
    links: [
      { label: 'Horizon Catalog', url: 'https://www.snowflake.com/en/product/features/horizon/' },
      { label: 'Summit 2026 Release', url: 'https://www.snowflake.com/en/news/press-releases/snowflake-advances-trusted-ai-with-snowflake-horizon-catalog-centralizing-governance-context-and-security-across-the-enterprise/' }
    ],
    marketShare: '~21% (Data Warehousing - 6sense 2026)',
    ratings: {
      c1: 'p', c2: 'f', c3: 'p', c4: 'p', c5: 'f', c6: 'f', c7: 'p', c8: 'n',
      c9: 'p', c10: 'f', c11: 'f', c12: 'f', c13: 'p', c14: 'f', c15: 'f', c16: 'f',
      c17: 'p', c18: 'p', c19: 'p', c20: 'f', c21: 'p', c22: 'p', c23: 'f', c24: 'f',
      c25: 'f', c26: 'n'
    },
    lockinScore: 'mid',
    lockinLabel: 'TRUNG BÌNH',
    mainConstraint: 'Iceberg + Polaris giảm lock-in ở tầng lưu trữ, nhưng Horizon Catalog, Cortex AI và mô hình tính phí theo credit là đặc thù.',
    abInitioCompatibility: 'Trung bình. Cần đưa dữ liệu vào Snowflake mới khai thác hết giá trị — ngược với thực tế phân tán và yêu cầu dữ liệu tại chỗ của ngân hàng.',
    exitCost: 'Trung bình — Iceberg giúp thoát dữ liệu, nhưng logic và governance phải làm lại.',
    bestFitScenario: 'Bán lẻ, E-commerce, Data Sharing live với đối tác & Fintech bên ngoài, Data Clean Rooms.'
  },
  {
    id: 'databricks',
    name: 'Databricks',
    subtitle: 'Intelligence Platform · Unity Catalog',
    gartnerTier: 'Leader',
    gartnerRecognition: 'Leader · Gartner DS&ML MQ 2025 & 2026',
    architectureType: 'Unified lakehouse',
    description: 'Unity AI Gateway (Data+AI Summit 2026) mở rộng khả năng quản trị sang các tương tác giữa models, agents, MCP services và tools. Hơn 14.000 tổ chức quản lý data + AI trên Unity Catalog. Lakeflow Spark Declarative Pipelines cho batch và streaming. Unity Catalog Metrics — business KPIs là first-class assets.',
    tags: ['ML/AI-first', 'Open source', 'Lakehouse', 'Agentic', 'Apache Spark', 'Unity AI Gateway'],
    links: [
      { label: 'Unity Catalog 2026', url: 'https://www.databricks.com/blog/whats-new-unity-catalog-data-ai-summit-2026' },
      { label: 'AI Gateway Announcement', url: 'https://www.databricks.com/blog/ai-governance-data-ai-summit-2026-whats-new-unity-ai-gateway' }
    ],
    marketShare: '~18% (Lakehouse/ML Platforms)',
    ratings: {
      c1: 'p', c2: 'f', c3: 'f', c4: 'p', c5: 'f', c6: 'f', c7: 'p', c8: 'n',
      c9: 'p', c10: 'f', c11: 'f', c12: 'f', c13: 'p', c14: 'f', c15: 'f', c16: 'f',
      c17: 'f', c18: 'f', c19: 'f', c20: 'f', c21: 'p', c22: 'f', c23: 'f', c24: 'f',
      c25: 'f', c26: 'n'
    },
    lockinScore: 'mid',
    lockinLabel: 'TRUNG BÌNH',
    mainConstraint: 'Delta Lake + Unity Catalog. Đã mở nguồn Unity Catalog và hỗ trợ Iceberg, nhưng notebook, job và Photon engine gắn chặt nền tảng.',
    abInitioCompatibility: 'Trung bình. Đọc được dữ liệu phân tán, nhưng Unity Catalog sẽ cạnh tranh vai trò catalog với Metadata Hub; cần thiết kế liên thông metadata hai chiều ngay từ đầu.',
    exitCost: 'Trung bình–cao — dữ liệu port được, workload tính toán thì không.',
    bestFitScenario: 'Tổ chức tập trung mạnh vào AI/ML chuyên sâu, huấn luyện mô hình riêng, chấm điểm tín dụng phức tạp, phát hiện gian lận.'
  },
  {
    id: 'microsoft_fabric',
    name: 'Microsoft Fabric',
    subtitle: 'OneLake · Copilot · Azure AI Foundry',
    gartnerTier: 'Strong',
    gartnerRecognition: 'Leader · Data Integration Gartner Magic Quadrant',
    architectureType: 'Unified lakehouse',
    description: 'OneLake là AI-ready data lake đơn, hỗ trợ multi-cloud đến S3 và GCS không cần sao chép dữ liệu. Data Agents có khả năng hiểu và lý luận trên dữ liệu — không chỉ truy vấn. Build 2026: GPU Data Warehouse cho ML inference trực tiếp, Azure HorizonDB cho các tác vụ agentic. Mua lại Osmos (2026) để tự động hóa data engineering.',
    tags: ['Azure-native', 'All-in-one SaaS', 'Power BI', 'Agent-ready', 'Copilot', 'OneLake'],
    links: [
      { label: 'Microsoft Build 2026', url: 'https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/' },
      { label: 'Gartner MQ Leader', url: 'https://blog.fabric.microsoft.com/en-us/blog/microsoft-recognized-as-a-leader-in-the-2025-gartner-magic-quadrant-for-data-integration-tools-2' }
    ],
    marketShare: 'Tăng trưởng nhanh nhất trong hệ sinh thái Microsoft 365/Azure',
    ratings: {
      c1: 'p', c2: 'p', c3: 'f', c4: 'p', c5: 'f', c6: 'f', c7: 'f', c8: 'n',
      c9: 'n', c10: 'f', c11: 'p', c12: 'f', c13: 'p', c14: 'p', c15: 'n', c16: 'f',
      c17: 'f', c18: 'n', c19: 'n', c20: 'f', c21: 'p', c22: 'n', c23: 'p', c24: 'p',
      c25: 'n', c26: 'n'
    },
    lockinScore: 'high',
    lockinLabel: 'CAO',
    mainConstraint: 'SaaS all-in-one: OneLake, Power BI, Copilot, Azure AI Foundry đóng gói cùng nhau. Giá trị lớn nhất chỉ hiện ra khi dùng trọn bộ.',
    abInitioCompatibility: 'Thấp–trung bình. Shortcut đọc được nguồn ngoài, nhưng mô hình vận hành hướng tới hợp nhất về OneLake và thay thế luôn lớp analytics — chồng trực tiếp lên Analytic Workbench.',
    exitCost: 'Rất cao — rời Fabric gần như là rời cả Azure data estate.',
    bestFitScenario: 'Doanh nghiệp đã đầu tư 100% vào hệ sinh thái Microsoft (Azure, Office 365, Power BI) và cần triển khai Copilot nhanh chóng.'
  },
  {
    id: 'informatica',
    name: 'Informatica IDMC',
    subtitle: 'CLAIRE AI · Active Metadata Engine',
    gartnerTier: 'Leader',
    gartnerRecognition: 'Leader · Metadata MQ 2025 & D&A Governance',
    architectureType: 'Integration-led',
    description: 'CLAIRE AI engine là active metadata mạnh nhất thị trường — tự động hóa 70% công sức tích hợp. Fall 2025: CLAIRE Agents autonomous, AI Agent Engineering rút ngắn thời gian xây dựng từ hàng tuần xuống còn vài phút, AI Governance Inventory lưu trữ danh mục các mô hình AI và các phê duyệt liên quan. Unstructured Data Governance cho GenAI. 80+ Fortune 100 là khách hàng.',
    tags: ['Active Metadata', 'Data quality', 'MDM', 'Compliance', 'Agentic', 'CLAIRE AI'],
    links: [
      { label: 'IDMC Fall 2025 Release', url: 'https://www.informatica.com/about-us/news/news-releases/2025/10/20251029-informatica-announces-fall-2025-release-with-latest-innovations-to-intelligent-data-management-cloud.html' },
      { label: 'Gartner MQ Leader', url: 'https://www.informatica.com/about-us/news/news-releases/2025/11/20251121-informatica-named-a-leader-in-the-2025-gartner-magic-quadrant-for-metadata-management-solutions-report.html' }
    ],
    marketShare: 'Dẫn đầu phân khúc Data Integration & Metadata Governance toàn cầu',
    ratings: {
      c1: 'f', c2: 'f', c3: 'f', c4: 'f', c5: 'f', c6: 'f', c7: 'f', c8: 'p',
      c9: 'p', c10: 'f', c11: 'p', c12: 'f', c13: 'p', c14: 'p', c15: 'p', c16: 'f',
      c17: 'f', c18: 'p', c19: 'f', c20: 'p', c21: 'p', c22: 'p', c23: 'f', c24: 'p',
      c25: 'p', c26: 'n'
    },
    lockinScore: 'mid',
    lockinLabel: 'TRUNG BÌNH',
    mainConstraint: 'CLAIRE là metadata engine độc quyền; mapping và data quality rule ở định dạng riêng, khó port sang hệ thống khác.',
    abInitioCompatibility: 'Trung bình — xung đột vai trò. IDMC muốn làm trung tâm metadata, đúng chỗ Ab Initio Metadata Hub đang đứng. Chỉ nên chọn nếu chấp nhận thay thế Metadata Hub, không nên chạy song song lâu dài.',
    exitCost: 'Cao — toàn bộ mapping, lineage và DQ rule phải xây lại.',
    bestFitScenario: 'Tổ chức tài chính yêu cầu quản trị siêu nghiêm ngặt (Master Data Management, Data Quality, Lineage cho NHNN & Basel).'
  },
  {
    id: 'denodo',
    name: 'Denodo Platform',
    subtitle: 'Logical Data Fabric · Zero Data Movement',
    gartnerTier: 'Strong',
    gartnerRecognition: 'Leader · Data Integration Gartner Magic Quadrant (6 năm liên tiếp)',
    architectureType: 'Virtualization-first',
    description: 'Tiên phong no-copy federation — truy vấn tại nguồn, không di chuyển dữ liệu vật lý. Hỗ trợ đồng thời xử lý lô, ảo hóa, xử lý thời gian thực và hiện thực hóa. Semantic layer cho phép từ ý tưởng đến kiểm thử chỉ mất vài phút. Hiệu suất 10× so với lakehouse đơn thuần. Mạnh nhất cho hybrid và legacy on-prem (ngân hàng, telco).',
    tags: ['No-copy', 'Hybrid/On-prem', 'Semantic layer', 'Data products', 'Logical fabric', 'Virtualization'],
    links: [
      { label: 'Data Fabric Guide', url: 'https://www.denodo.com/en/solutions/by-technology/data-fabric' },
      { label: 'Gartner Leader Announcement', url: 'https://www.denodo.com/en/press-release/2025-12-11/denodo-named-leader-2025-gartnerr-magic-quadranttm-data-integration-tools-six-consecutive-years' }
    ],
    marketShare: 'Nền tảng số 1 về Logical Data Fabric & Data Virtualization',
    ratings: {
      c1: 'p', c2: 'p', c3: 'f', c4: 'n', c5: 'f', c6: 'f', c7: 'p', c8: 'n',
      c9: 'p', c10: 'f', c11: 'f', c12: 'f', c13: 'p', c14: 'p', c15: 'n', c16: 'p',
      c17: 'p', c18: 'n', c19: 'n', c20: 'f', c21: 'p', c22: 'n', c23: 'p', c24: 'n',
      c25: 'p', c26: 'n'
    },
    lockinScore: 'low',
    lockinLabel: 'THẤP',
    mainConstraint: 'Không giữ dữ liệu (no-copy). Ràng buộc nằm ở view/semantic model viết bằng VQL — tài sản logic, không phải dữ liệu vật lý.',
    abInitioCompatibility: 'Cao. Là lớp truy cập ảo phủ lên nguồn phân tán hiện có; đẩy được lineage sang Metadata Hub và phục vụ dữ liệu cho Analytic Workbench qua JDBC/ODBC/REST mà không đụng vào hai hệ thống đó.',
    exitCost: 'Thấp — dữ liệu vẫn nằm nguyên tại nguồn, chỉ cần dựng lại lớp view.',
    bestFitScenario: 'Ngân hàng có nhiều hệ thống Core Banking, thẻ, CRM on-prem phân tán; không muốn copy dữ liệu, bảo tồn Ab Initio Metadata Hub.'
  },
  {
    id: 'ibm_watsonx',
    name: 'IBM watsonx (Data Fabric)',
    subtitle: 'Hybrid by design · Overlay, không rip-and-replace',
    gartnerTier: 'Leader',
    gartnerRecognition: 'Leader · Data Integration MQ 2025 (năm thứ 20) + Metadata + D&A Governance',
    architectureType: 'Integration-led',
    description: 'IBM định vị data fabric là lớp phủ lên trên hệ thống sẵn có để kết nối các nguồn dữ liệu phân tán, chuẩn hóa quyền truy cập và nhúng quản trị dữ liệu — không yêu cầu thay thế toàn bộ nền tảng. Kiến trúc được thiết kế theo hướng lai, có thể chạy on-prem hoặc trên bất kỳ nền tảng đám mây nào; tích hợp qua xử lý theo lô, theo luồng thời gian thực, CDC và các pipeline ảo hóa. Bộ sản phẩm watsonx.data, watsonx.governance, Guardium và Confluent.',
    tags: ['Hybrid-first', 'Overlay architecture', 'Regulatory', 'Banking/Gov', 'CDC + streaming', 'Guardium', 'Confluent/Kafka'],
    links: [
      { label: 'IBM Data Fabric Solutions', url: 'https://www.ibm.com/solutions/data-fabric' },
      { label: 'watsonx.data Overview', url: 'https://www.ibm.com/products/watsonx-data' },
      { label: 'Gartner Leader 2025', url: 'https://www.ibm.com/new/announcements/ibm-named-a-leader-in-the-2025-gartner-magic-quadrant-for-data-integration-tools-for-the-20th-consecutive-year' }
    ],
    marketShare: '20 năm liên tiếp Leader Data Integration Tools của Gartner',
    ratings: {
      c1: 'p', c2: 'f', c3: 'f', c4: 'p', c5: 'f', c6: 'f', c7: 'f', c8: 'n',
      c9: 'n', c10: 'f', c11: 'f', c12: 'f', c13: 'p', c14: 'p', c15: 'f', c16: 'f',
      c17: 'f', c18: 'f', c19: 'f', c20: 'p', c21: 'p', c22: 'f', c23: 'f', c24: 'f',
      c25: 'f', c26: 'n'
    },
    lockinScore: 'low-mid',
    lockinLabel: 'THẤP–TRUNG BÌNH',
    mainConstraint: 'Lakehouse mở trên Iceberg, hybrid by design, chủ trương overlay thay vì rip-and-replace. Ràng buộc tăng dần nếu dùng trọn bộ watsonx.governance + Guardium.',
    abInitioCompatibility: 'Cao. Triết lý "phủ lên hệ thống sẵn có" khớp với việc giữ nguyên Metadata Hub. Cần làm rõ ranh giới chức năng với watsonx.data intelligence để tránh trùng lặp đầu tư metadata.',
    exitCost: 'Trung bình — dữ liệu ở định dạng mở, nhưng governance/policy phải dựng lại.',
    bestFitScenario: 'Ngân hàng quốc doanh lớn, môi trường pháp lý khắt khe, hạ tầng lai on-prem/cloud, bảo mật dữ liệu nhạy cảm.'
  },
  {
    id: 'google_bigquery',
    name: 'Google BigQuery',
    subtitle: 'Cloud DBMS · BigLake · Vertex AI',
    gartnerTier: 'Strong',
    gartnerRecognition: 'Leader · Cloud DBMS MQ (6 năm, tầm nhìn xa nhất)',
    architectureType: 'Unified lakehouse',
    description: 'BigLake là lớp fabric hợp nhất dành cho dữ liệu mở, hỗ trợ Apache Iceberg REST Catalog. Kiến trúc không máy chủ (serverless), tích hợp Vertex AI phục vụ các khối lượng công việc GenAI. Trợ lý Gemini AI được tích hợp sẵn trong BigQuery. Được Gartner đánh giá mạnh về tầm nhìn - có vị trí xa nhất về Completeness of Vision trong nhóm Cloud DBMS.',
    tags: ['Serverless', 'Gemini AI', 'Open format', 'BigLake', 'Vertex AI', 'Iceberg REST'],
    links: [
      { label: 'Gartner Cloud DBMS Leader', url: 'https://cloud.google.com/blog/products/data-analytics/a-leader-in-2025-gartner-magic-quadrant-for-cdbms' }
    ],
    marketShare: '~14% (Data Warehousing - 6sense 2026)',
    ratings: {
      c1: 'p', c2: 'f', c3: 'p', c4: 'p', c5: 'f', c6: 'f', c7: 'p', c8: 'n',
      c9: 'p', c10: 'f', c11: 'f', c12: 'f', c13: 'p', c14: 'p', c15: 'p', c16: 'f',
      c17: 'p', c18: 'p', c19: 'p', c20: 'f', c21: 'p', c22: 'p', c23: 'f', c24: 'p',
      c25: 'p', c26: 'n'
    },
    lockinScore: 'mid-high',
    lockinLabel: 'TRUNG BÌNH–CAO',
    mainConstraint: 'Serverless gắn với GCP; BigLake và Iceberg REST Catalog mở một phần, phần còn lại phụ thuộc hệ sinh thái Google.',
    abInitioCompatibility: 'Thấp–trung bình. Là cloud-only, khó phù hợp phần lớn khối lượng dữ liệu on-prem của ngân hàng nếu chưa có chiến lược cloud rõ ràng.',
    exitCost: 'Cao — ràng buộc cả hạ tầng lẫn AI layer (Vertex AI, Gemini).',
    bestFitScenario: 'Doanh nghiệp định hướng Google Cloud, ứng dụng AI/Marketing analytics, tích hợp sâu Google Ads và Vertex AI.'
  },
  {
    id: 'dataiku',
    name: 'Dataiku',
    subtitle: 'Universal AI Platform · Agent Management',
    gartnerTier: 'Leader',
    gartnerRecognition: 'Leader · AI Platforms for DS&ML MQ 2026 (22/06/2026)',
    architectureType: 'Universal AI Orchestration',
    description: 'Được Gartner xếp hạng Leader trong Magic Quadrant for AI Platforms for Data Science and Machine Learning (22/06/2026), được ghi nhận ở cả hai tiêu chí Completeness of Vision và Ability to Execute. Điểm mạnh là một môi trường chung cho nhiều vai trò — phân tích, kỹ sư dữ liệu, data scientists. Bổ sung Agent Management, Cobuild và Reasoning Systems. Không sở hữu lưu trữ/tính toán mà điều phối linh hoạt trên Snowflake, Databricks, BigQuery, SQL on-prem.',
    tags: ['Orchestration layer', 'Low-code + code', 'Agent governance', 'MLOps', 'Platform-agnostic', 'Self-managed option'],
    links: [
      { label: 'Gartner MQ 2026 Leader', url: 'https://www.dataiku.com/blog/dataiku-named-gartner-magic-quadrant-leader-fifth-time' },
      { label: 'Press Release', url: 'https://www.dataiku.com/company/news/dataiku-named-a-5x-leader-by-gartner-in-the-magic-quadrant-for-ai-platforms-dsml' }
    ],
    marketShare: 'Hơn 750 tổ chức lớn (Standard Chartered, Roche, Michelin); 98% willing to recommend',
    ratings: {
      c1: 'p', c2: 'p', c3: 'p', c4: 'p', c5: 'p', c6: 'f', c7: 'n', c8: 'n',
      c9: 'n', c10: 'f', c11: 'f', c12: 'p', c13: 'p', c14: 'f', c15: 'f', c16: 'p',
      c17: 'p', c18: 'p', c19: 'f', c20: 'p', c21: 'p', c22: 'f', c23: 'f', c24: 'f',
      c25: 'p', c26: 'n'
    },
    lockinScore: 'low-mid',
    lockinLabel: 'THẤP–TRUNG BÌNH',
    mainConstraint: 'Không sở hữu storage/compute, chỉ điều phối. Ràng buộc là các visual recipe/flow đặc thù nền tảng.',
    abInitioCompatibility: 'Cao — nhưng chồng lấn. Chạy tốt trên nguồn phân tán và triển khai được self-managed on-prem. Cần cân nhắc: phạm vi của Dataiku trùng đáng kể với Analytic Workbench, dễ thành đầu tư song trùng nếu không phân vai rõ.',
    exitCost: 'Thấp–trung bình — dữ liệu không bị giữ; chi phí chủ yếu là viết lại flow.',
    bestFitScenario: 'Lớp điều phối AI/ML cho tổ chức muốn trao quyền cho cả người dùng nghiệp vụ (low-code) và data scientist (code-first).'
  }
];
