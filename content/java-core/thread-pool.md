# Java 核心 - 线程池面试题

## 1. 为什么要使用线程池？

**答案**：
1. **降低资源消耗**：复用已创建的线程，减少线程创建和销毁的开销
2. **提高响应速度**：任务到达时无需等待线程创建即可执行
3. **提高线程可管理性**：统一分配、调优和监控

**记忆要点**：
- 复用线程、减少开销
- 提高响应、便于管理

---

## 2. ThreadPoolExecutor 的 7 个核心参数？

**答案**：
```java
new ThreadPoolExecutor(
    int corePoolSize,              // 核心线程数
    int maximumPoolSize,           // 最大线程数
    long keepAliveTime,            // 空闲线程存活时间
    TimeUnit unit,                 // 时间单位
    BlockingQueue<Runnable> workQueue,  // 工作队列
    ThreadFactory threadFactory,   // 线程工厂
    RejectedExecutionHandler handler    // 拒绝策略
)
```

**记忆要点**：
- 核心、最大、存活、单位、队列、工厂、拒绝

---

## 3. 线程池的工作流程？

**答案**：
1. 提交任务到线程池
2. 如果当前线程数 < 核心线程数，创建新线程执行
3. 如果当前线程数 >= 核心线程数，放入等待队列
4. 如果队列已满且线程数 < 最大线程数，创建非核心线程执行
5. 如果队列已满且线程数 = 最大线程数，执行拒绝策略

**记忆要点**：
- 核心 → 队列 → 最大 → 拒绝

---

## 4. 线程池的 4 种拒绝策略？

**答案**：
| 策略 | 说明 |
|------|------|
| AbortPolicy（默认） | 抛出 RejectedExecutionException 异常 |
| CallerRunsPolicy | 由调用线程处理该任务 |
| DiscardPolicy | 直接丢弃任务，不抛异常 |
| DiscardOldestPolicy | 丢弃队列中最老的任务，然后重试 |

**记忆要点**：
- 抛异常、调用者跑、直接丢、丢最老

---

## 5. 如何合理配置线程池参数？

**答案**：
### CPU 密集型任务
- 核心线程数 = CPU 核数 + 1
- 最大线程数 = CPU 核数 + 1
- 队列容量：较小

### IO 密集型任务
- 核心线程数 = CPU 核数 × 2
- 最大线程数 = CPU 核数 × 2
- 队列容量：较大

### 通用公式
```
最佳线程数 = CPU 核数 × (1 + 等待时间/计算时间)
```

**记忆要点**：
- CPU 密集：核数 +1
- IO 密集：核数×2

---

## 6. 线程池如何正确关闭？

**答案**：
```java
// 1. 停止接收新任务
executor.shutdown();

// 2. 等待任务完成（可选）
if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
    // 3. 强制关闭
    executor.shutdownNow();
}
```

**注意**：
- 不要使用 `Executors` 创建线程池（可能导致 OOM）
- 手动创建 `ThreadPoolExecutor`

**记忆要点**：
- 先 shutdown，再 awaitTermination，最后 shutdownNow
- 不用 Executors

---

## 7. 线程池的监控指标有哪些？

**答案**：
- `getPoolSize()`：当前线程数
- `getActiveCount()`：活跃线程数
- `getQueue().size()`：队列中任务数
- `getCompletedTaskCount()`：已完成任务数
- `getTaskCount()`：总任务数

**记忆要点**：
- 线程数、活跃数、队列数、完成数

---

## 8. 线程池常见的 OOM 场景？

**答案**：
1. **队列无界**：`new LinkedBlockingQueue()` 默认容量 Integer.MAX_VALUE
2. **线程数过多**：maximumPoolSize 设置过大
3. **任务执行慢**：任务处理时间过长，堆积在队列

**解决方案**：
- 使用有界队列
- 合理设置最大线程数
- 监控队列长度和任务执行时间

**记忆要点**：
- 队列无界、线程过多、任务太慢
- 用有界、限线程、做监控
