import Link from 'next/link';

export default function JvmPage() {
  const questions = [
    { q: 'JVM 内存区域划分？', a: '堆、方法区（元空间）、虚拟机栈、本地方法栈、程序计数器' },
    { q: '堆内存的分代？', a: '新生代（Eden、Survivor）、老年代' },
    { q: '类加载过程？', a: '加载→验证→准备→解析→初始化' },
    { q: '双亲委派模型？', a: '类加载时先委托父加载器，父无法加载才自己加载' },
    { q: '常见的 JVM 参数？', a: '-Xms/-Xmx（堆大小）、-Xmn（新生代）、-XX:+UseG1GC（GC 选择）' },
    { q: '如何排查内存泄漏？', a: 'HeapDump→MAT 分析→查找 GC Roots 引用链' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/java-core" className="text-blue-600 hover:underline">
          ← 返回 Java 核心
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔥 JVM 面试题
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
