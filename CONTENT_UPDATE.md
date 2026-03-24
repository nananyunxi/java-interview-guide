# 内容更新配置指南

本文档说明如何配置自动内容更新功能。

---

## 📋 配置步骤

### 1. GitHub Secrets 配置

进入仓库 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

#### 必需配置（可选，用于扩展）

| Secret 名称 | 说明 | 示例值 |
|------------|------|--------|
| `CONTENT_API_KEY` | 内容 API 密钥（如有） | `your_api_key_here` |

#### 变量配置（可选）

| Variable 名称 | 说明 | 默认值 |
|--------------|------|--------|
| `UPDATE_MODE` | 更新模式 | `demo` |

**UPDATE_MODE 说明**：
- `demo` - 使用示例数据（默认）
- `full` - 使用完整数据源（需要配置 API）

---

## 🚀 测试更新

### 方式 1：手动触发

1. 进入仓库 → **Actions** 标签
2. 选择 **"Auto Update Content"** 工作流
3. 点击 **"Run workflow"**
4. 选择分支（main）
5. 点击绿色按钮运行

### 方式 2：自动触发

工作流会每 5 天自动运行一次（UTC 时间 00:00，即北京时间 08:00）

---

## 📁 输出内容

更新后会在 `content/` 目录生成以下结构：

```
content/
├── java-basic/
│   ├── HashMap 和 Hashtable 的区别.md
│   └── ArrayList 和 LinkedList 的适用场景.md
├── spring/
│   └── Spring Bean 的作用域有哪些.md
├── database/
│   └── MySQL 索引失效的场景.md
└── UPDATE_REPORT.md
```

---

## 🔧 自定义数据源

### 修改脚本

编辑 `scripts/fetch-questions.js` 或 `scripts/fetch-questions.py`：

```javascript
// 示例：添加新的题库数据
const SAMPLE_QUESTIONS = {
  'java-basic': [
    {
      title: '新的面试题目？',
      answer: '答案内容',
      tags: ['标签 1', '标签 2'],
      source: '来源'
    }
  ],
  // 添加更多分类...
};
```

### 接入真实 API

在脚本中替换 `fetchQuestionsDemo()` 函数：

```javascript
async function fetchQuestionsFull() {
  const response = await fetch('https://api.example.com/questions', {
    headers: {
      'Authorization': `Bearer ${process.env.CONTENT_API_KEY}`
    }
  });
  const data = await response.json();
  // 处理数据并保存
}
```

---

## 📊 查看更新日志

每次更新会生成 `content/UPDATE_REPORT.md` 报告，包含：
- 更新时间
- 更新模式
- 更新数量
- 涉及分类

---

## ⚠️ 注意事项

1. **首次运行**：建议先手动触发测试，确认无误后再启用自动运行
2. **内容审核**：自动更新的内容建议审核后再生成网站页面
3. **频率限制**：如使用外部 API，注意 API 调用频率限制
4. **提交历史**：每次更新会生成一次 Git 提交

---

## 💡 最佳实践

1. **Demo 模式起步**：先用示例数据测试流程
2. **逐步扩展**：熟悉后再接入真实数据源
3. **定期审核**：每周检查更新内容质量
4. **备份内容**：重要内容建议本地备份

---

## 🆘 故障排查

### 工作流失败

1. 检查 **Actions** 标签中的运行日志
2. 确认 Secrets 配置正确
3. 验证脚本语法无误

### 内容未更新

1. 检查脚本是否正常执行
2. 确认 `content/` 目录有写入权限
3. 查看 Git 提交历史

---

**最后更新**: 2026-03-25
**维护者**: 小雅
