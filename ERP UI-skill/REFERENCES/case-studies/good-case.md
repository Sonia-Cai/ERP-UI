# 优秀案例索引（Good Case）

本页收录与 **ERP UI Skill**（`design-tokens`、`navigation-shell`、`form-standard`、`business-components`、`page-list`、`view-form-reference` 等）对齐的可对照案例，供还原页面或 Agent 检索。**查看类表单**落地稿两种：**§4** 纯只读 KV（库存调拨）；**§5** 摘要 KV + **一级标题 + 二级灰底卡片**（产品 · SKU 包装尺寸，对齐 Figma「上下布局」稿）。

**静态 HTML 示例（仓库根目录）：** **§2** 新增渠道调拨（`channel-transfer-new.html`）· **§4** 查看渠道调拨（`channel-transfer-view.html`）· **§5** SKU 包装尺寸详情（`sku-packaging-dimensions-detail-view.html`）

---

## 1. 验货标准表单（截图案例）

### 页面截图

![验货表单](images/good-form-check.png)

### 布局结构文字描述（AI 可识别）

1. 采用 24 栅格双列表单布局  
2. 标签统一顶对齐，必填项红色 `*` 前置  
3. 表单字段按基础信息、货品信息、异常信息分组  
4. 底部操作栏固定居右：主按钮在前、取消在后  

---

## 2. 新增渠道调拨记录（静态 HTML Demo）

### 预览链接

在**仓库根目录**用浏览器打开：  
**[channel-transfer-new.html](../../../channel-transfer-new.html)**

（路径相对于本文件：`REFERENCES/case-studies/` → 上三级到仓库根。）

### 布局与规范对齐说明（AI 可识别）

1. **壳层**：一级侧栏（`erp-nav-rail-figma.js`）+ 顶栏页签 + 右上区，见 `navigation-shell.md`；侧栏当前模块为**库存**（`ERP_NAV_ACTIVE_KEY = 'inventory'`）。  
2. **列表区**：面包屑/工具栏/表格骨架，见 `page-list.md`。  
3. **抽屉表单**：SKU 搜索下拉（双行、400px）、From 筛选 + 渠道库存**子层级**灰底白卡表格（见 `form-standard.md` 第 12 节）、To 渠道级联、调拨日期、审批人搜索下拉、备注、底栏按钮顺序（取消 / 新增下一条 / 确定）。  
4. **业务组件**：SearchSelect / ChannelCascader 行为见 `business-components.md`。  
5. **同模块只读查看**：列表 + 只读 KV 抽屉落地示例见 **§4**（`channel-transfer-view.html`）。  
6. **查看类 + 二级卡片（产品域）**：列表 + 抽屉内分段与灰底卡片见 **§5**（`sku-packaging-dimensions-detail-view.html`）。

---

## 3. 查看类表单（画板 / Demo 参考）

### 规范与参考分工

- **通用规则**（只读 KV、复合版式、两种抽屉落地、抽屉宽度、行高分档原则）：`form-standard.md` **§2.1.3～2.1.5**、**§4.1**。  
- **两则 Figma 画板的像素拆解、列表示例、链接**：[`view-form-reference.md`](../view-form-reference.md)  

做「查看详情」「主从列表 + 只读抽屉」类 **Demo** 时，优先打开 **`view-form-reference.md`** 对照画板，再对齐 **`form-standard.md`** 中的 Token 与禁则。  
**已落地的参考实现**（库存 · 海外仓渠道调拨 · 查看）：见 **§4** — **`channel-transfer-view.html`**。  
**已落地的参考实现**（产品 · SKU包装尺寸 · 查看 + 二级卡片）：见 **§5** — **`sku-packaging-dimensions-detail-view.html`**。

---

## 4. 查看渠道调拨记录（只读抽屉 Demo）

与 **§2** 同一业务域（库存 · 海外仓渠道调拨）的**只读查看**对照稿：列表骨架 + 右侧抽屉内**连续**只读 KV（含双列行）、底栏 **取消 / 确定**，可直接作为「查看类表单」**形态一**静态 Demo 母版扩展（形态定义见 `form-standard.md` **§2.1.5**）。

### 预览链接

在**仓库根目录**用浏览器打开：  
**[channel-transfer-view.html](../../../channel-transfer-view.html)**

### 布局与规范对齐说明（AI 可识别）

1. **业务**：库存 · 海外仓渠道调拨管理 · **查看**渠道调拨记录；侧栏 **`ERP_NAV_ACTIVE_KEY = 'inventory'`**。  
2. **只读 KV**（`form-standard.md` **§2.1.3**）：**上标题、下详情、均左对齐**；**标题 → 详情** 垂直间距 **12px**（`--spacing-base-tight`）；**相邻字段块** 垂直间距 **24px**（`--spacing-loose`）。**SKU** 独占一块；**From / To**、**仓库名称 / 仓库编码**、**调拨数量 / 单据状态** 各为**双列一行**（列间距 **24px**），每格内仍为上下结构；**审批人**、**备注** 各占一块。字段标题色 **`--color-gray-7`**；无输入框外观。  
3. **抽屉**（`form-standard.md` **§2.1.4-B**、**§4.1**）：标题栏 **56px**；`width: max-content; max-width: var(--drawer-width-max)`；底栏 **56px**，**确定**为主按钮居右、**取消**为次按钮在左（与操作类底栏习惯一致）。  
4. **列表区**：面包屑 + 工具栏 + 表格 + 操作列「查看」，与 `page-list.md` 列表骨架一致。

---

## 5. SKU 包装尺寸详情（只读抽屉 + 二级卡片 Demo）

**形态二**（摘要 + 一级分段 + 二级灰底卡片）落地稿。与 **`view-form-reference.md`** 画板 **「SKU包装尺寸-详情表单/上下布局」**（Figma `node-id=20-35869`）对齐的静态母版：**产品**模块侧栏、主区 **业务 Tab + 5×240 筛选 + 表工具栏 + 46px 表头 / 68px 数据行**；右侧抽屉 **「详情」** 顶栏，**摘要区**为三列 × 两行的 **上下 KV**，其下 **外箱信息 / 包装信息（最小包装单位）/ 产品** 各为 **§2.4 一级标题行** + **`--color-bg-page`** 二级卡片，卡片内字段同为 **上标题、下详情、12px**，空值 **`—`**；抽屉底栏 **取消 / 确定**（与 `form-standard.md` **§2.1.4-B** 及 **§4** 渠道调拨查看 Demo 一致）。与 **§4** 的形态对照见 `form-standard.md` **§2.1.5**。

### 预览链接

在**仓库根目录**用浏览器打开：  
**[sku-packaging-dimensions-detail-view.html](../../../sku-packaging-dimensions-detail-view.html)**
