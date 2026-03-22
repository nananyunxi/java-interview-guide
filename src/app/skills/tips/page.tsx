import Link from 'next/link';

export default function TipsPage() {
  const content = `# 面试技巧 - 面试注意事项

## 面试前准备

### 1. 技术准备
- 复习核心知识点
- 准备项目介绍
- 准备常见问题答案
- 刷题（LeetCode、牛客网）

### 2. 公司调研
- 了解公司业务
- 了解技术栈
- 了解岗位 JD
- 准备针对性问题

### 3. 材料准备
- 简历多份
- 纸笔
- 作品集（如有）
- 证件

### 4. 其他准备
- 提前查路线
- 准备合适服装
- 保证充足睡眠
- 提前到达（10-15 分钟）

---

## 面试中表现

### 1. 第一印象
- 微笑、自信
- 主动打招呼
- 眼神交流
- 坐姿端正

### 2. 沟通技巧
- 听清楚问题再回答
- 语速适中，不要太快
- 逻辑清晰，分点回答
- 不懂的问题诚实承认

### 3. 回答问题
- 先思考 5-10 秒
- 结构化回答（总分总）
- 举例说明
- 展示思考过程

### 4. 提问环节
- 准备 2-3 个问题
- 问团队、技术、发展
- 不要问薪资福利（HR 面再问）

---

## 面试后跟进

### 1. 感谢邮件
- 24 小时内发送
- 感谢面试官时间
- 重申兴趣
- 补充面试中没讲好的点

### 2. 等待回复
- 耐心等待（1-2 周）
- 可以礼貌询问进度
- 继续面试其他公司

### 3. 复盘总结
- 记录被问的问题
- 反思回答不好的地方
- 补充知识点
- 持续改进

---

## 常见误区

### ❌ 不要做的
- 迟到
- 贬低前公司
- 夸大其词
- 打断面试官
- 过于紧张或过于自信
- 只说理论没有实践

### ✅ 要做的
- 准时到达
- 客观评价前公司
- 诚实回答
- 耐心倾听
- 自信但谦虚
- 结合项目经验

---

## 心态调整

1. **面试是双向选择**：公司在选你，你也在选公司
2. **失败是常态**：不要因一次失败否定自己
3. **每次都是学习**：每次面试都有收获
4. **保持平常心**：越放松表现越好
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
          📋 面试注意事项
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
