import Link from 'next/link';

export default function IoNioPage() {
  const questions = [
    { q: 'BIO、NIO、AIO 的区别？', a: 'BIO 同步阻塞、NIO 同步非阻塞、AIO 异步非阻塞' },
    { q: 'NIO 的核心组件？', a: 'Channel（通道）、Buffer（缓冲区）、Selector（选择器）' },
    { q: '什么是零拷贝？', a: '减少数据在内核态和用户态之间的拷贝次数，提高 IO 效率' },
    { q: 'Netty 是什么？', a: '基于 NIO 的高性能网络框架，封装了 NIO 的复杂性' },
    { q: 'TCP 和 UDP 的区别？', a: 'TCP 面向连接、可靠传输；UDP 无连接、不可靠但更快' },
    { q: 'TCP 三次握手？', a: 'SYN→SYN+ACK→ACK，建立可靠连接' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/java-core" className="text-blue-600 hover:underline">
          ← 返回 Java 核心
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔥 IO/NIO 面试题
        </h1>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q{index + 1}. {item.q}
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
