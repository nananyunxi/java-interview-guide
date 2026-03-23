import Link from 'next/link';

export default function ExceptionPage() {
  const questions = [
    { q: 'Java 异常体系？', a: 'Throwable 分为 Error（错误）和 Exception（异常），Exception 分为 checked 和 unchecked' },
    { q: 'checked 和 unchecked 异常的区别？', a: 'checked 必须捕获或声明，unchecked（RuntimeException）可选处理' },
    { q: 'throw 和 throws 的区别？', a: 'throw 抛出异常对象，throws 声明方法可能抛出的异常类型' },
    { q: 'try-catch-finally 的执行顺序？', a: 'try → catch → finally，finally 总是执行（除了 System.exit）' },
    { q: 'finally 中有 return 会怎样？', a: 'finally 的 return 会覆盖 try/catch 的 return' },
    { q: '自定义异常如何实现？', a: '继承 Exception 或 RuntimeException，提供构造方法' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <nav className="mb-6 sm:mb-8">
          <Link href="/questions/java-basic" className="text-orange-600 hover:text-orange-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-orange-50 hover:shadow-md group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-base sm:text-lg font-medium">返回 Java 基础</span>
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ☕ Exception 面试题
            </h1>
            <p className="text-orange-100 mt-3 text-sm sm:text-base lg:text-lg">Java 基础 · 异常处理机制</p>
          </div>
          <div className="p-4 sm:p-6 lg:p-10">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 sm:pb-6 lg:pb-8 last:border-0 last:pb-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-5 lg:p-6 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
