import Link from 'next/link';

export default function ApiOptimizationPage() {
  const questions = [
    { q: '接口响应慢如何优化？', a: '数据库优化、缓存、异步处理、批量查询、分页' },
    { q: '什么是接口幂等性？', a: '同一请求多次执行结果相同，通过唯一 ID、token、状态机实现' },
    { q: '如何设计高并发接口？', a: '限流、降级、缓存、异步、负载均衡、数据库分库分表' },
    { q: '接口超时如何处理？', a: '设置合理超时时间、重试机制、降级方案、熔断器' },
    { q: '什么是 RESTful API？', a: '基于 HTTP 的 API 设计风格，使用资源、动词、状态码' },
    { q: '接口版本管理方式？', a: 'URL 版本（/v1/）、Header 版本、参数版本' },
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
          ⚡ 接口优化面试题
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
