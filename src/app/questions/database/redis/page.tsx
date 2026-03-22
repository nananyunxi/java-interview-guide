import Link from 'next/link';

export default function RedisPage() {
  const questions = [
    { q: 'Redis 的数据类型有哪些？', a: 'String、List、Set、Hash、ZSet（有序集合）' },
    { q: 'Redis 为什么快？', a: '纯内存操作、单线程避免上下文切换、IO 多路复用、高效数据结构' },
    { q: 'Redis 持久化方式？', a: 'RDB（快照）、AOF（追加日志），可单独或混合使用' },
    { q: '缓存穿透、击穿、雪崩的区别？', a: '穿透：查不存在的数据；击穿：热点 key 过期；雪崩：大量 key 同时过期' },
    { q: 'Redis 集群方案？', a: '主从复制、哨兵模式、Cluster 分片集群' },
    { q: 'Redis 淘汰策略？', a: 'volatile-lru、allkeys-lru、volatile-ttl、noeviction 等 8 种' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/database" className="text-blue-600 hover:underline">
          ← 返回数据库
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          💾 Redis 面试题
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
