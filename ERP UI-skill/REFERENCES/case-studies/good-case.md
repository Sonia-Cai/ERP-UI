# 优秀案例索引（Good Case）

本页收录与 **ERP UI Skill**（`design-tokens`、`navigation-shell`、`form-standard`、`business-components`、`page-list`、`view-form-reference` 等）对齐的可对照案例，供还原页面或 Agent 检索。

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

---

## 3. 查看类表单（画板 / Demo 参考）

### 规范与参考分工

- **通用规则**（只读 KV、复合版式、抽屉宽度、行高分档原则）：`form-standard.md` **§2.1.3～2.1.4**、**§4.1**。  
- **两则 Figma 画板的像素拆解、列表示例、链接**：[`view-form-reference.md`](../view-form-reference.md)  

做「查看详情」「主从列表 + 只读抽屉」类 **Demo** 时，优先打开 **`view-form-reference.md`** 对照画板，再对齐 **`form-standard.md`** 中的 Token 与禁则。
