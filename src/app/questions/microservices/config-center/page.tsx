import Link from 'next/link';

export default function ConfigCenterPage() {
  const questions = [
    { q: '什么是配置中心？', a: '集中管理微服务配置，支持动态刷新、版本管理、环境隔离' },
    { q: '常见的配置中心？', a: 'Spring Cloud Config、Nacos、Apollo、Consul' },
    { q: '配置中心的核心功能？', a: '配置存储、动态刷新、版本管理、权限控制、灰度发布' },
    { q: '配置刷新的方式？', a: '@RefreshScope 注解、/actuator/refresh 端点、消息总线触发' },
    { q: '配置中心的架构？', a: '配置服务器（存储配置）、客户端（拉取配置）、配置仓库（Git/SVN）' },
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
          🏗️ 配置中心面试题
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
