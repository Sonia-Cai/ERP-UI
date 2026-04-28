# ERP 典型页面布局规范

窗口级壳层（一级侧栏、顶栏多页签、右上状态与个人信息）见 **navigation-shell.md**；本文件描述壳层**之内**的内容区版式。

## 1. 列表页（订单/库存/验货列表）
1. 顶部：面包屑 + 筛选栏
2. 中部：数据表格
3. 底部：分页控件居右
4. 整体边距统一用 `--spacing-loose`

## 2. 表单页（新增/编辑/验货单）
1. 采用24栅格，优先双列布局
2. 标签统一对齐，必填标*
3. 底部固定按钮操作区

## 3. 看板
1. 信息卡片分组展示
2. 基础信息、业务信息、流程记录分区
3. 排版间距全部沿用Token

## 4. 数据看板
1. 卡片式布局、网格均分
2. 字体层级不混乱，配色克制不花哨

## 5. 参考实现（静态 HTML Demo）

与本规范及 **navigation-shell.md**、**form-standard.md**、**view-form-standard.md**、**business-components.md** 对齐的壳层 + 列表 + 抽屉示例，**索引与说明**见 **`case-studies/good-case.md`**（含预览链接与「AI 可识别」结构描述）。

- 渠道调拨（新增）Demo：**[channel-transfer-new.html](../demos/channel-transfer-new.html)**。  
- 渠道调拨（**查看**只读抽屉）Demo：**[channel-transfer-view.html](../demos/channel-transfer-view.html)**。  
- SKU 包装尺寸（**查看** + 二级卡片抽屉）Demo：**[sku-packaging-dimensions-detail-view.html](../demos/sku-packaging-dimensions-detail-view.html)**。  