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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                🌱 事务面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Spring 核心 · 面试高频考点</p>
            </div>
            <Link href="/questions/spring" className="text-green-600 hover:text-green-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-green-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回 Spring</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white flex-1 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                </div>
              </div>

              {/* Answer */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-green-50 rounded-lg p-4 border border-green-100">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
