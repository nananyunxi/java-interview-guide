import Link from 'next/link';

export default function MicroservicesArchitecturePage() {
  const questions = [
    { q: '什么是微服务架构？', a: '将单体应用拆分为多个小型服务，每个服务独立部署、独立扩展、独立维护' },
    { q: '微服务的优缺点？', a: '优点：独立部署、技术栈灵活、容错性好；缺点：复杂度高、分布式事务难、运维成本高' },
    { q: '微服务拆分原则？', a: '单一职责、高内聚低耦合、按业务领域拆分、数据驱动拆分' },
    { q: '微服务通信方式？', a: '同步（HTTP/RPC）、异步（消息队列）' },
    { q: '什么是服务网格？', a: 'Service Mesh，将服务通信逻辑从业务代码中分离，由基础设施层处理' },
    { q: '微服务治理包含哪些内容？', a: '服务注册发现、配置管理、负载均衡、熔断降级、链路追踪、日志聚合' },
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
          🏗️ 微服务架构面试题
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
