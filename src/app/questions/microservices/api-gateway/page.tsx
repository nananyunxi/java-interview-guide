import Link from 'next/link';

export default function ApiGatewayPage() {
  const questions = [
    { q: '什么是 API 网关？', a: '微服务架构的统一入口，负责路由、鉴权、限流、监控等' },
    { q: 'API 网关的核心功能？', a: '路由转发、身份认证、限流熔断、日志监控、负载均衡' },
    { q: '常见的 API 网关？', a: 'Spring Cloud Gateway、Zuul、Kong、APISIX' },
    { q: '网关和负载均衡的区别？', a: '网关是应用层（七层），功能更丰富；负载均衡是传输层（四层），只负责分发流量' },
    { q: '网关如何实现鉴权？', a: 'JWT 校验、OAuth2、统一认证中心、黑名单/白名单' },
    { q: '网关如何实现限流？', a: '令牌桶算法、漏桶算法、滑动窗口、Redis 计数器' },
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
          🏗️ API 网关面试题
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
