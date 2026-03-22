import Link from 'next/link';

export default function BeanLifecyclePage() {
  const questions = [
    { q: 'Spring Bean 的生命周期？', a: '实例  →  属性  →  Aware  →  前处  →  初始化  →  后处  →  使用  →  销毁' },
    { q: 'Spring 支持的 Bean 作用域？', a: 'singleton、prototype、request、session、application' },
    { q: 'Spring 的自动装配方式？', a: 'byName、byType、constructor、@Autowired、@Resource' },
    { q: '@Autowired 和@Resource 的区别？', a: 'Autowired 是 Spring 的按类型，Resource 是 JDK 的按名字' },
    { q: 'Spring AOP 的实现原理？', a: 'JDK 动态代理（有接口）和 CGLIB 代理（无接口）' },
    { q: 'Spring 事务的传播行为？', a: 'REQUIRED（默认）、REQUIRES_NEW、NESTED 等 7 种' },
    { q: 'Spring 事务的隔离级别？', a: 'DEFAULT、READ_UNCOMMITTED、READ_COMMITTED、REPEATABLE_READ、SERIALIZABLE' },
    { q: 'Spring Boot 自动配置原理？', a: '读取 spring.factories，根据@Conditional 判断是否加载' },
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
          🌱 Bean 生命周期面试题
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
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            💡 详细解析请查看源文件：content/spring/bean-lifecycle.md
          </p>
        </div>
      </article>
    </div>
  );
}
