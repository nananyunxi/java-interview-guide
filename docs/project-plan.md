# Java 开发面试宝典网站 - 项目开发方案

创建时间：2026-03-22 05:21
项目负责人：小雅

---

## 一、项目概述

### 1.1 项目目标
开发一个 Java 开发面试宝典网站，包含面试技巧、面试题目、八股文，支持自动更新，部署到免费平台。

### 1.2 核心功能
- 面试技巧（自我介绍、项目经验、技术回答）
- 面试题目（按知识点分类）
- 题目解析（易懂、方便记忆）
- 搜索功能
- 每 5 天自动更新知识库

---

## 二、技术选型

### 2.1 技术栈
| 模块 | 技术 | 说明 |
|------|------|------|
| 前端框架 | Next.js 14 + React | 快速开发、SEO 友好、SSR |
| UI 样式 | Tailwind CSS | 清新简洁、响应式 |
| 内容存储 | Markdown 文件 | 易编辑、版本控制 |
| 代码托管 | GitHub | 免费、支持 Actions |
| 部署平台 | Vercel | 免费、自动部署 |
| 自动更新 | GitHub Actions | 定时任务 |

### 2.2 平台依赖（仅 2 个）
| 平台 | 用途 | 费用 |
|------|------|------|
| GitHub | 代码仓库 + 内容存储 + 自动更新 | 免费 |
| Vercel | 自动部署托管 | 免费 |

---

## 三、项目结构

```
java-interview-guide/
├── docs/               # 项目文档
│   ├── project-plan.md
│   ├── platform-info.md
│   └── backup-info.md
├── src/                # 源代码
│   ├── app/            # Next.js App Router
│   ├── components/     # 组件
│   └── styles/         # 样式
├── content/            # 面试内容 (Markdown)
│   ├── interview-skills/   # 面试技巧
│   ├── java-basic/         # Java 基础
│   ├── java-core/          # Java 核心
│   ├── spring/             # Spring 生态
│   ├── microservices/      # 微服务
│   ├── database/           # 数据库
│   ├── performance/        # 性能优化
│   └── others/             # 其他
├── deploy/             # 部署配置
│   └── vercel.json
├── backup/             # 备份信息
│   └── all-info.md
├── package.json
└── README.md
```

---

## 四、知识点分类

### 4.1 面试技巧
- 自我介绍模板
- 项目经验讲解
- 技术回答技巧

### 4.2 Java 基础
- 数据类型、运算符、流程控制
- 数组、字符串
- 面向对象（封装、继承、多态）
- 抽象类、接口、异常处理
- 泛型、反射、注解

### 4.3 Java 核心
- 集合框架（List、Set、Map、HashMap、ConcurrentHashMap）
- 并发编程（线程、锁、线程池、volatile、synchronized、AQS）
- JVM（内存结构、GC 算法、类加载、调优）
- IO/NIO（BIO、NIO、AIO、Netty）

### 4.4 Spring 生态
- Spring（IOC、AOP、Bean 生命周期、事务）
- Spring Boot（自动配置、启动流程、Starter）
- Spring Cloud（服务发现、配置中心、网关、熔断）

### 4.5 微服务
- 微服务架构设计、服务拆分
- 分布式事务、服务治理、API 设计

### 4.6 数据库
- MySQL（索引、事务、锁、SQL 调优、执行计划）
- Redis（数据结构、持久化、集群、缓存策略）

### 4.7 性能优化
- JVM 调优、SQL 调优、缓存优化
- 接口优化、并发优化

### 4.8 其他
- Linux 常用命令、Git 使用、Docker 基础、设计模式

---

## 五、执行计划

| 阶段 | 任务 | 预计时间 | 状态 |
|------|------|----------|------|
| Phase 1 | 注册 GitHub + Vercel | 30 分钟 | 待开始 |
| Phase 2 | 搭建项目框架 | 30 分钟 | 待开始 |
| Phase 3 | 收集整理面试内容 | 2-3 小时 | 待开始 |
| Phase 4 | 开发网站页面 | 1-2 小时 | 待开始 |
| Phase 5 | 部署 + 配置自动更新 | 30 分钟 | 待开始 |
| Phase 6 | 整理备份信息发送 | 15 分钟 | 待开始 |

---

## 六、自动更新机制

### 6.1 更新频率
- 每 5 天执行一次
- 增量更新（只补充新内容，不覆盖现有）

### 6.2 实现方式
- GitHub Actions 定时任务
- 爬取热门面试网站
- 去重、筛选、格式化
- 自动提交到 content 目录

---

## 七、备份要求

所有信息必须记录并备份：
- ✅ GitHub 注册信息（邮箱、密码、用户名）
- ✅ Vercel 注册信息（邮箱、密码）
- ✅ 仓库地址
- ✅ 部署访问地址
- ✅ 所有操作步骤记录

---

*此方案由小雅制定，如有疑问随时向老大汇报*
