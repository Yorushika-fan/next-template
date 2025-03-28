export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex max-w-3xl flex-col items-center gap-[32px] sm:items-start">
        <h1 className="text-center text-4xl font-bold sm:text-left">Next.js 项目模板</h1>
        <p className="text-center text-lg text-gray-600 sm:text-left dark:text-gray-300">
          一个现代化的 Next.js 项目启动模板，集成了常用的开发工具和最佳实践。
        </p>

        <div className="w-full">
          <h2 className="mb-4 text-2xl font-semibold">集成的库和功能</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-2 font-medium">样式解决方案</h3>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>Tailwind CSS</li>
                <li>CSS Modules</li>
                <li>响应式设计</li>
                <li>暗黑模式支持</li>
                <li>PostCSS</li>
                <li>Autoprefixer</li>
                <li>PostCSS Preset Env</li>
                <li>PostCSS Preset CSSnano</li>
                <li>PostCSS Preset CSSnext</li>
                <li>PostCSS Preset CSSnext</li>
                <li>PostCSS Preset CSSnext</li>
                <li>PostCSS Preset CSSnext</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-2 font-medium">开发工具</h3>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>TypeScript</li>
                <li>ESLint</li>
                <li>Prettier</li>
                <li>Husky</li>
              </ul>
            </div>
            <div className="ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md"></div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-2 font-medium">性能优化</h3>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>图片优化</li>
                <li>字体优化</li>
                <li>代码分割</li>
                <li>缓存策略</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-2 font-medium">开发体验</h3>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>热更新</li>
                <li>路径别名</li>
                <li>环境变量</li>
                <li>类型检查</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="mb-4 text-2xl font-semibold">快速开始</h2>
          <ol className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              克隆项目并安装依赖：
              <code className="mt-1 block rounded bg-gray-100 p-2 dark:bg-gray-800">
                git clone [repository-url]
                <br />
                cd [project-name]
                <br />
                npm install
              </code>
            </li>
            <li>
              启动开发服务器：
              <code className="mt-1 block rounded bg-gray-100 p-2 dark:bg-gray-800">npm run dev</code>
            </li>
            <li>
              开始开发！编辑 <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">app/page.tsx</code>{' '}
              查看实时更新。
            </li>
          </ol>
        </div>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
          <a
            className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
            href="https://github.com/yourusername/your-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 仓库
          </a>
          <a
            className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
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
