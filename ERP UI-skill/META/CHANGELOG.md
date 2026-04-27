## 2026.05.03
- 优化：`channel-transfer-view.html` 页面标题、抽屉标题与 KV 标签色统一为 **`--color-gray-7`**；KV 标签列去掉 **112px** 固定宽，改为随文案 **`flex: 0 0 auto`**。
- 修正：`channel-transfer-view.html` **页面大标题**、**抽屉顶栏标题**改回 **`--color-text-heading-2`**，与 `channel-transfer-new.html` 操作类抽屉一致；**Gray7 仅用于 KV 字段标签**；列表 `.list-head` 与操作类 Demo 同源并加注释对齐说明。

## 2026.05.02
- 新增：仓库根目录静态 Demo **`channel-transfer-view.html`**（库存-海外仓渠道调拨管理 · 查看渠道调拨记录；只读 KV 抽屉 + 列表骨架）；`case-studies/good-case.md` **§4**、`page-list.md` §5 增加索引链接。

## 2026.05.01
- 重构：将两则 Figma 画板的**具体像素与业务结构**从 `form-standard.md` 迁出，集中到 **`REFERENCES/view-form-reference.md`**（供查看类 Demo / 画板还原）；`form-standard.md` **§2.1.3～2.1.4** 仅保留**查看类表单**通用原则，删除原 **2.1.5** 节。
- 索引：`case-studies/good-case.md` 增加 **§3** 指向 `view-form-reference.md`；`SKILL.md` 触发词改为「查看类表单 / 查看表单 Demo」等泛化表述。

## 2026.04.30
- 新增：`form-standard.md` **2.1.5** 对齐 Figma「SKU包装尺寸-详情表单」画板（`node-id=19-34505`）：主区筛选行 240×32 + **16px** 间距、表工具栏、**46/68** 表头行高与可展开主表、**792px** 只读抽屉与分组卡片内双列 KV；**§11** 增加与 2.1.5 交叉引用。
- 明确：`form-standard.md` **2.1.4-A** / **2.1.5** 注明只读宽表 **98px** 与 **68px** 数据行高为**并存**默认、按场景选用（非全局二选一）。
- 明确：`form-standard.md` **2.1.4-B**、**2.1.5** 与 **4.1**：抽屉**全局上限**为视口 **80%**；**800px / 792px** 仅为对应画板在该页下的**示例目标宽度**，不锁死；**4.1** 补充 Figma 像素标注与实现关系说明。

## 2026.04.24
- 初始化 B端ERP UI Skill 完整规范框架
- 补齐硬性规则、速查表、自查清单
- 建立统一目录与基础模板

## 2026.04.29
- 新增：`form-standard.md` 查看详情表单规范扩展 — **2.1.3** 明确只读 KV 左右布局与 Token 表；**2.1.4** 对齐 Figma「查看详情表单」画板（整页宽表 46/98 行高、只读抽屉 800 示例宽、三列摘要、§2.4 标题/分割线、对照 VS 规则）；**2.2** 补充查看态与编辑态布局不得混用；**§11** 与只读版式交叉引用。

## 2026.04.28
- 删除：仓库根目录静态 Demo `oversea-inbound-new.html`（规范与 `form-standard` §2.4 仍保留于文档）。

## 2026.04.27
- 新增：`REFERENCES/form-standard.md` §2.4 表单版式类型（普通表单 / 一级分割线 / 一级带二级卡片）；一级分割线量化（1px、`--color-border-default`）；一级有标题行（2×16px 主色条 + 16 Semibold 标题、`--spacing-base-tight` 间距）。
- 新增：仓库根目录静态 Demo `oversea-inbound-new.html`（海外仓入库—新增入库记录；发货单→仓库→SKU 级联；抽屉内一级标题 + 分割线样式落地；侧栏 `inventory`）。
- 新增：`META/SKILL.md`「需求提交模板」；`ASSETS/navigation/README.md` / `REFERENCES/navigation-shell.md` 补充侧栏选中 `ERP_NAV_ACTIVE_KEY` / `INDEX` 与 `ERP_NAV_ASSET_BASE`（子目录 HTML）说明。
- 新增：`REFERENCES/case-studies/good-case.md` 优秀案例索引结构；§2 收录渠道调拨 Demo 链接与 AI 可识别说明；`REFERENCES/page-list.md` §5 指向该索引并保留根目录 HTML 链接。
- 优化：`ASSETS/erp-nav-rail-figma.js` 侧栏主序列第 10 项由重复「交付」改为「客服」；支持 `window.ERP_NAV_ASSET_BASE` 覆盖导航资源基路径；文件头注释同步。
- 优化：`channel-transfer-new.html` 预置 `ERP_NAV_ACTIVE_KEY = 'inventory'`；**不**采用一级分割线/标题条（保持纯块间距抽屉结构）。
- 修正：文档与 Demo 中「双交付」相关描述改为「交付 + 客服」；`navigation-shell` §8 主序列列表与侧栏选中说明对齐脚本。

## 后续迭代记录模板
- 新增：xxx组件规范
- 优化：xxx页面布局规则
- 修正：xxx色值/间距不统一问题