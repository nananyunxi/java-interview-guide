import Link from 'next/link';

export default function ServiceGovernancePage() {
  const questions = [
    { q: '什么是服务治理？', a: '对微服务进行管理和控制，包括注册发现、配置管理、负载均衡、熔断降级等' },
    { q: '负载均衡算法？', a: '轮询、随机、加权轮询、一致性哈希、最少连接数' },
    { q: '什么是熔断降级？', a: '服务故障时快速失败，避免雪崩效应，故障恢复后自动恢复' },
    { q: 'Hystrix 的核心功能？', a: '熔断器、线程池隔离、信号量隔离、降级 fallback' },
    { q: 'Sentinel 和 Hystrix 的区别？', a: 'Sentinel 支持更多流量控制场景，规则配置更灵活' },
    { q: '什么是链路追踪？', a: '追踪请求在微服务间的调用链路，用于性能分析和故障定位' },
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
          🏗️ 服务治理面试题
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
