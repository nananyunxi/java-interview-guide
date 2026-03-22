import Link from 'next/link';

const categories = [
  { name: '面试技巧', href: '/skills', icon: '🎯', desc: '自我介绍、项目经验、技术回答技巧' },
  { name: 'Java 基础', href: '/questions/java-basic', icon: '☕', desc: '数据类型、面向对象、异常、泛型、反射' },
  { name: 'Java 核心', href: '/questions/java-core', icon: '🔥', desc: '集合、并发、JVM、IO/NIO' },
  { name: 'Spring', href: '/questions/spring', icon: '🌱', desc: 'Spring、Spring Boot、Spring Cloud' },
  { name: '微服务', href: '/questions/microservices', icon: '🏗️', desc: '架构设计、服务治理、分布式事务' },
  { name: '数据库', href: '/questions/database', icon: '💾', desc: 'MySQL、Redis、SQL 调优' },
  { name: '性能优化', href: '/questions/performance', icon: '⚡', desc: 'JVM 调优、缓存优化、接口优化' },
  { name: '其他', href: '/questions/others', icon: '📦', desc: 'Linux、Git、Docker、设计模式' },
];

export default function HomePage() {
  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📚 Java 开发面试宝典
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          全面 · 易懂 · 持续更新
        </p>
        <p className="text-gray-500">
          包含面试技巧、高频面试题、八股文解析，助你轻松拿下 Offer！
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <a key={cat.href} href={cat.href} className="block">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500">{cat.desc}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">✨ 特色功能</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <span className="text-2xl mr-3">📝</span>
            <div>
              <h3 className="font-medium text-gray-900">易懂解析</h3>
              <p className="text-sm text-gray-600">技术语言简单化，方便记忆</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">🔄</span>
            <div>
              <h3 className="font-medium text-gray-900">持续更新</h3>
              <p className="text-sm text-gray-600">每 5 天自动补充最新题目</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">📊</span>
            <div>
              <h3 className="font-medium text-gray-900">分类清晰</h3>
              <p className="text-sm text-gray-600">按知识点分类，快速查找</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
