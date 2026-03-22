import Link from 'next/link';

export default function CacheOptimizationPage() {
  const questions = [
    { q: '缓存的作用？', a: '减少数据库压力、提高响应速度、提升系统吞吐量' },
    { q: '缓存穿透如何解决？', a: '布隆过滤器、缓存空值、接口校验' },
    { q: '缓存击穿如何解决？', a: '互斥锁、永不过期、热点数据预加载' },
    { q: '缓存雪崩如何解决？', a: '随机过期时间、高可用集群、限流降级' },
    { q: '缓存和数据库一致性？', a: '先更新数据库再删除缓存、延迟双删、订阅 binlog' },
    { q: '什么是缓存预热？', a: '系统启动前/低峰期提前加载热点数据到缓存' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/performance" className="text-blue-600 hover:underline">
          ← 返回性能优化
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚡ 缓存优化面试题
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
