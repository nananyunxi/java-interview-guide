# Java 基础 - HashMap 面试题

## 1. HashMap 的底层数据结构是什么？

**答案**：
- JDK 1.7：数组 + 链表
- JDK 1.8：数组 + 链表 + 红黑树

**详细解析**：
HashMap 底层是一个 Node 数组，每个 Node 是一个链表节点。当链表长度超过 8 且数组长度超过 64 时，链表会转换为红黑树，提高查询效率从 O(n) 到 O(log n)。

**记忆要点**：
- 1.7 只有链表，1.8 加了红黑树
- 链表转红黑树：长度>8 且数组>64
- 红黑树转链表：长度<6

---

## 2. HashMap 的 put 方法执行过程？

**答案**：
1. 计算 key 的 hash 值
2. 根据 hash 值计算数组下标
3. 如果该位置为空，直接插入
4. 如果不为空，遍历链表/红黑树
5. 如果 key 已存在，覆盖 value
6. 如果 key 不存在，插入链表头部
7. 检查是否需要扩容

**记忆要点**：
- hash 计算 → 找位置 → 判空 → 插入/覆盖 → 扩容

---

## 3. HashMap 的扩容机制？

**答案**：
- 默认容量：16
- 负载因子：0.75
- 扩容阈值：容量 × 负载因子
- 扩容方式：2 倍扩容，重新 hash 分布

**详细解析**：
当元素个数超过阈值时，HashMap 会扩容为原来的 2 倍，并重新计算每个元素的位置。扩容是一个耗时的操作，所以初始化时指定合适的容量可以提高性能。

**记忆要点**：
- 默认 16，负载 0.75，阈值 12
- 2 倍扩容，重新 hash

---

## 4. HashMap 和 Hashtable 的区别？

| 对比项 | HashMap | Hashtable |
|--------|---------|-----------|
| 线程安全 | 否 | 是（synchronized） |
| null 键值 | 允许 | 不允许 |
| 效率 | 高 | 低 |
| 继承 | AbstractMap | Dictionary |

**记忆要点**：
- HashMap 不安全但快，Hashtable 安全但慢
- HashMap 允许 null，Hashtable 不允许

---

## 5. HashMap 和 ConcurrentHashMap 的区别？

**答案**：
- **HashMap**：非线程安全，单线程环境使用
- **ConcurrentHashMap**：线程安全，多线程环境使用

**ConcurrentHashMap 实现原理**：
- JDK 1.7：分段锁（Segment）
- JDK 1.8：CAS + synchronized + 链表 + 红黑树

**记忆要点**：
- HashMap 不安全，ConcurrentHashMap 安全
- 1.7 分段锁，1.8 CAS+synchronized

---

## 6. HashMap 为什么线程不安全？

**答案**：
1. **JDK 1.7**：扩容时可能形成环形链表，导致死循环
2. **JDK 1.8**：虽然解决了死循环，但仍有数据覆盖问题

**场景**：
多线程同时 put 时，可能导致元素丢失或数据不一致。

**解决方案**：
使用 ConcurrentHashMap 或 Collections.synchronizedMap()

**记忆要点**：
- 1.7 会死循环，1.8 会丢数据
- 多线程用 ConcurrentHashMap

---

## 7. HashMap 的 hash 方法是如何实现的？

**答案**：
```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

**解析**：
将 hashCode 的高 16 位与低 16 位进行异或运算，使 hash 值分布更均匀，减少 hash 碰撞。

**记忆要点**：
- 高低 16 位异或
- 让分布更均匀

---

## 8. HashMap 的长度为什么是 2 的幂次方？

**答案**：
为了让 hash 值分布更均匀，同时提高计算效率。

**详细解析**：
- 计算下标时使用 `(n-1) & hash` 而不是 `hash % n`
- 位运算比取模运算效率高
- 2 的幂次方保证 (n-1) 的二进制全是 1，hash 值能均匀分布

**记忆要点**：
- 位运算快：& 比 % 快
- 分布均匀：(n-1) 全是 1
