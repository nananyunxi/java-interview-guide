import Link from 'next/link';

export default function DesignPatternsPage() {
  const questions = [
    { q: '设计模式的分类？', a: '创建型（5 种）、结构型（7 种）、行为型（11 种），共 23 种' },
    { q: '单例模式的实现？', a: '饿汉式、懒汉式（双重检查锁）、静态内部类、枚举' },
    { q: '工厂模式和抽象工厂的区别？', a: '工厂模式创建一种产品，抽象工厂创建产品族' },
    { q: '什么是代理模式？', a: '为其他对象提供代理以控制访问，分静态代理和动态代理' },
    { q: '观察者模式的应用？', a: '事件监听、消息订阅、MVC 架构' },
    { q: 'Spring 用了哪些设计模式？', a: '单例（Bean）、工厂（BeanFactory）、代理（AOP）、模板方法（JdbcTemplate）等' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                📦 设计模式面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">其他 · 面试高频考点</p>
            </div>
            <Link href="/questions/others" className="text-pink-600 hover:text-pink-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-pink-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回其他</span>
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
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4">
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
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-pink-50 rounded-lg p-4 border border-pink-100">
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
