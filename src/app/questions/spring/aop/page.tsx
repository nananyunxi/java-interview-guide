import Link from 'next/link';

export default function AopPage() {
  const questions = [
    { q: '什么是 AOP？', a: '面向切面编程，将横切关注点（日志、事务、权限）从业务逻辑中分离' },
    { q: 'AOP 的核心概念？', a: '切面（Aspect）、连接点（JoinPoint）、通知（Advice）、切入点（Pointcut）、目标对象' },
    { q: '通知的类型有哪些？', a: '前置通知、后置通知、返回通知、异常通知、环绕通知' },
    { q: 'AOP 的实现原理？', a: 'JDK 动态代理（有接口）和 CGLIB 代理（无接口，继承）' },
    { q: '@Aspect 注解的作用？', a: '声明一个切面类，配合@Before、@After、@Around 等注解使用' },
    { q: 'Spring AOP 和 AspectJ 的区别？', a: 'Spring AOP 基于代理，只支持方法级别；AspectJ 基于字节码，支持更细粒度' },
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
          🌱 AOP 面试题
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
