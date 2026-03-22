import Link from 'next/link';

export default function ConcurrencyPage() {
  const questions = [
    { q: '线程和进程的区别？', a: '进程是资源分配单位，线程是 CPU 调度单位；线程共享进程内存' },
    { q: '创建线程的方式？', a: '继承 Thread 类、实现 Runnable 接口、实现 Callable 接口、线程池' },
    { q: 'sleep() 和 wait() 的区别？', a: 'sleep 不释放锁，wait 释放锁；sleep 是 Thread 的，wait 是 Object 的' },
    { q: 'volatile 关键字的作用？', a: '保证可见性、禁止指令重排序，不保证原子性' },
    { q: 'synchronized 和 ReentrantLock 的区别？', a: 'synchronized 是关键字，自动加锁解锁；ReentrantLock 是类，需要手动 lock/unlock' },
    { q: '线程池的核心参数？', a: '核心线程数、最大线程数、存活时间、工作队列、线程工厂、拒绝策略' },
    { q: 'ThreadLocal 的原理？', a: '每个线程有自己的变量副本，通过 ThreadLocalMap 存储' },
    { q: '什么是 CAS？', a: 'Compare And Swap，比较并交换，乐观锁的实现方式' },
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
          🔥 并发编程面试题
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
