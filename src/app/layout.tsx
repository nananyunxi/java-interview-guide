import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

// 字体优化 - 使用 next/font 自动优化加载
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Java 面试宝典 - 全面、易懂、持续更新',
    template: '%s | Java 面试宝典',
  },
  description: 'Java 开发面试宝典，包含面试技巧、面试题目、八股文，按知识点分类，持续更新',
  keywords: ['Java 面试', '面试题', '八股文', 'Spring', '微服务', '数据库'],
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className={`min-h-screen bg-gray-50 font-sans`}>
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
