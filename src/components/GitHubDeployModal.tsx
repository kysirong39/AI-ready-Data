import React, { useState } from 'react';
import { GitBranch, Copy, Check, ExternalLink, Terminal, Globe, X, Download, ShieldCheck } from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({
  isOpen,
  onClose,
  userEmail = 'kysirong39@gmail.com'
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [githubUsername, setGithubUsername] = useState('kysirong39');
  const [repoName, setRepoName] = useState('ai-ready-data-fabric');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const gitCommands = `# Bước 1: Mở terminal tại thư mục mã nguồn dự án
git init
git config user.name "${githubUsername}"
git config user.email "${userEmail}"
git add .
git commit -m "feat: Triển khai web so sánh đánh giá các giải pháp AI-Ready Data Fabric 2025-2026"
git branch -M main

# Bước 2: Thêm remote repo trên GitHub của bạn
git remote add origin https://github.com/${githubUsername}/${repoName}.git

# Bước 3: Đẩy toàn bộ mã nguồn lên nhánh main
git push -u origin main`;

  const ghCliCommand = `gh repo create ${githubUsername}/${repoName} --public --source=. --remote=origin --push`;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-300">
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display">
                Triển khai lên GitHub &amp; Kích hoạt GitHub Pages
              </h3>
              <p className="text-xs text-neutral-500">
                Hướng dẫn đẩy toàn bộ mã nguồn ứng dụng lên tài khoản GitHub của bạn ({userEmail})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 text-xs text-neutral-700">
          {/* Custom Repo Configuration */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
            <span className="font-bold text-neutral-900 block text-sm">
              Thông tin cấu hình Repository GitHub của bạn:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                  GitHub Username:
                </label>
                <input
                  type="text"
                  value={githubUsername}
                  onChange={(e) => setGithubUsername(e.target.value.trim())}
                  className="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none font-mono"
                  placeholder="kysirong39"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                  Tên Repository:
                </label>
                <input
                  type="text"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value.trim())}
                  className="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none font-mono"
                  placeholder="ai-ready-data-fabric"
                />
              </div>
            </div>
            <div className="text-[11px] text-neutral-500">
              Đường dẫn repository đích:{' '}
              <code className="text-blue-600 font-mono font-medium">
                https://github.com/{githubUsername}/{repoName}
              </code>
            </div>
          </div>

          {/* Option 1: Git Bash / Terminal */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                Cách 1: Chạy lệnh Git trong Terminal / Command Prompt
              </span>
              <button
                onClick={() => copyToClipboard(gitCommands, 1)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-neutral-100 hover:bg-neutral-200 rounded border border-neutral-300 text-neutral-800 transition-colors cursor-pointer"
              >
                {copiedIndex === 1 ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Sao chép lệnh</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 bg-neutral-950 text-neutral-100 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed border border-neutral-800 custom-scrollbar">
              {gitCommands}
            </pre>
          </div>

          {/* Option 2: GitHub CLI */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-600" />
                Cách 2: Sử dụng GitHub CLI (Tự động tạo Repo và Push)
              </span>
              <button
                onClick={() => copyToClipboard(ghCliCommand, 2)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-neutral-100 hover:bg-neutral-200 rounded border border-neutral-300 text-neutral-800 transition-colors cursor-pointer"
              >
                {copiedIndex === 2 ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Sao chép lệnh</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 bg-neutral-950 text-neutral-100 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed border border-neutral-800">
              {ghCliCommand}
            </pre>
          </div>

          {/* Pre-configured CI/CD Workflow */}
          <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-900">
              <Globe className="w-4 h-4 text-teal-700" />
              Tự động hóa triển khai GitHub Pages (Đã sẵn sàng!)
            </div>
            <p className="text-neutral-700 leading-relaxed text-xs">
              Dự án đã được tích hợp sẵn tệp workflow{' '}
              <code className="bg-teal-100/80 px-1 py-0.5 rounded font-mono text-[11px] text-teal-900">
                .github/workflows/deploy.yml
              </code>
              . Ngay khi bạn chạy lệnh <code className="font-mono">git push</code>, GitHub Actions sẽ tự động biên dịch và phát hành website trực tuyến miễn phí tại:
            </p>
            <div className="p-2.5 bg-white rounded-lg border border-teal-200 font-mono text-teal-800 font-semibold text-xs">
              https://{githubUsername}.github.io/{repoName}/
            </div>
            <div className="text-[11px] text-teal-900">
              * Chỉ cần vào <strong>Settings</strong> → <strong>Pages</strong> trên GitHub, tại mục <strong>Source</strong> chọn <strong>GitHub Actions</strong>.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-between items-center text-xs">
          <span className="text-neutral-500">Mã nguồn sẵn sàng chuẩn Git</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
