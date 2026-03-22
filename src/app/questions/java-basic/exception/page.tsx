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
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/java-basic" className="text-blue-600 hover:underline">
          ← 返回 Java 基础
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ☕ Exception 面试题
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
