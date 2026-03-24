#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Java 面试题内容更新脚本
功能：
1. 从预设数据源获取最新面试题
2. 自动格式化并保存到 content 目录
3. 生成更新报告

使用方式：
python scripts/fetch-questions.py

配置 Secrets（GitHub）：
- CONTENT_API_KEY: 内容 API 密钥（可选）
- UPDATE_MODE: 更新模式 (demo/full)
"""

import os
import json
from datetime import datetime
from pathlib import Path

# ============ 配置区域 ============
CONTENT_DIR = Path("content")
UPDATE_MODE = os.getenv("UPDATE_MODE", "demo")  # demo 或 full
API_KEY = os.getenv("CONTENT_API_KEY", "")

# 示例题库（demo 模式使用）
SAMPLE_QUESTIONS = {
    "java-basic": [
        {
            "title": "HashMap 和 Hashtable 的区别？",
            "answer": "HashMap 非线程安全但快，Hashtable 线程安全但慢；HashMap 允许 null 键值",
            "tags": ["集合", "高频"],
            "source": "2026 面试真题"
        },
        {
            "title": "ArrayList 和 LinkedList 的适用场景？",
            "answer": "ArrayList 适合读多写少，LinkedList 适合频繁插入删除",
            "tags": ["集合", "基础"],
            "source": "2026 面试真题"
        }
    ],
    "spring": [
        {
            "title": "Spring Bean 的作用域有哪些？",
            "answer": "singleton（单例）、prototype（原型）、request、session、application",
            "tags": ["Spring", "核心"],
            "source": "2026 面试真题"
        }
    ],
    "database": [
        {
            "title": "MySQL 索引失效的场景？",
            "answer": "模糊查询以%开头、类型隐式转换、OR 连接条件、函数操作列等",
            "tags": ["MySQL", "索引", "高频"],
            "source": "2026 面试真题"
        }
    ]
}

def create_content_dir():
    """创建内容目录"""
    CONTENT_DIR.mkdir(exist_ok=True)
    print(f"✓ 内容目录：{CONTENT_DIR.absolute()}")

def save_question(category: str, question: dict):
    """保存单个问题到 Markdown 文件"""
    category_dir = CONTENT_DIR / category
    category_dir.mkdir(exist_ok=True)
    
    # 生成文件名
    filename = question["title"].replace("？", "").replace("?", "")[:50] + ".md"
    filepath = category_dir / filename
    
    # 生成 Markdown 内容
    content = f"""---
title: {question["title"]}
tags: {", ".join(question["tags"])}
source: {question["source"]}
updated: {datetime.now().strftime("%Y-%m-%d")}
---

# {question["title"]}

## 核心答案

{question["answer"]}

## 详细解析

> TODO: 添加详细解析内容

## 相关题目

- 待补充关联题目

## 参考资料

- 待补充参考资料

---

*最后更新：{datetime.now().strftime("%Y-%m-%d %H:%M")}*
"""
    
    filepath.write_text(content, encoding="utf-8")
    print(f"  ✓ 保存：{filepath}")
    return filepath

def fetch_questions_demo():
    """Demo 模式：使用示例数据"""
    print("\n📝 Demo 模式 - 使用示例题库")
    print("=" * 50)
    
    total = 0
    for category, questions in SAMPLE_QUESTIONS.items():
        print(f"\n📁 分类：{category}")
        for q in questions:
            save_question(category, q)
            total += 1
    
    print(f"\n✅ 完成！共更新 {total} 道题目")
    return total

def fetch_questions_full():
    """完整模式：调用 API 或爬取（需要配置）"""
    print("\n🌐 完整模式 - 准备获取内容")
    print("=" * 50)
    
    if not API_KEY:
        print("⚠️  未配置 CONTENT_API_KEY，切换到 Demo 模式")
        return fetch_questions_demo()
    
    # TODO: 实现实际的 API 调用或爬取逻辑
    # 示例：
    # import requests
    # response = requests.get("https://api.example.com/questions", 
    #                        headers={"Authorization": f"Bearer {API_KEY}"})
    # questions = response.json()
    
    print("⚠️  完整模式尚未实现，使用 Demo 数据")
    return fetch_questions_demo()

def generate_report(total: int):
    """生成更新报告"""
    report = f"""
# 内容更新报告

**更新时间**: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
**更新模式**: {UPDATE_MODE}
**更新数量**: {total} 道题目

## 更新内容

- 新增面试题：{total} 道
- 涉及分类：{len(SAMPLE_QUESTIONS)} 个
- 内容目录：`content/`

## 下一步

1. 审核新增内容质量
2. 补充详细解析
3. 关联相关题目
4. 部署到 Vercel

---
*自动生成于 GitHub Actions*
"""
    
    report_path = CONTENT_DIR / "UPDATE_REPORT.md"
    report_path.write_text(report, encoding="utf-8")
    print(f"\n📄 更新报告：{report_path}")

def main():
    """主函数"""
    print("🚀 Java 面试题内容更新")
    print("=" * 50)
    print(f"时间：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"模式：{UPDATE_MODE}")
    
    create_content_dir()
    
    if UPDATE_MODE == "full":
        total = fetch_questions_full()
    else:
        total = fetch_questions_demo()
    
    generate_report(total)
    
    print("\n✨ 更新完成！")

if __name__ == "__main__":
    main()
