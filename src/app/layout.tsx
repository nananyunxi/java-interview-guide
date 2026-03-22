import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Java 面试宝典 - 全面、易懂、持续更新</title>
        <meta name="description" content="Java 开发面试宝典，包含面试技巧、面试题目、八股文，按知识点分类，持续更新" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-blue-600">
                📚 Java 面试宝典
              </a>
              <div className="space-x-4">
                <a href="/" className="text-gray-600 hover:text-blue-600">首页</a>
                <a href="/skills" className="text-gray-600 hover:text-blue-600">面试技巧</a>
                <a href="/questions" className="text-gray-600 hover:text-blue-600">面试题目</a>
              </div>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500">
            <p>© 2026 Java 面试宝典 - 由小雅整理维护</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
