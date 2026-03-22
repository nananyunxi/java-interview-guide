import Link from 'next/link';

export default function SpringCloudPage() {
  const questions = [
    { q: 'Spring Cloud 的核心组件？', a: '服务发现（Eureka/Nacos）、配置中心（Config/Nacos）、网关（Gateway/Zuul）、熔断器（Hystrix/Sentinel）' },
    { q: 'Spring Cloud 和 Dubbo 的区别？', a: 'Spring Cloud 是一站式微服务解决方案，Dubbo 是 RPC 框架；Spring Cloud 基于 HTTP，Dubbo 基于 TCP' },
    { q: '什么是服务雪崩？', a: '一个服务故障导致连锁反应，多个服务相继故障，最终系统崩溃' },
    { q: '如何防止服务雪崩？', a: '熔断器、降级、限流、超时控制、隔离' },
    { q: 'Spring Cloud Gateway 的特点？', a: '基于 WebFlux、性能好、支持断言和过滤器、易于扩展' },
    { q: '什么是 Feign？', a: '声明式 HTTP 客户端，简化服务间调用，基于动态代理' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/spring" className="text-blue-600 hover:underline">
          ← 返回 Spring
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🌱 Spring Cloud 面试题
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
