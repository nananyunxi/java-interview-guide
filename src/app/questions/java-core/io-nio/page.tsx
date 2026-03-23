import Link from 'next/link';

export default function IoNioPage() {
  const questions = [
    { q: 'BIO、NIO、AIO 的区别？', a: 'BIO 同步阻塞、NIO 同步非阻塞、AIO 异步非阻塞' },
    { q: 'NIO 的核心组件？', a: 'Channel（通道）、Buffer（缓冲区）、Selector（选择器）' },
    { q: '什么是零拷贝？', a: '减少数据在内核态和用户态之间的拷贝次数，提高 IO 效率' },
    { q: 'Netty 是什么？', a: '基于 NIO 的高性能网络框架，封装了 NIO 的复杂性' },
    { q: 'TCP 和 UDP 的区别？', a: 'TCP 面向连接、可靠传输；UDP 无连接、不可靠但更快' },
    { q: 'TCP 三次握手？', a: 'SYN → SYN+ACK → ACK，建立可靠连接' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="mb-6 sm:mb-8">
          <Link href="/questions/java-core" className="text-slate-600 hover:text-slate-700 transition-colors flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg hover:bg-slate-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-base sm:text-lg font-medium">返回 Java 核心</span>
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-500 to-gray-500 px-6 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              🔥 IO/NIO 面试题
            </h1>
            <p className="text-slate-100 mt-2 text-sm sm:text-base">Java 核心 · 网络 IO 必备</p>
          </div>
          <div className="p-4 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 sm:pb-6 last:border-0 last:pb-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-4 sm:p-5 rounded-xl border border-slate-100">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
