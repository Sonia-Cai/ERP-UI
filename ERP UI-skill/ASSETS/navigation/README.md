# 一级侧栏导航图标（本地 SVG）

## 目录结构

```
navigation/
  logo.svg              # 万物品牌 Logo（与设计稿一致）
  icons/                # 导航项图标（扁平命名）
    nav-{slug}-default.svg   # 未选中（原「未选中」）
    nav-{slug}-hover.svg     # 悬停（原「高亮」）
    nav-{slug}-active.svg    # 选中（原「选中」）
  README.md             # 本说明
```

## `slug` 与中文模块对照

| slug (`nav-{slug}-*.svg`) | 原设计目录名 |
| ------------------------- | ------------ |
| `workbench` | 工作台（预留，当前 Figma 12 项主序列未使用，文件已整理在 `icons/`） |
| `common` | 常用 |
| `order` | 订单 |
| `purchase` | 采购 |
| `delivery` | 交付 |
| `inventory` | 库存 |
| `product` | 产品 |
| `operations` | 运营 |
| `quality` | 品质 |
| `supplier` | 供应商 |
| `customer-service` | 客服（侧栏第 10 项） |
| `logistics` | 物流 |
| `finance` | 财务 |

## 脚本挂载

`erp-nav-rail-figma.js` 按固定 12 项顺序加载 `icons/` 下对应文件；悬停在未选中项上切换为 `-hover.svg`，移出恢复 `-default.svg`；**当前选中项**使用 `-active.svg`。

### 与业务模块一致的侧栏选中（必做于 demo）

在 **引入 `erp-nav-rail-figma.js` 之前** 设置其一即可（见 `META/SKILL.md`「需求提交模板」）：

1. **`window.ERP_NAV_ACTIVE_KEY`**（推荐）  
   - 英文 slug：`inventory`、`purchase`、`delivery` 等（与上表 `slug` 列一致）。  
   - 或中文模块名：`库存`、`采购`、`供应商协同` 等（脚本内已做别名映射）。

2. **`window.ERP_NAV_ACTIVE_INDEX`**（可选，优先于 KEY）  
   - 整数 **0–11**，与侧栏自上而下第几项一致（第 10 项客服为 **9**）；在需按行号高亮或与 KEY 解析冲突时使用。

未设置时默认选中 **`purchase`（采购）**。

若 HTML 不在 **`ERP UI-skill/demos/`**（例如放在仓库根目录），在引入脚本**之前**设置 **`window.ERP_NAV_ASSET_BASE`**（以 `/` 结尾），例如 `'./ERP UI-skill/ASSETS/navigation/'`；位于 **`demos/`** 内的页面可使用脚本默认相对路径，无需设置。
