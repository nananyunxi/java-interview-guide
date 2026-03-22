import Link from 'next/link';

export default function StringPage() {
  const questions = [
    { q: 'String、StringBuilder、StringBuffer 的区别？', a: 'String 不可变，StringBuilder 可变非线程安全，StringBuffer 可变线程安全' },
    { q: 'String 为什么不可变？', a: 'final 修饰 char 数组，保证安全性、缓存 hashCode、线程安全' },
    { q: '字符串常量池的作用？', a: '减少重复字符串的内存占用，提高性能' },
    { q: 'String 的 intern() 方法？', a: '将字符串放入常量池，返回常量池中的引用' },
    { q: '字符串拼接哪种方式最高效？', a: '循环内用 StringBuilder，循环外用 + 即可（编译器优化）' },
    { q: 'String 的 hashCode 如何计算？', a: 's[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]' },
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
          ☕ String 面试题
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
