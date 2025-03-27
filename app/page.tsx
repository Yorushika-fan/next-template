export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-3xl">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Next.js 项目模板
        </h1>
        <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-300">
          一个现代化的 Next.js 项目启动模板，集成了常用的开发工具和最佳实践。
        </p>

        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">集成的库和功能</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-medium mb-2">样式解决方案</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                <li>Tailwind CSS</li>
                <li>CSS Modules</li>
                <li>响应式设计</li>
                <li>暗黑模式支持</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-medium mb-2">开发工具</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                <li>TypeScript</li>
                <li>ESLint</li>
                <li>Prettier</li>
                <li>Husky</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-medium mb-2">性能优化</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                <li>图片优化</li>
                <li>字体优化</li>
                <li>代码分割</li>
                <li>缓存策略</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-medium mb-2">开发体验</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                <li>热更新</li>
                <li>路径别名</li>
                <li>环境变量</li>
                <li>类型检查</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">快速开始</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>克隆项目并安装依赖：
              <code className="block mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                git clone [repository-url]<br />
                cd [project-name]<br />
                npm install
              </code>
            </li>
            <li>启动开发服务器：
              <code className="block mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                npm run dev
              </code>
            </li>
            <li>开始开发！编辑 <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">app/page.tsx</code> 查看实时更新。</li>
          </ol>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/yourusername/your-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 仓库
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看文档
          </a>
        </div>
      </main>
      <footer className="row-start-3 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Project Name. All rights reserved.
      </footer>
    </div>
  );
}
