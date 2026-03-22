import Link from 'next/link';

export default function TransactionPage() {
  const questions = [
    { q: 'Spring 事务的传播行为？', a: 'REQUIRED（默认）、REQUIRES_NEW、NESTED、SUPPORTS、NOT_SUPPORTED、MANDATORY、NEVER' },
    { q: 'Spring 事务的隔离级别？', a: 'DEFAULT、READ_UNCOMMITTED、READ_COMMITTED、REPEATABLE_READ、SERIALIZABLE' },
    { q: '事务失效的场景？', a: '方法非 public、同类调用、异常被捕获、数据库不支持、传播行为配置错误' },
    { q: '@Transactional 注解的原理？', a: '基于 AOP，通过代理在方法前后添加事务管理逻辑' },
    { q: '什么是脏读、幻读、不可重复读？', a: '脏读：读未提交；幻读：读到新插入数据；不可重复读：读到已修改数据' },
    { q: 'Spring 事务回滚规则？', a: '默认 RuntimeException 和 Error 回滚，checked exception 不回滚，可配置 rollbackFor' },
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
          🌱 事务面试题
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
