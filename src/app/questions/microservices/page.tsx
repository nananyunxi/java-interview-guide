import Link from 'next/link';

const questions = [
  { name: '微服务架构', href: '/questions/microservices/architecture', count: 0, tag: '待更新' },
  { name: '服务治理', href: '/questions/microservices/governance', count: 0, tag: '待更新' },
  { name: '分布式事务', href: '/questions/microservices/distributed-transaction', count: 0, tag: '待更新' },
  { name: '服务注册发现', href: '/questions/microservices/service-discovery', count: 0, tag: '待更新' },
  { name: '配置中心', href: '/questions/microservices/config-center', count: 0, tag: '待更新' },
  { name: 'API 网关', href: '/questions/microservices/api-gateway', count: 0, tag: '待更新' },
];

export default function MicroservicesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🏗️ 微服务
        </h1>
        <p className="text-gray-600">
          架构设计、服务治理、分布式事务
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {questions.map((q) => (
          <Link key={q.href} href={q.href} className="block">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {q.name}
                </h3>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                  {q.tag}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
