/**
 * 一级侧栏：万物 Logo + 12 个导航项（与 Figma「ERP 导航」顺序、文案一致）。
 * 图标使用本地 SVG：`navigation/icons/nav-{slug}-{default|hover|active}.svg`
 * 资源路径相对**当前 HTML 页面**解析。默认假定 HTML 位于 `ERP UI-skill/demos/`。其他位置请在加载本脚本前设置 `window.ERP_NAV_ASSET_BASE`（以 `/` 结尾），例如仓库根目录下页面可为 `'./ERP UI-skill/ASSETS/navigation/'`。
 *
 * 选中项（与当前 demo 业务模块一致）：
 *   - `window.ERP_NAV_ACTIVE_KEY`：英文 slug 或中文模块名（见下方 KEY_ALIASES）
 *   - 可选 `window.ERP_NAV_ACTIVE_INDEX`：0–11，优先于 KEY（同 slug 多项或需按行号高亮时使用）
 * 须在加载本文件之前赋值；未设置时默认 `purchase`（采购）。
 */
(function (win) {
  'use strict';

  /** 默认：HTML 在 `ERP UI-skill/demos/`；其他位置请预置 `window.ERP_NAV_ASSET_BASE` */
  var ASSET_BASE = win.ERP_NAV_ASSET_BASE || '../ASSETS/navigation/';
  var ICON_BASE = ASSET_BASE + 'icons/';

  /** 业务口头模块名 → 与 icons 文件名一致的 slug */
  var KEY_ALIASES = {
    常用: 'common',
    订单: 'order',
    采购: 'purchase',
    交付: 'delivery',
    库存: 'inventory',
    产品: 'product',
    运营: 'operations',
    品质: 'quality',
    供应商: 'supplier',
    供应商协同: 'supplier',
    物流: 'logistics',
    财务: 'finance',
    工作台: 'workbench',
    客服: 'customer-service',
  };

  var VALID_SLUGS = {
    common: 1,
    order: 1,
    purchase: 1,
    delivery: 1,
    inventory: 1,
    product: 1,
    operations: 1,
    quality: 1,
    supplier: 1,
    logistics: 1,
    finance: 1,
    workbench: 1,
    'customer-service': 1,
  };

  function iconUrl(key, state) {
    return ICON_BASE + 'nav-' + key + '-' + state + '.svg';
  }

  function resolveActiveKey(raw) {
    if (raw == null || raw === '') return 'purchase';
    var s = String(raw).trim();
    if (KEY_ALIASES[s]) return KEY_ALIASES[s];
    var lower = s.toLowerCase();
    if (VALID_SLUGS[lower]) return lower;
    return 'purchase';
  }

  /** 主序列 12 项；「供应商协同」slug `supplier`；第 10 项为客服（`customer-service`），非第二处交付 */
  var NAV_DEF = [
    { key: 'common', title: '常用', label: '常用' },
    { key: 'order', title: '订单', label: '订单' },
    { key: 'purchase', title: '采购', label: '采购' },
    { key: 'delivery', title: '交付', label: '交付' },
    { key: 'inventory', title: '库存', label: '库存' },
    { key: 'product', title: '产品', label: '产品' },
    { key: 'operations', title: '运营', label: '运营' },
    { key: 'quality', title: '品质', label: '品质' },
    { key: 'supplier', title: '供应商协同', label: '供应商协同' },
    { key: 'customer-service', title: '客服', label: '客服' },
    { key: 'logistics', title: '物流', label: '物流' },
    { key: 'finance', title: '财务', label: '财务' },
  ];

  function bindNavIconHover(root) {
    var buttons = root.querySelectorAll('.nav-rail-item');
    for (var i = 0; i < buttons.length; i++) {
      (function (btn) {
        var img = btn.querySelector('.nav-rail-icon-img');
        if (!img) return;
        var key = img.getAttribute('data-nav-key');
        if (!key) return;

        function toDefault() {
          img.src = iconUrl(key, btn.classList.contains('active') ? 'active' : 'default');
        }

        btn.addEventListener('mouseenter', function () {
          if (!btn.classList.contains('active')) img.src = iconUrl(key, 'hover');
        });
        btn.addEventListener('mouseleave', toDefault);
        toDefault();
      })(buttons[i]);
    }
  }

  win.mountErpNavRailFromFigma = function () {
    var root = document.getElementById('erpNavSidebar');
    if (!root) return;

    var idxRaw = win.ERP_NAV_ACTIVE_INDEX;
    var useIndex = typeof idxRaw === 'number' && !isNaN(idxRaw) && idxRaw >= 0 && idxRaw < NAV_DEF.length;
    var activeKey = resolveActiveKey(win.ERP_NAV_ACTIVE_KEY);
    var matchedKey = false;

    var logoHtml =
      '<div class="nav-rail-logo">' +
      '<img class="nav-rail-brand-logo" src="' +
      ASSET_BASE +
      'logo.svg" width="40" height="40" alt="万物"/>' +
      '</div>';

    var buf = [logoHtml];
    for (var j = 0; j < NAV_DEF.length; j++) {
      var it = NAV_DEF[j];
      var active = false;
      if (useIndex) {
        active = j === idxRaw;
      } else {
        if (!matchedKey && it.key === activeKey) {
          active = true;
          matchedKey = true;
        }
      }
      var src = iconUrl(it.key, active ? 'active' : 'default');
      buf.push(
        '<button type="button" class="nav-rail-item' +
          (active ? ' active' : '') +
          '" title="' +
          it.title +
          '"><span class="nav-rail-inner"><span class="nav-rail-icon-slot"><img class="nav-rail-icon-img" data-nav-key="' +
          it.key +
          '" src="' +
          src +
          '" width="20" height="20" alt="" draggable="false"/></span><span class="nav-rail-label">' +
          it.label +
          '</span></span></button>'
      );
    }
    root.innerHTML = buf.join('');
    bindNavIconHover(root);
  };
})(typeof window !== 'undefined' ? window : this);
