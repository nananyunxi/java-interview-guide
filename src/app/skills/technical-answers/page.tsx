import Link from 'next/link';

export default function TechnicalAnswersPage() {
  const content = `# 面试技巧 - 技术回答技巧

## 回答技术问题的框架

### 1. 理解问题（5-10 秒）
- 确认问题核心
- 可以反问澄清
- 组织思路

### 2. 结构化回答（STAR 变形）
- **概念**：这是什么
- **原理**：怎么工作的
- **应用**：用在哪里
- **对比**：和其他方案的区别
- **实践**：自己的使用经验

### 3. 举例说明
- 结合项目经验
- 说明具体场景
- 量化效果

---

## 常见问题类型及回答策略

### 概念类问题
**问题示例**：什么是 HashMap？

**回答策略**：
1. 定义（是什么）
2. 底层结构（怎么实现）
3. 特点（优缺点）
4. 使用场景（何时用）

**示例回答**：
> HashMap 是基于哈希表的 Map 接口实现。JDK 1.8 使用数组 + 链表 + 红黑树，查询效率 O(1)。非线程安全，适用于单线程场景。我在项目中用它缓存用户信息...

---

### 原理类问题
**问题示例**：HashMap 的扩容机制？

**回答策略**：
1. 触发条件（什么时候扩容）
2. 扩容过程（怎么扩容）
3. 性能影响（为什么这样设计）

**示例回答**：
> 当元素个数超过容量×负载因子（默认 16×0.75=12）时触发扩容。扩容为原来的 2 倍，重新 hash 分布。2 倍扩容可以让元素均匀分布，减少碰撞...

---

### 对比类问题
**问题示例**：HashMap 和 ConcurrentHashMap 的区别？

**回答策略**：
1. 分别介绍两者
2. 对比维度（线程安全、性能、实现）
3. 使用场景

**示例回答**：
> HashMap 非线程安全，ConcurrentHashMap 线程安全。JDK 1.7 ConcurrentHashMap 用分段锁，JDK 1.8 用 CAS+synchronized。单线程用 HashMap，多线程用 ConcurrentHashMap...

---

### 实践类问题
**问题示例**：你在项目中如何使用 HashMap？

**回答策略**：
1. 场景描述
2. 为什么选择 HashMap
3. 遇到的问题及解决
4. 效果量化

**示例回答**：
> 在用户缓存模块，我用 HashMap 存储在线用户信息。key 是 userId，value 是用户对象。因为查询多、修改少，HashMap 的 O(1) 查询很适合。后来并发高了，换成 ConcurrentHashMap...

---

## 回答技巧

### 1. 由浅入深
先讲基础概念，再深入原理，最后讲实践

### 2. 适当延伸
展示知识广度，但不要偏离主题

### 3. 诚实承认
不会的问题承认，但可以展示思考过程

### 4. 引导熟悉领域
在回答中提及自己熟悉的知识点，引导面试官提问

---

## 注意事项

1. **不要背诵**：理解后用自己的话讲
2. **不要冗长**：简洁清晰，突出重点
3. **不要绝对**：用"通常"、"一般"等词
4. **要有互动**：观察面试官反应，调整节奏
`;

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/skills" className="text-blue-600 hover:underline">
          ← 返回面试技巧
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          💡 技术回答技巧
        </h1>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap text-gray-700 font-sans">
            {content}
          </pre>
        </div>
      </article>
    </div>
  );
}
