import Link from 'next/link';

const questions = [
  { name: 'AOP 面试题', href: '/questions/spring/aop', count: 0, tag: '待更新' },
  { name: '事务面试题', href: '/questions/spring/transaction', count: 0, tag: '待更新' },
  { name: 'Spring Boot', href: '/questions/spring/spring-boot', count: 0, tag: '待更新' },
  { name: 'Spring Cloud', href: '/questions/spring/spring-cloud', count: 0, tag: '待更新' },
];

export default function SpringPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🌱 Spring 生态
        </h1>
        <p className="text-gray-600">
          Spring、Spring Boot、Spring Cloud
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/questions/spring/bean-lifecycle" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Bean 生命周期
              </h3>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">8 题</span>
            </div>
          </div>
        </Link>

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
