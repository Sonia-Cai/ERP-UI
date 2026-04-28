# ERP UI Skill（万物 ERP B 端界面设计规范）

本目录为规范包**主体**：设计 Token、各专题 Markdown、侧栏资源、**`demos/`** 静态 **HTML Demo** 与 **Skill 总入口**。

**在线仓库（整库）：** [github.com/Sonia-Cai/ERP-UI](https://github.com/Sonia-Cai/ERP-UI)

---

## 本包内结构

| 路径 | 说明 |
|------|------|
| **`META/SKILL.md`** | Agent / 人工总入口：触发词、硬性规则、需求提交模板。 |
| **`REFERENCES/`** | 各专题规范：`form-standard.md`（编辑态表单）、`view-form-standard.md`（查看类）、`view-form-reference.md`（画板与 Demo **数值**参照）、`navigation-shell.md`、`page-list.md` 等。 |
| **`demos/`** | 渠道调拨、SKU 包装尺寸等静态页面与 Token 预览；资源引用相对 **`../ASSETS/`**。 |
| **`ASSETS/`** | `design-tokens.css`、`erp-nav-rail-figma.js`、导航 SVG；子目录说明见 `ASSETS/navigation/README.md`。 |
| **`REFERENCES/case-studies/good-case.md`** | 优秀案例与静态 Demo **索引**（含相对路径链接）。 |

---

## `demos/` 目录（静态页面）

| 文件（相对本 README） | 说明 |
|------|------|
| [`demos/channel-transfer-view.html`](./demos/channel-transfer-view.html) | 渠道调拨：**列表** + 工具栏「**新增**」（编辑抽屉，与下项同源）+「**查看**」（只读 KV）。 |
| [`demos/channel-transfer-new.html`](./demos/channel-transfer-new.html) | 渠道调拨：仅**新增**编辑抽屉（SKU 列表占位页；主流程见上一行）。 |
| [`demos/sku-packaging-dimensions-detail-view.html`](./demos/sku-packaging-dimensions-detail-view.html) | 查看类**形态二**：摘要 + 一级分段 + 二级卡片抽屉。 |
| [`demos/index.html`](./demos/index.html) / [`demos/style.css`](./demos/style.css) | Token 预览（可选）。 |

---

## 本地如何预览 Demo

1. 克隆或下载**整库**；若只拷贝 **`ERP UI-skill/`** 单文件夹，仍可打开 **`demos/`** 内 HTML（相对路径指向本包 **`ASSETS/`**）。  
2. 用浏览器打开 **`demos/`** 下上述 HTML。  
3. 若将页面挪到 **`demos/`** 以外的路径，需在引入 `erp-nav-rail-figma.js` **之前**设置 `window.ERP_NAV_ASSET_BASE`（见 `ASSETS/erp-nav-rail-figma.js` 文件头与 `ASSETS/navigation/README.md`）。

---

## 给设计师 / 产品 / 前端

- **必读入口：** [`META/SKILL.md`](./META/SKILL.md)  
- **表单与版式（编辑态）：** [`REFERENCES/form-standard.md`](./REFERENCES/form-standard.md)（含 §2.4；查看类在 **form-standard** 中见 **§2.1.3** 索引）  
- **查看类表单（设计总则）：** [`REFERENCES/view-form-standard.md`](./REFERENCES/view-form-standard.md)  
- **查看类画板 / Demo 数值参照：** [`REFERENCES/view-form-reference.md`](./REFERENCES/view-form-reference.md)  
- **壳层与侧栏：** [`REFERENCES/navigation-shell.md`](./REFERENCES/navigation-shell.md)  
- **优秀案例索引：** [`REFERENCES/case-studies/good-case.md`](./REFERENCES/case-studies/good-case.md)  
- **变更记录：** [`META/CHANGELOG.md`](./META/CHANGELOG.md)  

在 Cursor 等工具中做界面任务时，可说明：**严格遵循本目录 `ERP UI-skill` 规范**，并附上业务模块名与侧栏选中（`ERP_NAV_ACTIVE_KEY`），详见 [`META/SKILL.md`](./META/SKILL.md)「需求提交模板」。

---

## 技术说明

- **语言：** 规范以中文为主；Token 为 CSS 变量，见 `ASSETS/design-tokens.css`。  
- **`.DS_Store`：** 由仓库根目录 `.gitignore` 忽略；请勿提交系统生成的 `.DS_Store`。

---

## 许可证与归属

规范与资源归属以团队约定为准；对外分发前请确认内部知识产权要求。
