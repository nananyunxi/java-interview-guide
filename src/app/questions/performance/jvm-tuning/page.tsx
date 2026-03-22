import Link from 'next/link';

export default function JvmTuningPage() {
  const questions = [
    { q: 'JVM 内存结构？', a: '堆（新生代 + 老年代）、方法区（元空间）、虚拟机栈、本地方法栈、程序计数器' },
    { q: '常见的 GC 算法？', a: '标记 - 清除、标记 - 复制、标记 - 整理、分代收集' },
    { q: '常见的垃圾收集器？', a: 'Serial、ParNew、Parallel、CMS、G1、ZGC' },
    { q: 'GC 日志如何分析？', a: '开日志 → 用工具 (GCViewer/GCEasy) → 看指标 (Young/Full GC 频率、停顿时间)' },
    { q: '如何排查 OOM 问题？', a: '留现场 (HeapDump) → 分析 (MAT/JVisualVM) → 定位 → 解决' },
    { q: 'JVM 参数调优？', a: '堆内存 (Xms/Xmx/Xmn)、GC(UseG1GC)、排查 (PrintGC/HeapDump)' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/performance" className="text-blue-600 hover:underline">
          ← 返回性能优化
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚡ JVM 调优面试题
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
