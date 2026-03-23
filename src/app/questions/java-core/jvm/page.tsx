import Link from 'next/link';

export default function JvmPage() {
  const questions = [
    { q: 'JVM 内存区域划分？', a: '堆、方法区（元空间）、虚拟机栈、本地方法栈、程序计数器' },
    { q: '堆内存的分代？', a: '新生代（Eden、Survivor）、老年代' },
    { q: '类加载过程？', a: '加载 → 验证 → 准备 → 解析 → 初始化' },
    { q: '双亲委派模型？', a: '类加载时先委托父加载器，父无法加载才自己加载' },
    { q: '常见的 JVM 参数？', a: '-Xms/-Xmx（堆大小）、-Xmn（新生代）、-XX:+UseG1GC（GC 选择）' },
    { q: '如何排查内存泄漏？', a: 'HeapDump → MAT 分析 → 查找 GC Roots 引用链' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/questions/java-core" className="text-violet-600 hover:text-violet-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回 Java 核心
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              🔥 JVM 面试题
            </h1>
            <p className="text-violet-100 mt-2">Java 核心 · 虚拟机必备</p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-5 rounded-xl border border-violet-100">
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
