import Link from 'next/link';

export default function ProjectExperiencePage() {
  const content = `# 面试技巧 - 如何讲项目经验

## STAR 法则

### S (Situation) 情境
描述项目背景、业务场景、团队规模

### T (Task) 任务
你负责的具体任务、目标、挑战

### A (Action) 行动
你采取了什么行动、技术方案、如何解决

### R (Result) 结果
量化成果、性能提升、业务价值

---

## 项目介绍模板

### 1. 项目背景（30 秒）
这个项目是 XXX 公司的核心业务系统，主要解决 XXX 问题。系统采用 Spring Cloud 微服务架构，包含 X 个服务模块，日均访问量 XXX 万，数据量 XXX。

### 2. 我的职责（30 秒）
我在这个项目中主要负责 XXX 模块的设计和开发，包括 XXX、XXX、XXX 等功能。同时参与了技术选型、代码 Review、性能优化等工作。

### 3. 技术亮点（1 分钟）
- **技术选型**：采用 Spring Boot + Spring Cloud Alibaba 技术栈
- **架构设计**：使用 XXX 模式，实现 XXX 解耦
- **性能优化**：通过 XXX 优化，接口响应时间从 XXXms 降低到 XXXms
- **难点攻克**：解决了 XXX 问题（如分布式事务、高并发等）

### 4. 成果展示（30 秒）
- 系统稳定性提升到 XXX%
- 接口 QPS 从 XXX 提升到 XXX
- 支撑了 XXX 业务增长
- 获得 XXX 认可/奖项

---

## 常见问题及回答

### Q: 项目中遇到的最大挑战是什么？
**回答模板**：最大的挑战是 XXX 问题。当时情况是 XXX，我分析了 XXX 种方案，最终选择了 XXX，因为 XXX。实施后，问题得到了解决，XXX 指标提升了 XXX。

### Q: 你在项目中的贡献是什么？
**回答模板**：我主要负责 XXX，具体贡献包括：1) 设计了 XXX 架构；2) 实现了 XXX 功能；3) 优化了 XXX 性能；4) 推动了 XXX 落地。

### Q: 如果重新做这个项目，你会怎么改进？
**回答模板**：回顾这个项目，我觉得可以在 XXX 方面改进：1) 当时 XXX 设计不够灵活，现在会采用 XXX；2) 监控告警可以更早介入；3) 文档和代码规范可以更完善。

---

## 注意事项

1. **真实性**：不要编造，面试官会深挖
2. **数据支撑**：用具体数据证明成果
3. **技术深度**：展现你的技术思考
4. **业务理解**：说明技术如何服务业务
5. **准备充分**：提前准备好可能被问的点
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
          📝 如何讲项目经验
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
