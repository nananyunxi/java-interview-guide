import Link from 'next/link';

export default function ThreadPoolPage() {
  const questions = [
    { 
      q: '为什么要使用线程池？', 
      a: '降低资源消耗、提高响应速度、提高线程可管理性',
      detail: `**详细解析：**

线程池是 Java 并发编程中最常用的工具之一，使用线程池有三大核心优势：

**1. 降低资源消耗**
- 线程的创建和销毁开销很大
- 线程池复用已创建的线程
- 避免频繁创建/销毁线程的开销
- 示例：创建线程约 1ms，复用几乎 0ms

**2. 提高响应速度**
- 任务到达时无需等待线程创建
- 直接从池中获取空闲线程执行
- 特别适合高并发、短任务场景
- 示例：Web 服务器处理请求

**3. 提高线程可管理性**
- 统一分配、调优和监控
- 控制最大并发数，避免资源耗尽
- 支持定时执行、周期性执行
- 方便统计线程使用情况

**实际应用场景：**
1. Web 服务器（Tomcat、Jetty）
2. 数据库连接池
3. 异步任务处理
4. 定时任务调度

**不使用线程池的问题：**
- 线程无限制创建，导致 OOM
- 线程频繁创建销毁，CPU 浪费
- 无法控制并发量，系统崩溃`
    },
    { 
      q: 'ThreadPoolExecutor 的 7 个核心参数？', 
      a: '核心线程数、最大线程数、存活时间、单位、工作队列、线程工厂、拒绝策略',
      detail: `**详细解析：**

ThreadPoolExecutor 是 Java 线程池的核心实现类，理解 7 个参数至关重要。

**构造函数：**
\`\`\`java
new ThreadPoolExecutor(
    int corePoolSize,              // 1. 核心线程数
    int maximumPoolSize,           // 2. 最大线程数
    long keepAliveTime,            // 3. 空闲线程存活时间
    TimeUnit unit,                 // 4. 时间单位
    BlockingQueue<Runnable> workQueue,  // 5. 工作队列
    ThreadFactory threadFactory,   // 6. 线程工厂
    RejectedExecutionHandler handler    // 7. 拒绝策略
)
\`\`\`

**参数详解：**

**1. corePoolSize（核心线程数）**
- 线程池中保持的最小线程数
- 即使空闲也不会被回收（除非 allowCoreThreadTimeOut）
- 建议设置：CPU 密集型 = CPU 核数 +1，IO 密集型 = CPU 核数×2

**2. maximumPoolSize（最大线程数）**
- 线程池允许创建的最大线程数
- 核心线程 + 非核心线程的总数上限
- 超过此数量会触发拒绝策略

**3. keepAliveTime（存活时间）**
- 非核心线程的空闲超时时间
- 超过此时间且线程数 > 核心线程数，线程会被回收
- 单位由 unit 参数指定

**4. unit（时间单位）**
- TimeUnit 枚举：SECONDS、MINUTES、MILLISECONDS 等

**5. workQueue（工作队列）**
- 存储等待执行的任务
- 常用队列：
  - ArrayBlockingQueue：有界队列
  - LinkedBlockingQueue：无界队列（慎用）
  - SynchronousQueue：不存储元素，直接传递

**6. threadFactory（线程工厂）**
- 创建线程的工厂
- 可以自定义线程名称、优先级、守护线程等
- 建议使用：ThreadFactoryBuilder

**7. handler（拒绝策略）**
- 当队列满且线程数达最大值时的处理策略
- 4 种策略：AbortPolicy、CallerRunsPolicy、DiscardPolicy、DiscardOldestPolicy`
    },
    { 
      q: '线程池的工作流程？', 
      a: '核心线程 → 等待队列 → 最大线程 → 拒绝策略',
      detail: `**详细解析：**

理解线程池的工作流程对于正确使用和调优至关重要。

**工作流程（按顺序）：**

**步骤 1：提交任务**
\`\`\`
executor.execute(task);
\`\`\`

**步骤 2：判断当前线程数**
- 如果 当前线程数 < 核心线程数
  → 创建新核心线程执行任务
- 如果 当前线程数 >= 核心线程数
  → 进入步骤 3

**步骤 3：尝试放入队列**
- 如果 队列未满
  → 任务放入等待队列
- 如果 队列已满
  → 进入步骤 4

**步骤 4：创建非核心线程**
- 如果 当前线程数 < 最大线程数
  → 创建非核心线程执行任务
- 如果 当前线程数 >= 最大线程数
  → 进入步骤 5

**步骤 5：执行拒绝策略**
- 调用 RejectedExecutionHandler.rejectedExecution()
- 根据配置的策略处理

**流程图：**
\`\`\`
提交任务
  ↓
线程数 < 核心？
  ├─ 是 → 创建核心线程 → 执行
  └─ 否 → 队列满了吗？
           ├─ 否 → 放入队列 → 等待
           └─ 是 → 线程数 < 最大？
                    ├─ 是 → 创建非核心线程 → 执行
                    └─ 否 → 拒绝策略
\`\`\`

**关键点：**
1. 先创建核心线程，再放队列，最后创建非核心线程
2. 队列的选择影响行为（有界 vs 无界）
3. 合理设置核心/最大线程数很重要`
    },
    { 
      q: '线程池的 4 种拒绝策略？', 
      a: '抛异常 (Abort)、调用者跑 (CallerRuns)、直接丢 (Discard)、丢最老 (DiscardOldest)',
      detail: `**详细解析：**

当线程池无法处理新任务时（队列满 + 线程数达最大），会触发拒绝策略。

**1. AbortPolicy（默认策略）**
\`\`\`java
new ThreadPoolExecutor.AbortPolicy()
\`\`\`
- **行为**：抛出 RejectedExecutionException 异常
- **适用场景**：不允许任务丢失，需要感知失败
- **优点**：立即发现问题
- **缺点**：可能影响业务流程

**2. CallerRunsPolicy（调用者运行）**
\`\`\`java
new ThreadPoolExecutor.CallerRunsPolicy()
\`\`\`
- **行为**：由调用线程（提交任务的线程）执行该任务
- **适用场景**：不允许任务丢失，可以接受延迟
- **优点**：不会丢失任务，给系统缓冲时间
- **缺点**：阻塞调用线程，降低吞吐量

**3. DiscardPolicy（直接丢弃）**
\`\`\`java
new ThreadPoolExecutor.DiscardPolicy()
\`\`\`
- **行为**：直接丢弃任务，不抛异常
- **适用场景**：允许任务丢失，如日志、监控数据
- **优点**：快速失败，不影响主流程
- **缺点**：任务丢失，无法感知

**4. DiscardOldestPolicy（丢弃最老）**
\`\`\`java
new ThreadPoolExecutor.DiscardOldestPolicy()
\`\`\`
- **行为**：丢弃队列中最老的任务，然后重试提交
- **适用场景**：新任务比旧任务更重要
- **优点**：保留最新任务
- **缺点**：可能丢失重要旧任务

**自定义拒绝策略：**
\`\`\`java
new RejectedExecutionHandler() {
    @Override
    public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
        // 自定义逻辑：记录日志、发送到 MQ、持久化等
        log.warn("任务被拒绝：{}", r.toString());
    }
}
\`\`\`

**选择建议：**
- 核心业务：AbortPolicy 或 CallerRunsPolicy
- 非核心业务：DiscardPolicy
- 实时性要求高：DiscardOldestPolicy`
    },
    { 
      q: '如何合理配置线程池参数？', 
      a: 'CPU 密集：核数 +1；IO 密集：核数×2',
      detail: `**详细解析：**

合理配置线程池参数是性能优化的关键。

**1. CPU 密集型任务**

**特点**：大量计算，CPU 利用率高
- 示例：加密解密、压缩解压、复杂计算

**配置建议：**
\`\`\`
核心线程数 = CPU 核数 + 1
最大线程数 = CPU 核数 + 1
队列容量 = 较小值（如 100-1000）
\`\`\`

**为什么 +1？**
- 防止某线程偶尔缺页中断时，CPU 闲置
- 多一个线程保证 CPU 充分利用

**获取 CPU 核数：**
\`\`\`java
int cpuCores = Runtime.getRuntime().availableProcessors();
\`\`\`

**2. IO 密集型任务**

**特点**：大量 IO 操作，CPU 等待时间长
- 示例：数据库操作、文件读写、网络请求

**配置建议：**
\`\`\`
核心线程数 = CPU 核数 × 2
最大线程数 = CPU 核数 × 2
队列容量 = 较大值（如 1000-10000）
\`\`\`

**为什么×2？**
- 线程等待 IO 时，CPU 可以处理其他线程
- 一般 50% 时间等待 IO，所以×2

**更精确的公式：**
\`\`\`
最佳线程数 = CPU 核数 × (1 + 等待时间/计算时间)
\`\`\`

**3. 混合型任务**

**策略**：拆分为 CPU 密集和 IO 密集两个线程池

**4. 队列选择**

**有界队列（推荐）：**
\`\`\`java
new ArrayBlockingQueue<>(1000)  // 固定容量
\`\`\`
- 优点：防止 OOM
- 缺点：可能触发拒绝策略

**无界队列（慎用）：**
\`\`\`java
new LinkedBlockingQueue()  // 默认 Integer.MAX_VALUE
\`\`\`
- 优点：不会触发拒绝策略
- 缺点：可能 OOM

**5. 实际配置示例**

\`\`\`java
// IO 密集型线程池
new ThreadPoolExecutor(
    16,                              // 核心线程（8 核×2）
    32,                              // 最大线程
    60L,                             // 存活时间
    TimeUnit.SECONDS,                // 单位
    new ArrayBlockingQueue<>(1000),  // 有界队列
    new ThreadFactoryBuilder()       // 线程工厂
        .setNameFormat("io-pool-%d")
        .build(),
    new ThreadPoolExecutor.CallerRunsPolicy()  // 拒绝策略
)
\`\`\``
    },
    { 
      q: '线程池如何正确关闭？', 
      a: '先 shutdown()，再 awaitTermination()，最后 shutdownNow()',
      detail: `**详细解析：**

正确关闭线程池对于优雅停机至关重要。

**错误的关闭方式：**
\`\`\`java
// ❌ 错误：直接关闭，任务可能丢失
executor.shutdownNow();
\`\`\`

**正确的关闭方式：**
\`\`\`java
// ✅ 正确：优雅关闭
public void shutdown() {
    // 1. 停止接收新任务
    executor.shutdown();
    
    try {
        // 2. 等待任务完成（最多 60 秒）
        if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
            // 3. 强制关闭
            executor.shutdownNow();
            
            // 4. 再等待一段时间
            if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                System.err.println("线程池未正常关闭");
            }
        }
    } catch (InterruptedException e) {
        // 5. 响应中断
        executor.shutdownNow();
        Thread.currentThread().interrupt();
    }
}
\`\`\`

**方法详解：**

**1. shutdown()**
- 停止接收新任务
- 已提交的任务继续执行
- 已排队的任务继续执行
- **推荐首先调用**

**2. awaitTermination(timeout, unit)**
- 阻塞等待所有任务完成
- 超时返回 false
- 可多次调用

**3. shutdownNow()**
- 尝试停止所有正在执行的任务
- 返回未执行的任务列表
- **不保证能成功停止**

**关闭流程：**
\`\`\`
1. shutdown()
   ↓ 停止接收新任务
2. awaitTermination(60s)
   ↓ 等待任务完成
3. 如果超时 → shutdownNow()
   ↓ 强制停止
4. awaitTermination(60s)
   ↓ 再次等待
5. 如果仍超时 → 记录日志
\`\`\`

**Spring 中的优雅关闭：**
\`\`\`java
@Bean(destroyMethod = "shutdown")
public Executor executor() {
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    // 配置参数...
    executor.setWaitForTasksToCompleteOnShutdown(true);
    executor.setAwaitTerminationSeconds(60);
    return executor;
}
\`\`\`

**注意事项：**
1. 关闭前通知上游停止提交任务
2. 关闭后不再提交新任务
3. 监控关闭进度，避免无限等待
4. 记录未完成任务，便于排查`
    },
    { 
      q: '线程池的监控指标有哪些？', 
      a: '线程数、活跃数、队列数、完成数、总任务数',
      detail: `**详细解析：**

监控线程池对于发现性能瓶颈和预防故障非常重要。

**核心监控指标：**

**1. getPoolSize() - 当前线程数**
\`\`\`java
int poolSize = executor.getPoolSize();
\`\`\`
- 线程池中当前的线程总数
- 包括核心线程和非核心线程
- **正常范围**：corePoolSize ~ maximumPoolSize

**2. getActiveCount() - 活跃线程数**
\`\`\`java
int activeCount = executor.getActiveCount();
\`\`\`
- 正在执行任务的线程数
- **警戒值**：接近 poolSize 说明负载高

**3. getQueue().size() - 队列中任务数**
\`\`\`java
int queueSize = executor.getQueue().size();
\`\`\`
- 等待执行的任务数
- **警戒值**：接近队列容量说明需要扩容

**4. getCompletedTaskCount() - 已完成任务数**
\`\`\`java
long completedCount = executor.getCompletedTaskCount();
\`\`\`
- 累计完成的任务数
- 用于计算吞吐量

**5. getTaskCount() - 总任务数**
\`\`\`java
long taskCount = executor.getTaskCount();
\`\`\`
- 累计提交的任务总数
- 包括已完成和正在执行的

**6. getLargestPoolSize() - 历史最大线程数**
\`\`\`java
int largestPoolSize = executor.getLargestPoolSize();
\`\`\`
- 线程池曾经达到的最大线程数
- 用于评估 maximumPoolSize 是否合理

**监控示例代码：**
\`\`\`java
// 定时监控线程池
ScheduledExecutorService monitor = Executors.newSingleThreadScheduledExecutor();
monitor.scheduleAtFixedRate(() -> {
    System.out.println("=== 线程池监控 ===");
    System.out.println("当前线程数：" + executor.getPoolSize());
    System.out.println("活跃线程数：" + executor.getActiveCount());
    System.out.println("队列任务数：" + executor.getQueue().size());
    System.out.println("已完成任务：" + executor.getCompletedTaskCount());
    System.out.println("总任务数：" + executor.getTaskCount());
    System.out.println("历史最大线程：" + executor.getLargestPoolSize());
}, 0, 10, TimeUnit.SECONDS);
\`\`\`

**监控告警指标：**

| 指标 | 警告阈值 | 严重阈值 |
|------|----------|----------|
| 活跃线程占比 | > 70% | > 90% |
| 队列使用率 | > 70% | > 90% |
| 拒绝任务数 | > 0 | > 10/min |
| 平均等待时间 | > 1s | > 5s |

**Prometheus 监控示例：**
\`\`\`java
// 暴露指标给 Prometheus
@GetMapping("/actuator/prometheus")
public String getMetrics() {
    return """
        thread_pool_size %d
        thread_pool_active %d
        thread_pool_queue_size %d
        thread_pool_completed_total %d
        """.formatted(
            executor.getPoolSize(),
            executor.getActiveCount(),
            executor.getQueue().size(),
            executor.getCompletedTaskCount()
        );
}
\`\`\`

**调优建议：**
1. 持续监控，收集基线数据
2. 根据监控数据调整参数
3. 设置告警，及时发现问题
4. 定期 Review 线程池配置`
    },
    { 
      q: '线程池常见的 OOM 场景？', 
      a: '队列无界、线程过多、任务执行慢',
      detail: `**详细解析：**

线程池使用不当会导致 OOM（Out Of Memory），这是生产环境常见问题。

**场景 1：使用无界队列**

**问题代码：**
\`\`\`java
// ❌ 错误：使用无界队列
new ThreadPoolExecutor(
    10,
    20,
    60L,
    TimeUnit.SECONDS,
    new LinkedBlockingQueue<>()  // 默认容量 Integer.MAX_VALUE
)
\`\`\`

**问题分析：**
- LinkedBlockingQueue 默认容量 21 亿
- 任务堆积时不会触发拒绝策略
- 内存持续增长，最终 OOM

**解决方案：**
\`\`\`java
// ✅ 正确：使用有界队列
new ThreadPoolExecutor(
    10,
    20,
    60L,
    TimeUnit.SECONDS,
    new ArrayBlockingQueue<>(1000)  // 固定容量
)
\`\`\`

**场景 2：线程数过多**

**问题代码：**
\`\`\`java
// ❌ 错误：线程数过多
new ThreadPoolExecutor(
    1000,  // 核心线程过多
    5000,  // 最大线程过多
    ...
)
\`\`\`

**问题分析：**
- 每个线程占用约 1MB 栈空间
- 5000 个线程 ≈ 5GB 内存
- 线程切换开销大，性能下降

**解决方案：**
\`\`\`java
// ✅ 正确：合理设置线程数
int cpuCores = Runtime.getRuntime().availableProcessors();
new ThreadPoolExecutor(
    cpuCores * 2,      // IO 密集型
    cpuCores * 4,      // 最大线程
    ...
)
\`\`\`

**场景 3：任务执行过慢**

**问题场景：**
- 任务执行时间 > 任务提交间隔
- 任务在队列中大量堆积
- 内存持续增长

**解决方案：**
\`\`\`java
// 1. 设置任务超时
executor.submit(() -> {
    try {
        // 业务逻辑
    } catch (Exception e) {
        log.error("任务执行失败", e);
    }
});

// 2. 监控队列长度
if (executor.getQueue().size() > 1000) {
    log.warn("队列堆积严重");
}

// 3. 使用有界队列 + 拒绝策略
new ThreadPoolExecutor(
    ...,
    new ArrayBlockingQueue<>(1000),
    new ThreadPoolExecutor.CallerRunsPolicy()  // 反压
)
\`\`\`

**场景 4：ThreadLocal 内存泄漏**

**问题场景：**
- 线程池复用线程
- ThreadLocal 未清理
- 线程持有大对象引用

**解决方案：**
\`\`\`java
// 使用 try-finally 清理 ThreadLocal
executor.submit(() -> {
    try {
        userContext.set(user);
        // 业务逻辑
    } finally {
        userContext.remove();  // 必须清理
    }
});
\`\`\`

**监控和预防：**

**1. 监控指标**
\`\`\`java
// 定期检查
if (executor.getQueue().size() > 1000) {
    alert("队列堆积");
}
if (executor.getPoolSize() > 100) {
    alert("线程数过多");
}
\`\`\`

**2. 使用线程池监控工具**
- Prometheus + Grafana
- Arthas 线程池命令
- 自定义监控埋点

**3. 最佳实践**
- 始终使用有界队列
- 合理设置线程数
- 设置合适的拒绝策略
- 监控队列长度和线程数
- 定期清理 ThreadLocal`
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                🔥 线程池面试题
              </h1>
              <p className="text-sm text-gray-500 mt-1">Java 核心 · 并发编程必考</p>
            </div>
            <Link href="/questions/java-core" className="text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回 Java 核心
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white flex-1 leading-relaxed">
                    {item.q}
                  </h3>
                </div>
              </div>

              {/* Answer */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-green-50 rounded-lg p-4 border border-green-100">
                    {item.a}
                  </p>
                </div>

                {/* Detailed Explanation */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      📖 详细解析
                    </span>
                  </div>
                  <div className="prose max-w-none bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.detail}
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">💡</span>
                    <span className="text-sm text-gray-500">掌握核心要点，面试轻松应对</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/questions/java-core" className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-indigo-600 font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回 Java 核心
          </Link>
          <Link href="/questions/java-core/jvm" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all font-medium flex items-center gap-2">
            下一节：JVM
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>© 2026 Java 面试宝典 - 用心整理，助你拿下 Offer 💪</p>
        </div>
      </footer>
    </div>
  );
}
