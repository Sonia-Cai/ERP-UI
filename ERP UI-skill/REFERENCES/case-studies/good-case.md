# 优秀案例索引（Good Case）

本页收录与 **ERP UI Skill**（`design-tokens`、`navigation-shell`、`form-standard`、`view-form-standard`、`business-components`、`page-list`、`view-form-reference` 等）对齐的可对照案例，供还原页面或 Agent 检索。**查看类表单**落地稿两种：**§4** 纯只读 KV（库存调拨）；**§5** 摘要 KV + **一级标题 + 二级灰底卡片**（产品 · SKU 包装尺寸，对齐 Figma「上下布局」稿）。

**静态 HTML 示例（`ERP UI-skill/demos/`）：** **§2** 渠道调拨列表 + **新增** + **查看**（`channel-transfer-view.html`，`channel-transfer-new.html` 为仅新增抽屉参考）· **§4** 同文件 §2 之查看抽屉 · **§5** SKU 包装尺寸详情（`sku-packaging-dimensions-detail-view.html`）

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

## 2. 渠道调拨：列表 + 新增 + 查看（静态 HTML Demo）

### 预览链接

在 **`ERP UI-skill/demos/`** 用浏览器打开（**主入口**：列表工具栏「新增」打开编辑抽屉，「查看」打开只读 KV 抽屉）：  
**[channel-transfer-view.html](../../demos/channel-transfer-view.html)**  
仅新增抽屉骨架（SKU 列表占位页）：**[channel-transfer-new.html](../../demos/channel-transfer-new.html)**

（路径相对于本文件：`REFERENCES/case-studies/` → 上两级到 **`ERP UI-skill/`**，再进入 **`demos/`**。）

### 布局与规范对齐说明（AI 可识别）

1. **壳层**：一级侧栏（`erp-nav-rail-figma.js`）+ 顶栏页签 + 右上区，见 `navigation-shell.md`；侧栏当前模块为**库存**（`ERP_NAV_ACTIVE_KEY = 'inventory'`）。  
2. **列表区**：面包屑/工具栏/表格骨架，见 `page-list.md`。  
3. **抽屉表单**：SKU 搜索下拉（双行、400px）、From 筛选 + 渠道库存**子层级**灰底白卡表格（见 `form-standard.md` 第 12 节）、To 渠道级联、调拨日期、审批人搜索下拉、备注、底栏按钮顺序（取消 / 新增下一条 / 确定）。  
4. **业务组件**：SearchSelect / ChannelCascader 行为见 `business-components.md`。  
5. **同模块只读查看**：与上同一 HTML 内「查看」链接触发的只读 KV 抽屉，亦见 **§4**。  
6. **查看类 + 二级卡片（产品域）**：列表 + 抽屉内分段与灰底卡片见 **§5**（`sku-packaging-dimensions-detail-view.html`）。

---

## 3. 查看类表单（画板 / Demo 参考）

### 规范与参考分工

- **查看类总则**（只读 KV、复合版式、两种抽屉落地、列排布等）：[`view-form-standard.md`](../view-form-standard.md)。  
- **抽屉宽度等与编辑共用**：`form-standard.md` **§4.1**；一级标题行 / 分割线等与编辑共用：**`form-standard.md` §2.4**。  
- **两则 Figma 画板的像素拆解、列表示例、链接**：[`view-form-reference.md`](../view-form-reference.md)  

做「查看详情」「主从列表 + 只读抽屉」类 **Demo** 时：先对齐 **`view-form-standard.md`** 与 **`form-standard.md`**（Token、禁则、共用 §2.4）；再以 **`view-form-reference.md`** 对画板像素。  
**已落地的参考实现**（库存 · 海外仓渠道调拨 · 查看）：见 **§4** — **`channel-transfer-view.html`**。  
**已落地的参考实现**（产品 · SKU包装尺寸 · 查看 + 二级卡片）：见 **§5** — **`sku-packaging-dimensions-detail-view.html`**。

---

## 4. 查看渠道调拨记录（只读抽屉 Demo）

与 **§2** 同一业务域（库存 · 海外仓渠道调拨）的**只读查看**对照稿：列表骨架 + 右侧抽屉内**连续**只读 KV（含双列行）、底栏 **取消 / 确定**，可直接作为「查看类表单」**形态一**静态 Demo 母版扩展（形态定义见 **`view-form-standard.md` §4**）。

### 预览链接

在 **`ERP UI-skill/demos/`** 用浏览器打开：  
**[channel-transfer-view.html](../../demos/channel-transfer-view.html)**

### 布局与规范对齐说明（AI 可识别）

1. **业务**：库存 · 海外仓渠道调拨管理 · **查看**渠道调拨记录；侧栏 **`ERP_NAV_ACTIVE_KEY = 'inventory'`**。  
2. **只读 KV**（`view-form-standard.md` **§2**）：**上标题、下详情、均左对齐**；**标题 → 详情** 垂直间距 **12px**（`--spacing-base-tight`）；**相邻字段块** 垂直间距 **24px**（`--spacing-loose`）。**SKU** 独占一块；**From / To**、**仓库名称 / 仓库编码**、**调拨数量 / 单据状态** 各为**双列一行**（列间距 **24px**），每格内仍为上下结构；**审批人**、**备注** 各占一块。字段标题色 **`--color-gray-7`**；无输入框外观。  
3. **抽屉**（`view-form-standard.md` **§3.2**；宽度 **`form-standard.md` §4.1**）：标题栏 **56px**；`width: max-content; max-width: var(--drawer-width-max)`；底栏 **56px**，**确定**为主按钮居右、**取消**为次按钮在左（与操作类底栏习惯一致）。  
4. **列表区**：面包屑 + 工具栏 + 表格 + 操作列「查看」，与 `page-list.md` 列表骨架一致。

---

## 5. SKU 包装尺寸详情（只读抽屉 + 二级卡片 Demo）

**形态二**（摘要 + 一级分段 + 二级灰底卡片）落地稿。与 **`view-form-reference.md`** 画板 **「SKU包装尺寸-详情表单/上下布局」**（Figma `node-id=20-35869`）对齐的静态母版：**产品**模块侧栏、主区 **业务 Tab + 5×240 筛选 + 表工具栏 + 46px 表头 / 68px 数据行**；右侧抽屉 **「详情」** 顶栏，**摘要区**为三列 × 两行的 **上下 KV**，其下 **外箱信息 / 包装信息（最小包装单位）/ 产品** 各为 **`form-standard.md` §2.4** 一级标题行 + **`--color-bg-page`** 二级卡片，卡片内字段同为 **上标题、下详情、12px**，空值 **`—`**；抽屉底栏 **取消 / 确定**（与 **`view-form-standard.md` §3.2** 一致，并与 **`good-case.md` §4** 渠道调拨查看 Demo 对齐）。与 **§4** 的形态对照见 **`view-form-standard.md` §4**。

### 预览链接

在 **`ERP UI-skill/demos/`** 用浏览器打开：  
**[sku-packaging-dimensions-detail-view.html](../../demos/sku-packaging-dimensions-detail-view.html)**
