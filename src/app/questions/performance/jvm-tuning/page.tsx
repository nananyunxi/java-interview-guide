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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/questions/performance" className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回性能优化
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              ⚡ JVM 调优面试题
            </h1>
            <p className="text-red-100 mt-2">性能优化 · GC 调优必备</p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-100">
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
