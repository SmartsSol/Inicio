try {
  const preloadImageList = window.preLinkImageList;
  preloadImageList[location.pathname].forEach((e) => {
    const t = document.createElement("link");
    (t.href = e),
      (t.rel = "preload"),
      (t.as = "image"),
      document.head.appendChild(t);
  });
} catch (err) {}
