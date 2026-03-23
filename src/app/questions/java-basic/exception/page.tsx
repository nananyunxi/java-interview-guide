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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/questions/java-basic" className="text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回 Java 基础
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              ☕ Exception 面试题
            </h1>
            <p className="text-orange-100 mt-2">Java 基础 · 异常处理机制</p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-100">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
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
