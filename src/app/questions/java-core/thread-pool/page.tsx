import Link from 'next/link';

export default function ThreadPoolPage() {
  const questions = [
    { q: '为什么要使用线程池？', a: '降低资源消耗、提高响应速度、提高线程可管理性' },
    { q: 'ThreadPoolExecutor 的 7 个核心参数？', a: '核心线程数、最大线程数、存活时间、单位、工作队列、线程工厂、拒绝策略' },
    { q: '线程池的工作流程？', a: '核心线程 → 等待队列 → 最大线程 → 拒绝策略' },
    { q: '线程池的 4 种拒绝策略？', a: '抛异常 (Abort)、调用者跑 (CallerRuns)、直接丢 (Discard)、丢最老 (DiscardOldest)' },
    { q: '如何合理配置线程池参数？', a: 'CPU 密集：核数 +1；IO 密集：核数×2' },
    { q: '线程池如何正确关闭？', a: '先 shutdown()，再 awaitTermination()，最后 shutdownNow()' },
    { q: '线程池的监控指标有哪些？', a: '线程数、活跃数、队列数、完成数、总任务数' },
    { q: '线程池常见的 OOM 场景？', a: '队列无界、线程过多、任务执行慢' },
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
          🔥 线程池面试题
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
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            💡 详细解析请查看源文件：content/java-core/thread-pool.md
          </p>
        </div>
      </article>
    </div>
  );
}
