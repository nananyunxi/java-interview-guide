import Link from 'next/link';

export default function HashmapPage() {
  const questions = [
    { 
      q: 'HashMap 的底层数据结构是什么？', 
      a: 'JDK 1.7：数组 + 链表；JDK 1.8：数组 + 链表 + 红黑树',
      detail: `**详细解析：**

HashMap 是 Java 中最常用的集合类之一，它的底层数据结构在不同 JDK 版本中有所不同：

**JDK 1.7 的实现：**
- 数组 + 链表
- 数组是主体，链表是为了解决哈希冲突
- 当多个 key 的 hash 值相同时，会形成链表

**JDK 1.8 的改进：**
- 数组 + 链表 + 红黑树
- 当链表长度超过 8 且数组长度超过 64 时，链表转换为红黑树
- 红黑树的查询效率是 O(log n)，比链表的 O(n) 更高效

**为什么这样设计？**
1. 数组提供 O(1) 的快速访问
2. 链表解决哈希冲突
3. 红黑树在链表过长时提供更高的查询效率
4. 平衡了时间和空间复杂度`
    },
    { 
      q: 'HashMap 的 put 方法执行过程？', 
      a: 'hash 计算 → 找位置 → 判空 → 插入/覆盖 → 扩容',
      detail: `**详细解析：**

put 方法是 HashMap 最常用的操作，执行流程如下：

**步骤 1：计算 hash 值**
- 调用 key 的 hashCode() 方法
- 通过 hash() 方法扰动处理，使分布更均匀

**步骤 2：计算数组下标**
- 使用 (n-1) & hash 计算位置
- n 是数组长度，必须是 2 的幂次方

**步骤 3：判断位置是否为空**
- 如果为空，直接创建新节点插入
- 如果不为空，进入步骤 4

**步骤 4：处理哈希冲突**
- 遍历链表/红黑树
- 如果 key 已存在（hash 相同且 equals 为 true），覆盖 value
- 如果 key 不存在，插入到链表头部或红黑树

**步骤 5：检查扩容**
- 如果元素个数超过阈值（容量×负载因子），触发扩容
- 扩容为原来的 2 倍，重新 hash 分布`
    },
    { 
      q: 'HashMap 的扩容机制？', 
      a: '默认容量 16，负载因子 0.75，2 倍扩容，重新 hash 分布',
      detail: `**详细解析：**

HashMap 的扩容是一个耗时操作，理解其机制对性能优化很重要。

**扩容触发条件：**
- 元素个数 > 容量 × 负载因子（默认 16 × 0.75 = 12）
- 即当第 13 个元素插入时触发扩容

**扩容过程：**
1. 创建新数组，容量为原来的 2 倍
2. 重新计算每个元素的 hash 值
3. 将元素重新分配到新数组中
4. 旧数组被垃圾回收

**为什么是 2 倍扩容？**
- 2 倍扩容可以让元素均匀分布
- 避免频繁扩容
- 配合 (n-1) & hash 的位运算优化

**性能影响：**
- 扩容是 O(n) 操作，会影响性能
- 建议在初始化时指定合适的容量
- 避免在循环中频繁扩容`
    },
    { 
      q: 'HashMap 和 Hashtable 的区别？', 
      a: 'HashMap 不安全但快，Hashtable 安全但慢；HashMap 允许 null',
      detail: `**详细解析：**

HashMap 和 Hashtable 都是 Map 接口的实现，但有重要区别：

**1. 线程安全性**
- HashMap：非线程安全，多线程环境需要外部同步
- Hashtable：线程安全，所有方法都用 synchronized 修饰

**2. 性能**
- HashMap：性能更好，没有同步开销
- Hashtable：性能较差，同步锁导致并发度低

**3. null 值支持**
- HashMap：允许 null 作为 key 和 value
- Hashtable：不允许 null，会抛 NullPointerException

**4. 继承关系**
- HashMap：继承 AbstractMap
- Hashtable：继承 Dictionary（已过时）

**5. 迭代器**
- HashMap：fail-fast 迭代器
- Hashtable：enumerator（古老方式）

**推荐使用：**
- 单线程：HashMap
- 多线程：ConcurrentHashMap（优于 Hashtable）`
    },
    { 
      q: 'HashMap 为什么线程不安全？', 
      a: '1.7 会死循环，1.8 会丢数据；多线程用 ConcurrentHashMap',
      detail: `**详细解析：**

HashMap 在多线程环境下会出现严重问题：

**JDK 1.7 的问题：死循环**
- 扩容时采用头插法
- 多线程并发扩容可能导致链表形成环
- get 操作时会无限循环，CPU 100%

**JDK 1.8 的改进：**
- 改用尾插法，解决了死循环问题
- 但仍然存在数据覆盖问题

**数据覆盖问题：**
- 多线程同时 put 相同 key
- 可能导致一个线程的写入被另一个覆盖
- 元素丢失，数据不一致

**解决方案：**
1. **ConcurrentHashMap**（推荐）
   - 分段锁（1.7）或 CAS+synchronized（1.8）
   - 高并发性能

2. **Collections.synchronizedMap()**
   - 包装 HashMap
   - 全表锁，性能较差

3. **Hashtable**
   - 不推荐，性能太差`
    },
    { 
      q: 'HashMap 的 hash 方法实现？', 
      a: '高低 16 位异或，让分布更均匀',
      detail: `**详细解析：**

HashMap 的 hash 方法设计非常巧妙：

**源码实现：**
\`\`\`java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
\`\`\`

**设计原理：**
1. **高低 16 位异或**
   - h >>> 16：将高 16 位移到低 16 位
   - ^ 异或：混合高低位的信息

2. **为什么这样做？**
   - 数组长度较小时（如 16），只有低 4 位参与计算
   - 如果 hashCode 的高位差异大，低位相似，会导致碰撞
   - 异或操作让高位也参与运算，减少碰撞

3. **性能考虑**
   - 位运算比取模运算快
   - 一次异或操作，开销极小

**示例：**
- key1.hashCode() = 00000001 00000000 00000000 00000001
- key2.hashCode() = 00000010 00000000 00000000 00000001
- 如果不扰动，低 4 位相同，会碰撞
- 扰动后，高位信息参与，减少碰撞`
    },
    { 
      q: 'HashMap 的长度为什么是 2 的幂次方？', 
      a: '位运算快，分布均匀',
      detail: `**详细解析：**

HashMap 的容量必须是 2 的幂次方（16, 32, 64...），这是经过精心设计的。

**原因 1：位运算优化**

计算数组下标时：
- 使用 (n-1) & hash 而不是 hash % n
- 位运算 & 比取模 % 快得多

**为什么 2 的幂次方可以这样优化？**
- 当 n = 2^k 时，n-1 的二进制全是 1
- 例如：n=16 (10000), n-1=15 (01111)
- (n-1) & hash 相当于 hash % n

**原因 2：均匀分布**

- 2 的幂次方配合 hash 扰动
- 可以让元素均匀分布在数组中
- 减少哈希碰撞

**如果不是 2 的幂次方：**
- (n-1) & hash 不能正确计算下标
- 需要使用 hash % n，性能下降
- 分布可能不均匀

**源码保证：**
\`\`\`java
// 找到大于等于 cap 的最小 2 的幂次方
static final int tableSizeFor(int cap) {
    int n = cap - 1;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
}
\`\`\``
    },
    { 
      q: 'HashMap 和 ConcurrentHashMap 的区别？', 
      a: 'HashMap 不安全，ConcurrentHashMap 安全；1.7 分段锁，1.8 CAS+synchronized',
      detail: `**详细解析：**

ConcurrentHashMap 是 HashMap 的线程安全版本。

**1. 线程安全性**
- HashMap：非线程安全
- ConcurrentHashMap：线程安全

**2. 实现原理（JDK 1.7）**
- **分段锁（Segment）**
- 将数据分成多个 Segment
- 每个 Segment 独立加锁
- 支持 16 个线程并发（默认）

**3. 实现原理（JDK 1.8）**
- **CAS + synchronized**
- 废弃 Segment，直接使用 Node 数组
- 只对数组头节点加锁
- 锁粒度更细，并发度更高

**4. 性能对比**
| 场景 | HashMap | ConcurrentHashMap |
|------|---------|-------------------|
| 单线程 | 最优 | 略差（约 10%） |
| 多线程 | 不安全 | 最优 |
| 读操作 | O(1) | O(1) |
| 写操作 | O(1) | O(1) + 锁开销 |

**5. 使用建议**
- 单线程：HashMap
- 多线程读多写少：ConcurrentHashMap
- 多线程写多：考虑其他数据结构

**示例代码：**
\`\`\`java
// 线程安全的 HashMap
Map<String, Object> map = new ConcurrentHashMap<>();
map.put("key", "value");
\`\`\``
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ☕ HashMap 面试题
              </h1>
              <p className="text-sm text-gray-500 mt-1">Java 基础 · 高频考点</p>
            </div>
            <Link href="/questions/java-basic" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回 Java 基础
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
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      📖 详细解析
                    </span>
                  </div>
                  <div className="prose max-w-none bg-blue-50 rounded-lg p-6 border border-blue-100">
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
          <Link href="/questions/java-basic" className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-blue-600 font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回 Java 基础
          </Link>
          <Link href="/questions/java-core/thread-pool" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all font-medium flex items-center gap-2">
            下一节：线程池
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
