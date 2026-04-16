(function() {
    var secretApps = [
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTI3NDE1JnNlbGZQbGFuSWQ9MTA3NTY'},
{img: './png/ffyl.jpg', name: '非凡娱乐', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTc1NTE3NjM0ODMyNjY5MjYmc2VsZlBsYW5JZD0xNzQ1MjU='},
{img: './png/yh.png', name: '壹号娱乐', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9MDFENzhDREYtRTk0Mi00N0JDLUFFOTUtRjEyMzQyNTQzQkZD'},
{img: './png/ztgj.jpg', name: '征途国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnB0PUYzREEzOUQyLTc5M0UtOTU1Qy1BMUM0LTNGMjUxNDY4RUJBNQ'},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjQwMDMmc2VsZlBsYW5JZD04MzQ'},
{img: './png/sjgj.png', name: '赏金国际', xurl: 'aHR0cHM6Ly94anZ1ZWIuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEwJnRvcElkPTMxMTMyMzUN'},
{img: './png/top1.png', name: 'TOP1体育', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTUyNzQxOQ0='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026世界杯<br>点击查看赛程");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "XXP8.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问XXP8！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}