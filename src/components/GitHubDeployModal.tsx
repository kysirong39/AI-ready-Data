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
  const [repoName, setRepoName] = useState('AI-ready-Data');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const gitCommands = `# Bước 1: Mở terminal tại thư mục dự án
git add .
git commit -m "fix: Khắc phục triệt để lỗi 404 main.tsx trên GitHub Pages (thêm docs/ và workflow CI/CD)"
git branch -M main

# Bước 2: Đẩy bản cập nhật lên GitHub
git push -u origin main`;

  const pushGhPagesCommand = `# Đẩy trực tiếp nhánh gh-pages đã build sẵn:
git push -u origin gh-pages`;

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

          {/* Push Commands */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                Lệnh đẩy mã nguồn lên GitHub (Đã bao gồm thư mục /docs biên dịch sẵn)
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

          {/* Cách sửa triệt để lỗi 404 trên GitHub Pages */}
          <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200 space-y-3">
            <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              Cách khắc phục lỗi "Failed to load resource: main.tsx 404" (Chọn 1 trong 2 cách):
            </div>

            <div className="space-y-2 text-xs text-neutral-800">
              <div className="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">Cách 1: Triển khai từ thư mục /docs (Nhanh nhất - Không cần đợi Build)</strong>
                <ol className="list-decimal list-inside space-y-0.5 text-neutral-700 text-[11px]">
                  <li>Vào repo trên GitHub: <strong>Settings</strong> → <strong>Pages</strong>.</li>
                  <li>Mục <strong>Build and deployment</strong> → <strong>Source</strong>: chọn <strong>Deploy from a branch</strong>.</li>
                  <li>Dòng <strong>Branch</strong>: chọn <strong>main</strong>, ô thư mục bên cạnh chọn <strong>/docs</strong> (thay vì <em>/ (root)</em>) rồi bấm <strong>Save</strong>.</li>
                  <li>Đợi 30 giây và tải lại trang, web sẽ hoạt động 100%!</li>
                </ol>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">Cách 2: Triển khai tự động bằng GitHub Actions</strong>
                <ol className="list-decimal list-inside space-y-0.5 text-neutral-700 text-[11px]">
                  <li>Vào repo trên GitHub: <strong>Settings</strong> → <strong>Pages</strong>.</li>
                  <li>Mục <strong>Build and deployment</strong> → <strong>Source</strong>: chọn <strong>GitHub Actions</strong>.</li>
                  <li>Workflow <code className="font-mono text-[10px] bg-neutral-100 px-1">.github/workflows/deploy.yml</code> đã được cấu hình <code className="font-mono text-[10px] bg-neutral-100 px-1">--legacy-peer-deps</code> sẽ tự động build và deploy.</li>
                </ol>
              </div>
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
