import { DecisionQuestion } from '../types';

export const DECISION_QUESTIONS: DecisionQuestion[] = [
  {
    id: 'q1',
    number: '01',
    title: 'Hạ tầng dữ liệu hiện tại của tổ chức bạn trông như thế nào?',
    description: 'Quy mô, vị trí địa lý của cơ sở dữ liệu và mức độ phân tán giữa On-premises và Cloud.',
    options: [
      {
        key: 'a',
        text: 'Chủ yếu On-prem, nhiều hệ thống legacy / mainframe (Oracle, DB2, Teradata, SAP, Core Banking)',
        recommendations: ['Denodo', 'IBM watsonx.data'],
        rationale: 'Denodo (ảo hóa truy vấn tại nguồn no-copy) và IBM watsonx.data (hỗ trợ hybrid và mainframe) là lựa chọn tối ưu, không ép buộc phải di chuyển dữ liệu khỏi on-prem.'
      },
      {
        key: 'b',
        text: 'Đang chuyển đổi Cloud, vừa có On-prem vừa có Cloud (mô hình Hybrid Cloud)',
        recommendations: ['Microsoft Fabric', 'Informatica IDMC', 'IBM watsonx.data'],
        rationale: 'Microsoft Fabric (nếu dùng Azure) hoặc Informatica IDMC / IBM watsonx cung cấp lộ trình chuyển dịch từng bước với cầu nối metadata chặt chẽ.'
      },
      {
        key: 'c',
        text: 'Cloud-native hoàn toàn, đã dùng AWS / Azure / GCP rộng rãi',
        recommendations: ['Snowflake', 'Databricks', 'Google BigQuery'],
        rationale: 'Các nền tảng thuần đám mây khai thác tối đa tính co giãn, kiến trúc serverless và các dịch vụ AI thế hệ mới (Cortex, Mosaic AI, Vertex AI).'
      }
    ]
  },
  {
    id: 'q2',
    number: '02',
    title: 'Ưu tiên chiến lược AI của tổ chức trong 2–3 năm tới là gì?',
    description: 'Trọng tâm triển khai công nghệ AI và mức độ can thiệp vào vòng đời mô hình học máy.',
    options: [
      {
        key: 'a',
        text: 'AI/ML chuyên sâu: xây dựng model riêng, fine-tuning LLM, MLOps, scoring rủi ro',
        recommendations: ['Databricks', 'Snowflake'],
        rationale: 'Databricks là nền tảng số 1 về ML/AI với Mosaic AI, Lakeflow và Unity AI Gateway. Snowflake Cortex là giải pháp đứng thứ hai cho các đội ngũ thiên về SQL.'
      },
      {
        key: 'b',
        text: 'GenAI ứng dụng: AI Copilots, trợ lý ảo nhân viên, RAG trên kho tài liệu nội bộ',
        recommendations: ['Microsoft Fabric', 'Snowflake', 'IBM watsonx.data'],
        rationale: 'Microsoft Fabric kết hợp Azure AI Foundry và Copilot mang lại khả năng ra mắt nhanh nhất. Snowflake Cortex Search & RAG cung cấp bảo mật dữ liệu cấp doanh nghiệp.'
      },
      {
        key: 'c',
        text: 'Analytics & BI nâng cao: Báo cáo quản trị, Self-service BI, Predictive Analytics',
        recommendations: ['Microsoft Fabric', 'Google BigQuery', 'Denodo'],
        rationale: 'Microsoft Fabric tích hợp sẵn Power BI Direct Lake; BigQuery kết hợp Looker; Denodo cung cấp Semantic Layer nhanh chóng cho mọi công cụ BI hiện có.'
      }
    ]
  },
  {
    id: 'q3',
    number: '03',
    title: 'Mức độ yêu cầu Compliance và Quản trị dữ liệu của tổ chức?',
    description: 'Áp lực tuân thủ từ các cơ quan quản lý (NHNN, Basel, GDPR, EU AI Act, Nghị định 13).',
    options: [
      {
        key: 'a',
        text: 'Rất cao: Ngân hàng, Bảo hiểm, Y tế — chịu kiểm toán nội bộ và thanh tra thường xuyên',
        recommendations: ['Informatica IDMC', 'IBM watsonx.data', 'Denodo'],
        rationale: 'Informatica IDMC sở hữu CLAIRE AI cho lineage và AI Governance Inventory mạnh nhất. IBM watsonx.governance + Guardium đáp ứng tối đa tiêu chuẩn an toàn ngân hàng.'
      },
      {
        key: 'b',
        text: 'Trung bình: Có chính sách Data Governance chung nhưng không thuộc ngành kiểm soát gắt gao',
        recommendations: ['Databricks', 'Snowflake'],
        rationale: 'Unity Catalog của Databricks hoặc Horizon Catalog của Snowflake cung cấp governance tích hợp sẵn ở mức rất tốt mà không cần mua thêm giải pháp ngoài.'
      },
      {
        key: 'c',
        text: 'Đang xây dựng: Startup hoặc doanh nghiệp đang thiết lập khung quản trị dữ liệu ban đầu',
        recommendations: ['Databricks', 'Snowflake', 'Microsoft Fabric'],
        rationale: 'Nên bắt đầu với catalog tích hợp sẵn của nền tảng Lakehouse để giảm thiểu độ phức tạp và chi phí vận hành ban đầu.'
      }
    ]
  },
  {
    id: 'q4',
    number: '04',
    title: 'Bạn có nhu cầu chia sẻ dữ liệu với đối tác bên ngoài không?',
    description: 'Chia sẻ dữ liệu thời gian thực với Fintech, sàn TMĐT, cơ quan thuế, bảo hiểm qua Open Banking.',
    options: [
      {
        key: 'a',
        text: 'Có, thường xuyên — chia sẻ với Fintech, đối tác bán lẻ theo thời gian thực (Open Data / Open API)',
        recommendations: ['Snowflake', 'Databricks'],
        rationale: 'Snowflake Data Sharing và Data Clean Rooms dẫn đầu thị trường về khả năng chia sẻ live data không copy và không để lộ dữ liệu thô nhạy cảm.'
      },
      {
        key: 'b',
        text: 'Thỉnh thoảng — Báo cáo định kỳ hoặc chia sẻ file mã hóa qua giao thức an toàn',
        recommendations: ['Microsoft Fabric', 'Databricks'],
        rationale: 'Giao thức Delta Sharing mở của Databricks hoặc OneLake sharing đáp ứng trọn vẹn nhu cầu liên kết đối tác có kiểm soát.'
      },
      {
        key: 'c',
        text: 'Không — Toàn bộ dữ liệu chỉ khai thác và luân chuyển nội bộ',
        recommendations: ['Denodo', 'IBM watsonx.data'],
        rationale: 'Tập trung nguồn lực vào việc tối ưu hóa hiệu năng truy vấn nội bộ, quản trị và liên kết dữ liệu phân tán.'
      }
    ]
  },
  {
    id: 'q5',
    number: '05',
    title: 'Hệ sinh thái công nghệ chủ đạo hiện tại của tổ chức là gì?',
    description: 'Nền tảng hạ tầng mà tổ chức đang đầu tư giấy phép và đào tạo nhân sự nhiều nhất.',
    options: [
      {
        key: 'a',
        text: 'Hệ sinh thái Microsoft: Azure, Microsoft 365, Power Platform, SQL Server',
        recommendations: ['Microsoft Fabric'],
        rationale: 'Microsoft Fabric tận dụng tối đa hạ tầng sẵn có, tiết kiệm chi phí bản quyền và nhân sự không cần học lại từ đầu.'
      },
      {
        key: 'b',
        text: 'Google Cloud Platform (GCP): BigQuery, Vertex AI, Google Workspace',
        recommendations: ['Google BigQuery'],
        rationale: 'Hệ sinh thái BigQuery + Vertex AI + Gemini mang lại sự tích hợp liền mạch và hiệu năng vượt trội trên hạ tầng GCP.'
      },
      {
        key: 'c',
        text: 'AWS hoặc Multi-cloud: Muốn tránh phụ thuộc hoàn toàn vào một Cloud Hyperscaler duy nhất',
        recommendations: ['Snowflake', 'Databricks'],
        rationale: 'Cả Snowflake và Databricks đều hỗ trợ đa đám mây (AWS, Azure, GCP) và các định dạng mở như Iceberg để giảm rủi ro lock-in.'
      },
      {
        key: 'd',
        text: 'Chưa dùng Cloud lớn: Chủ yếu On-premise, đang bắt đầu chiến lược hiện đại hóa dữ liệu',
        recommendations: ['Denodo', 'IBM watsonx.data'],
        rationale: 'Bộ đôi Denodo và IBM watsonx đóng vai trò cầu nối hoàn hảo: ảo hóa và quản trị trước, dịch chuyển dần lên cloud sau mà không gây xáo trộn hệ thống lõi.'
      }
    ]
  }
];
