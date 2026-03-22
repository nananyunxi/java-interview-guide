import Link from 'next/link';

const questions = [
  { name: '并发编程', href: '/questions/java-core/concurrency', count: 0, tag: '待更新' },
  { name: 'JVM 面试题', href: '/questions/java-core/jvm', count: 0, tag: '待更新' },
  { name: 'IO/NIO', href: '/questions/java-core/io-nio', count: 0, tag: '待更新' },
];

export default function JavaCorePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🔥 Java 核心
        </h1>
        <p className="text-gray-600">
          集合框架、并发编程、JVM、IO/NIO
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/questions/java-core/thread-pool" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                线程池面试题
              </h3>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">8 题</span>
            </div>
          </div>
        </Link>

        {questions.map((q) => (
          <Link key={q.href} href={q.href} className="block">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {q.name}
                </h3>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                  {q.tag}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
