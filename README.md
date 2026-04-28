# ERP-UI

万物 ERP **B 端界面设计规范（UI Skill）** 与静态 **HTML Demo**，用于设计还原、前端实现与 AI 辅助出稿时对齐同一套 Token、组件与表单规则。

**在线仓库：** [github.com/Sonia-Cai/ERP-UI](https://github.com/Sonia-Cai/ERP-UI)

---

## 仓库里有什么

| 路径 | 说明 |
|------|------|
| **`ERP UI-skill/`** | 规范主体：`META/SKILL.md` 为总入口；`REFERENCES/` 为各专题 Markdown（含 **`view-form-standard.md`** 查看类专章）；`ASSETS/` 含 `design-tokens.css`、侧栏导航脚本与 SVG。 |
| **`channel-transfer-new.html`** | 渠道调拨示例：壳层 + 列表 + 抽屉（SKU、渠道级联、库存子层级等）。 |
| **`channel-transfer-view.html`** | 库存模块**查看类形态一**：列表 + 抽屉内**连续只读 KV**（上下布局、底栏取消/确定）。 |
| **`sku-packaging-dimensions-detail-view.html`** | 产品模块**查看类形态二**：列表 + 抽屉内**摘要 KV + 一级分段 + 二级灰底卡片**（对齐 Figma「上下布局」稿）。 |
| **`index.html`** / **`style.css`** | 设计 Token 预览页（可选）。 |

---

## 本地如何预览 Demo

1. 克隆或下载本仓库到本地。  
2. 用浏览器**直接打开**仓库根目录下的 HTML 文件（双击或用「打开文件」）。  
3. 路径须保持：`HTML` 与 **`ERP UI-skill/`** 在同一父目录下，以便加载 `./ERP UI-skill/ASSETS/...` 中的样式与脚本。

若将 HTML 挪到子目录，需在引入 `erp-nav-rail-figma.js` **之前**设置 `window.ERP_NAV_ASSET_BASE`（见 `ERP UI-skill/ASSETS/erp-nav-rail-figma.js` 文件头与 `ASSETS/navigation/README.md`）。

---

## 给设计师 / 产品 / 前端

- **必读入口：** [`ERP UI-skill/META/SKILL.md`](./ERP%20UI-skill/META/SKILL.md)（触发词、硬性规则、需求模板）。  
- **表单与版式（编辑态）：** [`ERP UI-skill/REFERENCES/form-standard.md`](./ERP%20UI-skill/REFERENCES/form-standard.md)（含一级分割线、一级标题行等 §2.4；查看类索引见 **§2.1.3**）。  
- **查看类表单（设计总则）：** [`ERP UI-skill/REFERENCES/view-form-standard.md`](./ERP%20UI-skill/REFERENCES/view-form-standard.md)（只读 KV、复合版式、两种抽屉形态等，与编辑类规范并列）。  
- **查看类画板 / Demo 数值参照：** [`ERP UI-skill/REFERENCES/view-form-reference.md`](./ERP%20UI-skill/REFERENCES/view-form-reference.md)（Figma 链接与推荐 px，**非**条款替代 `view-form-standard`；落地 HTML 见 **good-case** §4 / §5）。  
- **壳层与侧栏：** [`ERP UI-skill/REFERENCES/navigation-shell.md`](./ERP%20UI-skill/REFERENCES/navigation-shell.md)。  
- **优秀案例索引（含 Demo 链接）：** [`ERP UI-skill/REFERENCES/case-studies/good-case.md`](./ERP%20UI-skill/REFERENCES/case-studies/good-case.md)。  
- **变更记录：** [`ERP UI-skill/META/CHANGELOG.md`](./ERP%20UI-skill/META/CHANGELOG.md)。

在 Cursor 等工具中做界面任务时，可直接说明：**严格遵循本仓库 `ERP UI-skill` 规范**，并附上业务模块名，便于对齐侧栏选中态（`ERP_NAV_ACTIVE_KEY`）等细节。

**请按以下模板发起需求（复制后把【XX-XXX】与业务说明改成你的场景即可）：**

> 请严格遵循我项目里的 B端ERP UI Skill 全套规范，遵循 design-tokens 设计变量、组件规范、表单规范、页面布局规范，同时匹配万物ERP用户画像角色特征，帮我设计：【XX-XXX】 的 demo 样式

更完整的填空说明（含业务模块、侧栏选中等）见 [`ERP UI-skill/META/SKILL.md`](./ERP%20UI-skill/META/SKILL.md) 中的「需求提交模板」。

---

## 技术说明

- **语言：** 规范与说明以中文为主；设计 Token 为 CSS 变量，见 `ERP UI-skill/ASSETS/design-tokens.css`。  
- **`.DS_Store`：** 已加入 `.gitignore`，请勿将 macOS 系统生成的 `.DS_Store` 提交到仓库。

---

## 许可证与归属

规范与资源归属以团队约定为准；对外分发前请确认内部知识产权要求。
