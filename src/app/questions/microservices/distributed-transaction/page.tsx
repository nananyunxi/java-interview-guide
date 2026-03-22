import Link from 'next/link';

export default function DistributedTransactionPage() {
  const questions = [
    { q: '什么是分布式事务？', a: '跨多个服务/数据库的事务，需要保证 ACID 特性' },
    { q: 'CAP 理论？', a: '一致性（C）、可用性（A）、分区容错性（P），三者最多满足两个' },
    { q: 'BASE 理论？', a: '基本可用（BA）、软状态（S）、最终一致性（E）' },
    { q: '分布式事务解决方案？', a: '两阶段提交（2PC）、TCC、本地消息表、最大努力通知、Saga' },
    { q: '什么是 TCC？', a: 'Try-Confirm-Cancel，三个阶段：尝试、确认、取消' },
    { q: 'Seata 是什么？', a: '阿里巴巴开源的分布式事务解决方案，支持 AT、TCC、Saga 等模式' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/microservices" className="text-blue-600 hover:underline">
          ← 返回微服务
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🏗️ 分布式事务面试题
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
