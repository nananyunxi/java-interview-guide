#!/usr/bin/env node
/**
 * Java 面试题内容更新脚本 (Node.js 版本)
 * 
 * 功能：
 * 1. 从预设数据源获取最新面试题
 * 2. 自动格式化并保存到 content 目录
 * 3. 生成更新报告
 * 
 * 使用方式：
 * node scripts/fetch-questions.js
 * 
 * 配置 Secrets（GitHub）：
 * - CONTENT_API_KEY: 内容 API 密钥（可选）
 * - UPDATE_MODE: 更新模式 (demo/full)
 */

const fs = require('fs');
const path = require('path');

// ============ 配置区域 ============
const CONTENT_DIR = path.join(process.cwd(), 'content');
const UPDATE_MODE = process.env.UPDATE_MODE || 'demo';
const API_KEY = process.env.CONTENT_API_KEY || '';

// 示例题库（demo 模式使用）
const SAMPLE_QUESTIONS = {
  'java-basic': [
    {
      title: 'HashMap 和 Hashtable 的区别？',
      answer: 'HashMap 非线程安全但快，Hashtable 线程安全但慢；HashMap 允许 null 键值',
      tags: ['集合', '高频'],
      source: '2026 面试真题'
    },
    {
      title: 'ArrayList 和 LinkedList 的适用场景？',
      answer: 'ArrayList 适合读多写少，LinkedList 适合频繁插入删除',
      tags: ['集合', '基础'],
      source: '2026 面试真题'
    }
  ],
  'spring': [
    {
      title: 'Spring Bean 的作用域有哪些？',
      answer: 'singleton（单例）、prototype（原型）、request、session、application',
      tags: ['Spring', '核心'],
      source: '2026 面试真题'
    }
  ],
  'database': [
    {
      title: 'MySQL 索引失效的场景？',
      answer: '模糊查询以%开头、类型隐式转换、OR 连接条件、函数操作列等',
      tags: ['MySQL', '索引', '高频'],
      source: '2026 面试真题'
    }
  ]
};

function createContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
    console.log(`✓ 内容目录：${CONTENT_DIR}`);
  }
}

function saveQuestion(category, question) {
  const categoryDir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  
  // 生成文件名
  const filename = question.title.replace(/[？?]/g, '').substring(0, 50) + '.md';
  const filepath = path.join(categoryDir, filename);
  
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toISOString().replace('T', ' ').substring(0, 16);
  
  // 生成 Markdown 内容
  const content = `---
title: ${question.title}
tags: ${question.tags.join(', ')}
source: ${question.source}
updated: ${dateStr}
---

# ${question.title}

## 核心答案

${question.answer}

## 详细解析

> TODO: 添加详细解析内容

## 相关题目

- 待补充关联题目

## 参考资料

- 待补充参考资料

---

*最后更新：${timeStr}*
`;
  
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`  ✓ 保存：${filepath}`);
  return filepath;
}

function fetchQuestionsDemo() {
  console.log('\n📝 Demo 模式 - 使用示例题库');
  console.log('='.repeat(50));
  
  let total = 0;
  for (const [category, questions] of Object.entries(SAMPLE_QUESTIONS)) {
    console.log(`\n📁 分类：${category}`);
    for (const q of questions) {
      saveQuestion(category, q);
      total++;
    }
  }
  
  console.log(`\n✅ 完成！共更新 ${total} 道题目`);
  return total;
}

function fetchQuestionsFull() {
  console.log('\n🌐 完整模式 - 准备获取内容');
  console.log('='.repeat(50));
  
  if (!API_KEY) {
    console.log('⚠️  未配置 CONTENT_API_KEY，切换到 Demo 模式');
    return fetchQuestionsDemo();
  }
  
  // TODO: 实现实际的 API 调用或爬取逻辑
  console.log('⚠️  完整模式尚未实现，使用 Demo 数据');
  return fetchQuestionsDemo();
}

function generateReport(total) {
  const now = new Date();
  const timeStr = now.toISOString().replace('T', ' ').substring(0, 19);
  
  const report = `
# 内容更新报告

**更新时间**: ${timeStr}
**更新模式**: ${UPDATE_MODE}
**更新数量**: ${total} 道题目

## 更新内容

- 新增面试题：${total} 道
- 涉及分类：${Object.keys(SAMPLE_QUESTIONS).length} 个
- 内容目录：\`content/\`

## 下一步

1. 审核新增内容质量
2. 补充详细解析
3. 关联相关题目
4. 部署到 Vercel

---
*自动生成于 GitHub Actions*
`;
  
  const reportPath = path.join(CONTENT_DIR, 'UPDATE_REPORT.md');
  fs.writeFileSync(reportPath, report, 'utf-8');
  console.log(`\n📄 更新报告：${reportPath}`);
}

function main() {
  console.log('🚀 Java 面试题内容更新');
  console.log('='.repeat(50));
  const now = new Date();
  console.log(`时间：${now.toISOString().replace('T', ' ').substring(0, 19)}`);
  console.log(`模式：${UPDATE_MODE}`);
  
  createContentDir();
  
  let total;
  if (UPDATE_MODE === 'full') {
    total = fetchQuestionsFull();
  } else {
    total = fetchQuestionsDemo();
  }
  
  generateReport(total);
  
  console.log('\n✨ 更新完成！');
}

main();
