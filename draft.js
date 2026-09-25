 (function () {
  var key = "depei-promo-auth";
  var loginUrl = "http://localhost:5173/login";
  var dashUrl = "http://localhost:5173/dashboard";
  var bar = document.createElement("div");
  bar.className = "draft-bar";
  var button = document.createElement("button");
  button.type = "button";
  bar.appendChild(button);
  document.body.appendChild(bar);
  function loggedIn() {
    try { return localStorage.getItem(key) === "in"; }
    catch (error) { return false; }
  }
  function applyAuth() {
    var on = loggedIn();
    var href = on ? dashUrl : loginUrl;
    document.querySelectorAll("[data-cta], [data-login]").forEach(function (node) {
      node.setAttribute("href", href);
    });
    document.querySelectorAll("[data-login]").forEach(function (node) {
      node.textContent = on ? "工作台" : "登录";
    });
    button.textContent = on ? "已登录，去工作台" : "未登录，去登录";
  }
  button.addEventListener("click", function () {
    try { localStorage.setItem(key, loggedIn() ? "out" : "in"); }
    catch (error) {}
    applyAuth();
  });
  applyAuth();
})();
