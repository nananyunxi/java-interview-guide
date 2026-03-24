# Java 面试宝典项目 - 完整备份文档

**项目名称**: Java 开发面试宝典网站
**创建时间**: 2026-03-22
**最后更新**: 2026-03-25 00:16
**维护者**: 小雅 (洛云的 AI 全能助手)
**当前状态**: Phase 9 完成 - 已部署上线

---

## 📊 一、项目概览

### 1.1 项目信息

| 项目 | 详情 |
|------|------|
| 项目名称 | Java 开发面试宝典 |
| 项目类型 | Next.js 静态网站 |
| 主要功能 | 面试技巧、面试题目、八股文解析 |
| 部署平台 | Vercel |
| 代码仓库 | GitHub |
| 访问地址 | https://java-interview-guide.vercel.app |

### 1.2 项目链接

| 平台 | 链接 | 说明 |
|------|------|------|
| GitHub | https://github.com/nananyunxi/java-interview-guide | 代码仓库 |
| Vercel | https://vercel.com/nananyunxis-projects/java-interview-guide | 部署控制台 |
| 生产环境 | https://java-interview-guide.vercel.app | 正式访问地址 |

---

## 🔐 二、平台注册登录信息

### 2.1 GitHub

| 项目 | 信息 |
|------|------|
| 账号 | nananyunxi |
| 仓库 | java-interview-guide |
| 仓库 URL | https://github.com/nananyunxi/java-interview-guide |
| 访问 Token | 已配置在本地 (不公开) |
| 分支 | main |

### 2.2 Vercel

| 项目 | 信息 |
|------|------|
| 账号 | nananyunxi (关联 GitHub) |
| 项目名 | java-interview-guide |
| 项目 ID | 7SbeugYS2FT2DjvC3sGhTNb12eNg |
| 框架 | Next.js |
| 构建命令 | `npm run build` |
| 输出目录 | `.next` |
| 自动部署 | 已启用 (push 到 main 自动部署) |

### 2.3 GitHub Secrets 配置

| Secret 名称 | 说明 | 当前值 |
|------------|------|--------|
| `CONTENT_API_KEY` | 内容 API 密钥 | 未配置 (可选) |

### 2.4 GitHub Variables 配置

| Variable 名称 | 说明 | 当前值 |
|--------------|------|--------|
| `UPDATE_MODE` | 更新模式 | `demo` (默认) |

---

## 📁 三、项目结构

```
java-interview-guide/
├── .github/
│   └── workflows/
│       ├── auto-update.yml      # 自动内容更新 (每 5 天)
│       └── deploy-check.yml     # 部署检查
├── content/                      # 内容目录 (自动更新)
│   ├── java-basic/
│   ├── spring/
│   ├── database/
│   └── UPDATE_REPORT.md
├── public/
│   ├── manifest.json            # PWA 配置
│   └── robots.txt               # SEO 配置
├── scripts/
│   ├── fetch-questions.js       # Node.js 更新脚本
│   └── fetch-questions.py       # Python 更新脚本
├── src/
│   └── app/
│       ├── page.tsx             # 首页
│       ├── layout.tsx           # 全局布局
│       └── questions/           # 面试题目页面 (23 个)
│           ├── java-basic/
│           ├── spring/
│           ├── database/
│           ├── microservices/
│           ├── performance/
│           └── others/
├── next.config.js               # Next.js 配置 (性能优化)
├── package.json                 # 依赖配置
├── tailwind.config.js           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
├── PROJECT_BACKUP.md            # 本备份文档
├── CONTENT_UPDATE.md            # 内容更新配置指南
└── README.md                    # 项目说明
```

---

## 🛠️ 四、技术栈与依赖

### 4.1 核心技术

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.1.0 | React 框架 |
| React | 18.2.0 | UI 库 |
| TypeScript | 5.3.0 | 类型系统 |
| Tailwind CSS | 3.4.1 | CSS 框架 |

### 4.2 开发依赖

```json
{
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.0"
  }
}
```

### 4.3 运行环境

| 环境 | 要求 |
|------|------|
| Node.js | >= 20.0.0 |
| npm | >= 9.0.0 |
| Python (可选) | >= 3.11 |

---

## 📝 五、开发记录

### 5.1 Phase 1-7: 基础开发 (2026-03-22 ~ 2026-03-23)

| Phase | 任务 | 状态 | 完成时间 |
|-------|------|------|----------|
| Phase 1 | 项目规划 | ✅ | 03-22 |
| Phase 2 | 内容整理 | ✅ | 03-22 |
| Phase 3 | 技术选型 | ✅ | 03-22 |
| Phase 4 | 环境搭建 | ✅ | 03-22 |
| Phase 5 | 开发网站页面 | ✅ | 03-22~23 |
| Phase 6 | 内容填充 | ✅ | 03-23 |
| Phase 7 | 测试验证 | ✅ | 03-23 |

### 5.2 Phase 8: 页面样式优化 (2026-03-23 ~ 2026-03-24)

| 任务 | 内容 | 状态 | 完成时间 |
|------|------|------|----------|
| 任务 1 | 箭头符号优化 | ✅ | 03-23 |
| 任务 2 | 文字排版优化 | ✅ | 03-23 |
| 任务 3 | 移动端适配 | ✅ | 03-23 |
| 任务 7-9 | PC 端适配 | ✅ | 03-23 |
| 任务 10 | 导航按钮统一 | ✅ | 03-24 |
| 任务 11 | 代码块样式 | ✅ | 03-24 |
| 任务 12 | 颜色方案统一 | ✅ | 03-24 |
| 任务 13 | 加载速度优化 | ✅ | 03-24 |

**提交记录**:
- `a9e461f` Phase 8 完成！修复 bean-lifecycle 语法错误 + 构建成功
- `11c71e7` Phase 8 任务 13: 加载速度优化 (2) - manifest.json + robots.txt
- `4700568` Phase 8 任务 13: 加载速度优化 (1) - next.config.js + layout.tsx
- `49569a8` Phase 8 任务 11 完成：代码块样式优化 (3 个 Others 页面)
- `71f6995` Phase 8 任务 11: 代码块样式优化 (7 个页面)
- `63b2c85` Phase 8 任务 11: 代码块样式优化 (5 个 Java 基础页面)
- `0c62644` Phase 8 任务 10: 导航按钮统一 (5 个 Spring 页面)
- `3e54813` Phase 8 任务 10: 导航按钮统一 (3 个 Spring 页面)
- `e16aa68` Phase 8 任务 7-9: PC 端适配优化 (11 个页面)

### 5.3 Phase 9: 部署上线 (2026-03-24 ~ 2026-03-25)

| 任务 | 状态 | 完成时间 |
|------|------|----------|
| GitHub 仓库创建 | ✅ | 03-24 |
| Vercel 项目创建 | ✅ | 03-24 |
| 自动部署配置 | ✅ | 03-24 |
| GitHub Actions 配置 | ✅ | 03-25 |
| 内容更新脚本 | ✅ | 03-25 |
| 完整备份文档 | ✅ | 03-25 |

**提交记录**:
- `e570036` Phase 9: 配置自动内容更新系统
- `216abb3` Phase 9: 添加 GitHub Actions 工作流
- `a9e461f` Phase 8 完成！构建成功

---

## 🔄 六、自动化配置

### 6.1 GitHub Actions 工作流

#### auto-update.yml (自动内容更新)

| 配置项 | 值 |
|--------|-----|
| 触发条件 | 每 5 天 (UTC 00:00) + 手动触发 |
| 运行环境 | Ubuntu latest |
| Node.js 版本 | 20 |
| Python 版本 | 3.11 |
| 执行脚本 | `node scripts/fetch-questions.js` |
| 自动提交 | 是 (github-actions[bot]) |

#### deploy-check.yml (部署检查)

| 配置项 | 值 |
|--------|-----|
| 触发条件 | push 到 main + PR |
| 运行环境 | Ubuntu latest |
| 执行步骤 | checkout → setup-node → npm ci → npm run build |
| 产物保留 | 7 天 |

### 6.2 Vercel 自动部署

| 配置项 | 值 |
|--------|-----|
| 关联仓库 | nananyunxi/java-interview-guide |
| 关联分支 | main |
| 触发条件 | push 到 main |
| 构建命令 | `npm run build` |
| 输出目录 | `.next` |
| 自动别名 | 根据 commit 生成预览域名 |

---

## 📈 七、项目统计

### 7.1 页面统计

| 分类 | 页面数量 |
|------|----------|
| 面试技巧 | 5 个 |
| Java 基础 | 约 8 个 |
| Java 核心 | 约 5 个 |
| Spring | 6 个 |
| 微服务 | 4 个 |
| 数据库 | 约 4 个 |
| 性能优化 | 约 4 个 |
| 其他 | 5 个 |
| **总计** | **约 40+ 个页面** |

### 7.2 性能指标

| 指标 | 数值 |
|------|------|
| 首屏 JS | 83.6 kB |
| 页面总数 | 23 个静态页面 |
| 构建时间 | ~30 秒 |
| Lighthouse 分数 | 待测试 |

---

## 🎯 八、待优化功能 (长期任务)

### 8.1 内容优化

- [ ] 接入真实面试题库 API
- [ ] 添加题目详细解析
- [ ] 添加题目难度标注
- [ ] 添加题目关联推荐
- [ ] 支持题目搜索功能
- [ ] 支持题目收藏功能

### 8.2 功能增强

- [ ] 用户登录系统
- [ ] 答题模式/测验功能
- [ ] 学习进度追踪
- [ ] 错题本功能
- [ ] 面试模拟功能

### 8.3 性能优化

- [ ] 图片懒加载
- [ ] 代码分割优化
- [ ] CDN 加速配置
- [ ] 缓存策略优化
- [ ] SEO 进一步优化

### 8.4 运营支持

- [ ] 访问统计 (Google Analytics)
- [ ] 错误监控 (Sentry)
- [ ] 用户反馈系统
- [ ] 自定义域名配置
- [ ] HTTPS 证书配置

---

## 📞 九、联系方式

| 角色 | 说明 |
|------|------|
| 项目负责人 | 老大 (nananyunxi) |
| 技术维护 | 小雅 (AI 助手) |
| 部署平台 | Vercel |
| 代码托管 | GitHub |

---

## 📋 十、快速操作指南

### 10.1 本地开发

```bash
# 克隆仓库
git clone https://github.com/nananyunxi/java-interview-guide.git
cd java-interview-guide

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 本地预览
npm start
```

### 10.2 手动触发更新

1. 进入 GitHub 仓库
2. 点击 **Actions** 标签
3. 选择 **Auto Update Content**
4. 点击 **Run workflow**
5. 选择分支 (main)
6. 点击运行

### 10.3 查看部署状态

1. 进入 Vercel 控制台
2. 选择项目 `java-interview-guide`
3. 查看 **Deployments** 标签
4. 查看最新部署状态

### 10.4 访问生产环境

- 正式地址：https://java-interview-guide.vercel.app

---

## 📅 十一、重要日期

| 日期 | 事件 |
|------|------|
| 2026-03-22 | 项目启动 |
| 2026-03-23 | 完成基础开发 |
| 2026-03-24 | Phase 8 样式优化 |
| 2026-03-25 | Phase 9 部署上线 |
| 每 5 天 | 自动内容更新 |

---

## 🔒 十二、安全注意事项

1. **Token 安全**: GitHub Token 已加密存储，不要明文提交
2. **Secrets 管理**: API 密钥等敏感信息使用 GitHub Secrets
3. **访问控制**: Vercel 项目仅限授权人员访问
4. **备份策略**: 本地 + GitHub + Vercel 三重备份

---

**文档版本**: 1.0
**最后更新**: 2026-03-25 00:16
**下次审核**: 2026-04-01

---

*此文档由小雅自动生成并维护*
