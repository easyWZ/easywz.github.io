document.addEventListener("DOMContentLoaded", function () {
  // 拦截文档内所有锚点点击
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默认跳转行为
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // 计算滚动位置
        const targetPosition = targetElement.offsetTop + 500; // 你的固定导航栏高度
        // 平滑滚动到目标位置
        window.scrollTo({
          top: targetPosition,
          //   behavior: "smooth",
        });
        // 可选：更新浏览器地址栏的哈希值
        history.replaceState(null, null, targetId);
      }
    });
  });
});
