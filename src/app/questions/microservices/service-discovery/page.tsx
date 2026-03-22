import Link from 'next/link';

export default function ServiceDiscoveryPage() {
  const questions = [
    { q: '什么是服务注册与发现？', a: '服务启动时注册到注册中心，消费者从注册中心获取服务地址' },
    { q: '常见的服务注册中心？', a: 'Eureka（已停更）、Nacos、Consul、Zookeeper' },
    { q: 'Eureka 和 Nacos 的区别？', a: 'Nacos 支持 AP 和 CP 模式，功能更强大；Eureka 只支持 AP' },
    { q: '服务注册的两种方式？', a: '客户端注册（服务自己注册）、服务端注册（第三方注册）' },
    { q: '服务发现的两种方式？', a: '客户端发现（消费者查注册中心）、服务端发现（通过负载均衡器）' },
    { q: '什么是服务心跳？', a: '服务定期向注册中心发送心跳，证明自己还活着，超时会被剔除' },
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
          🏗️ 服务注册发现面试题
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
