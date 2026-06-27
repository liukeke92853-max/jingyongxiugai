const products = [
  { id: "3822441679328247882", name: "南火火 牛牛乳 发酵酸奶整箱装", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.49%", commission: "29%", activity: "BT抖爆商品池02", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "single", failStage: "single_pool", failReasonCode: 9 },
  { id: "3822441679328247883", name: "南火火 牛牛乳 发酵酸奶低温原味", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", commission: "30%", activity: "bt002", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "single", failStage: "final_compare", failReasonCode: 16 },
  { id: "3822441679328247884", name: "南火火 牛牛牛乳 发酵酸奶家庭分享装", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", promotionServiceRate: "9%", commission: "30%", promotionCommission: "23%", activity: "商品池06", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "dual", failStage: "dual_pool", failReasonCode: 10 },
  { id: "3822441679328247885", name: "南火火 牛牛牛乳 发酵酸奶儿童装", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", promotionServiceRate: "9%", commission: "30%", promotionCommission: "23%", activity: "二级团专属链接BT012", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "dual", failStage: "dual_pool", failReasonCode: 15 },
  { id: "3822441679328247886", name: "南火火 牛牛牛乳 发酵酸奶优惠组合", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", promotionServiceRate: "9%", commission: "30%", promotionCommission: "23%", activity: "bt专属活动3", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "dual", failStage: "final_compare", failReasonCode: 16 },
  { id: "3822441679328247887", name: "南火火 牛牛牛乳 发酵酸奶活动款", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", promotionServiceRate: "9%", commission: "30%", promotionCommission: "23%", activity: "bttf03", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "dual", failStage: "dual_pool", failReasonCode: 12 },
  { id: "3822441679328247888", name: "南火火 牛牛牛乳 发酵酸奶达人专供", shop: "柠檬店铺", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "3%", commission: "30%", activity: "抖老板食品招商005", visible: true, hasOwner: true, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "single", failStage: "none", failReasonCode: 0 },
  { id: "3822441679328247889", name: "南火火 牛牛牛乳 发酵酸奶商超款", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", promotionServiceRate: "9%", commission: "30%", promotionCommission: "23%", activity: "二级团专属链接RT01", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "dual", failStage: "dual_pool", failReasonCode: 13 },
  { id: "3822441679328247890", name: "南火火 牛牛牛乳 发酵酸奶直播款", shop: "南火火饮品旗舰店", sales: 11, leaderSales: 0, ratio: "--", serviceRate: "2.7%", promotionServiceRate: "9%", commission: "30%", promotionCommission: "23%", activity: "BT抖爆商品池01", visible: false, hasOwner: false, inviter: "柠檬", endDate: "2027-05-30", publishDate: "2026-05-30", poolType: "dual", failStage: "dual_pool", failReasonCode: 10 },
];

const failStageText = {
  none: "无",
  pre_check: "前置准入失败",
  single_pool: "单佣池内比佣失败",
  dual_pool: "双佣池内比佣失败",
  final_compare: "单双佣比佣失败",
};

const failReasonText = {
  0: "无",
  1: "其他",
  2: "发布时未勾选",
  3: "计划未发布",
  4: "合作已终止",
  5: "计划已到期",
  6: "商品下架",
  7: "合作佣金小于公开佣金",
  8: "0服务费",
  9: "存在合作佣金更高的计划",
  10: "存在服务费更高的计划",
  11: "存在免费领样的计划",
  12: "存在到期时间更晚的计划",
  13: "存在发布时间更早的计划",
  14: "计划未审核通过或推广链接为空",
  15: "有其他优先级较高的团长计划",
  16: "有其他合作类型优先级较高的计划",
  17: "有其他业务优先级较高的计划",
};

const displayRuleText = "前提：商品未下架；计划严选可见；日常服务费>0且投放期服务费>0；合作佣金≥公开佣金；到期时间≥3天。规则：单佣计划池、双佣计划池分别选出最优计划后，再进行单双佣最终展示判断。池内并列时按团长优先级、佣金/服务费、到期时间、固定分流指定计划、发布时间等规则依次比较。";

const rowsEl = document.querySelector("#productRows");
const filtersEl = document.querySelector("#filters");
const keywordEl = document.querySelector("#keyword");
const searchTypeEl = document.querySelector("#searchType");
const toastEl = document.querySelector("#toast");
const displayPopoverEl = document.querySelector("#displayPopover");
let activeTab = "promoting";
let pinnedStatusId = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatRate(baseRate, promotionRate) {
  if (!promotionRate) return escapeHtml(baseRate);
  return `${escapeHtml(baseRate)} <span class="promotion-rate">（投 ${escapeHtml(promotionRate)}）</span>`;
}

function getSingleBestPlan() {
  return products.find((item) => item.id === "3822441679328247888");
}

function getDualBestPlan() {
  return products.find((item) => item.id === "3822441679328247885");
}

function getFinalDisplayPlan() {
  return getDualBestPlan();
}

function renderRows(list) {
  rowsEl.innerHTML = list.map((item) => {
    const statusClass = item.visible ? "visible" : "hidden";
    const statusText = item.visible ? "显示中" : "未显示";
    const ownerBadge = item.hasOwner ? '<span class="mini-badge red">人</span>' : "";

    return `
      <tr>
        <td class="select-col"><input type="checkbox" aria-label="选择商品 ${item.id}" /></td>
        <td>
          <div class="product-cell">
            <div class="thumb" aria-hidden="true"></div>
            <div class="product-main">
              <div class="product-name" title="${item.name}">${item.name}</div>
              <div class="shop-line">
                ${ownerBadge}
                <span class="mini-badge">店</span>
                <span class="shop-name" title="${item.shop}">${item.shop}</span>
                <span class="mini-badge">↗</span>
              </div>
            </div>
            <span class="id-badge">ID</span>
          </div>
        </td>
        <td>${item.sales}</td>
        <td>${item.leaderSales}</td>
        <td>${item.ratio}</td>
        <td>${formatRate(item.serviceRate, item.promotionServiceRate)}</td>
        <td>${formatRate(item.commission, item.promotionCommission)}</td>
        <td>${item.activity}</td>
        <td><span class="status ${statusClass}" data-id="${item.id}">${statusText}</span></td>
        <td>
          <div class="row-actions">
            <button class="link-button" type="button" data-action="link" data-id="${item.id}">链接</button>
            <button class="link-button disabled" type="button" data-action="delay" data-id="${item.id}">延期</button>
            <button class="link-button" type="button" data-action="toggle" data-id="${item.id}">更新状态</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderDisplayPopover(product) {
  const singleBestPlan = getSingleBestPlan();
  const dualBestPlan = getDualBestPlan();
  const finalDisplayPlan = getFinalDisplayPlan();
  const stage = failStageText[product.failStage] || failStageText.pre_check;
  const reason = failReasonText[product.failReasonCode] || failReasonText[1];

  displayPopoverEl.innerHTML = `
    <div class="popover-summary">
      <p class="popover-reason">未显示原因：${escapeHtml(stage)} - ${escapeHtml(reason)}</p>
      <p class="popover-rule">显示规则：${escapeHtml(displayRuleText)}</p>
    </div>

    <div class="winner-grid">
      ${renderPlanCard("单佣池最优", singleBestPlan, finalDisplayPlan.id === singleBestPlan.id, "single")}
      ${renderPlanCard("双佣池最优", dualBestPlan, finalDisplayPlan.id === dualBestPlan.id, "dual")}
    </div>
  `;
}

function renderPlanCard(title, plan, isFinal, cardType) {
  return `
    <section class="winner-card ${cardType}">
      <div class="winner-card-head">
        <strong>${escapeHtml(title)}</strong>
        <em class="${isFinal ? "final-tag" : ""}">${isFinal ? "最终展示" : "池内最优"}</em>
      </div>
      <div class="winner-card-body">
        <div class="thumb popover-thumb" aria-hidden="true"></div>
        <div class="winner-info">
          <div class="winner-title" title="${escapeHtml(plan.name)}">${escapeHtml(plan.name)}</div>
          <div class="winner-activity">${escapeHtml(plan.activity)}</div>
        </div>
      </div>
      <div class="winner-meta">
        <span>招商顾问：${escapeHtml(plan.inviter)}</span>
        <span>佣金：${formatRate(plan.commission, plan.promotionCommission)}</span>
        <span>服务费：${formatRate(plan.serviceRate, plan.promotionServiceRate)}</span>
        <span>到期：${escapeHtml(plan.endDate)}</span>
        <span>发布：${escapeHtml(plan.publishDate)}</span>
        <button class="link-button winner-card-link" type="button" data-action="link" data-id="${plan.id}">链接</button>
      </div>
    </section>
  `;
}

function positionDisplayPopover(target) {
  const targetRect = target.getBoundingClientRect();
  const width = Math.min(920, window.innerWidth - 32);
  displayPopoverEl.style.width = `${width}px`;
  displayPopoverEl.style.left = "0";
  displayPopoverEl.style.top = "0";

  const popoverRect = displayPopoverEl.getBoundingClientRect();
  const left = Math.min(Math.max(16, targetRect.left - width + targetRect.width + 110), window.innerWidth - width - 16);
  const preferredTop = targetRect.top - popoverRect.height - 18;
  const top = preferredTop > 16 ? preferredTop : targetRect.bottom + 12;

  displayPopoverEl.style.left = `${left}px`;
  displayPopoverEl.style.top = `${top}px`;
}

function showDisplayPopover(target, product) {
  renderDisplayPopover(product);
  displayPopoverEl.classList.add("show");
  displayPopoverEl.setAttribute("aria-hidden", "false");
  positionDisplayPopover(target);
}

function hideDisplayPopover(options = {}) {
  if (pinnedStatusId && !options.force) return;
  displayPopoverEl.classList.remove("show");
  displayPopoverEl.setAttribute("aria-hidden", "true");
}

function setPinnedStatus(status, product) {
  document.querySelectorAll(".status.pinned").forEach((item) => item.classList.remove("pinned"));
  pinnedStatusId = product.id;
  status.classList.add("pinned");
  showDisplayPopover(status, product);
}

function clearPinnedStatus() {
  pinnedStatusId = null;
  document.querySelectorAll(".status.pinned").forEach((item) => item.classList.remove("pinned"));
  hideDisplayPopover({ force: true });
}

function getFilteredProducts() {
  const keyword = keywordEl.value.trim();
  const searchType = searchTypeEl.value;
  if (!keyword) return products;

  return products.filter((item) => {
    if (searchType === "productName") return item.name.includes(keyword);
    if (searchType === "activity") return item.activity.includes(keyword);
    return item.id.includes(keyword);
  });
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toastEl.classList.remove("show");
  }, 1800);
}

filtersEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const filtered = getFilteredProducts();
  renderRows(filtered);
  document.querySelector("#totalText").textContent = `共 ${filtered.length || 0} 条`;
  showToast(`已按当前条件查询，命中 ${filtered.length} 条 mock 数据`);
});

document.querySelector(".tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".tab");
  if (!button) return;

  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  activeTab = button.dataset.tab;
  showToast(`已切换到「${button.textContent}」，当前为 mock 演示态`);
});

rowsEl.addEventListener("click", (event) => {
  const status = event.target.closest(".status.hidden");
  if (status && rowsEl.contains(status)) {
    const product = products.find((item) => item.id === status.dataset.id);
    if (!product) return;

    if (pinnedStatusId === product.id) {
      clearPinnedStatus();
      return;
    }

    setPinnedStatus(status, product);
    return;
  }

  const button = event.target.closest("button");
  if (!button || button.classList.contains("disabled")) return;

  const product = products.find((item) => item.id === button.dataset.id);
  if (!product) return;

  if (button.dataset.action === "toggle") {
    product.visible = !product.visible;
    renderRows(getFilteredProducts());
    showToast(`已将商品 ${product.id} 更新为${product.visible ? "显示中" : "未显示"}`);
    return;
  }

  if (button.dataset.action === "link") {
    showToast(`链接操作待接入真实商品链接，商品ID：${product.id}`);
  }
});

rowsEl.addEventListener("mouseover", (event) => {
  const status = event.target.closest(".status.hidden");
  if (!status || !rowsEl.contains(status)) return;
  if (pinnedStatusId) return;
  const product = products.find((item) => item.id === status.dataset.id);
  if (product) showDisplayPopover(status, product);
});

rowsEl.addEventListener("mouseout", (event) => {
  const status = event.target.closest(".status.hidden");
  if (!status || !rowsEl.contains(status)) return;
  if (event.relatedTarget && status.contains(event.relatedTarget)) return;
  hideDisplayPopover();
});

window.addEventListener("scroll", hideDisplayPopover, true);
window.addEventListener("resize", () => hideDisplayPopover({ force: true }));

renderRows(products);
