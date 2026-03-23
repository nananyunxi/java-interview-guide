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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="mb-6 sm:mb-8">
          <Link href="/questions/spring" className="text-green-600 hover:text-green-700 transition-colors flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg hover:bg-green-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-base sm:text-lg font-medium">返回 Spring</span>
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              🌱 Bean 生命周期面试题
            </h1>
            <p className="text-green-100 mt-2 text-sm sm:text-base">Spring 核心 · 面试高频考点</p>
          </div>
          <div className="p-4 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 sm:pb-6 last:border-0 last:pb-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 sm:p-5 rounded-xl border border-green-100">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <span>💡</span>
                <span>详细解析请查看源文件：content/spring/bean-lifecycle.md</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
