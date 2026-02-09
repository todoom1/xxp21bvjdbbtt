document.getElementById("st").addEventListener("click", function() {
	window.open(atob("aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTI3NDE1JnNlbGZQbGFuSWQ9MTA3NTY"), '_blank');
	});
document.getElementById("ff").addEventListener("click", function() {
	window.open(atob("aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTc1NTE3NjM0ODMyNjY5MjYmc2VsZlBsYW5JZD0xNzQ1MjU="), '_blank');
	});
document.getElementById("yh").addEventListener("click", function() {
	window.open(atob("aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9MDFENzhDREYtRTk0Mi00N0JDLUFFOTUtRjEyMzQyNTQzQkZD"), '_blank');
	});
document.getElementById("zt").addEventListener("click", function() {
	window.open(atob("aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnB0PUYzREEzOUQyLTc5M0UtOTU1Qy1BMUM0LTNGMjUxNDY4RUJBNQ"), '_blank');
	});
document.getElementById("jl").addEventListener("click", function() {
	window.open(atob("aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjQwMDMmc2VsZlBsYW5JZD04MzQ"), '_blank');
	});
document.getElementById("sj").addEventListener("click", function() {
	window.open(atob("aHR0cHM6Ly94anZ1ZWIuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEwJnRvcElkPTMxMTMyMzUN"), '_blank');
	});
document.getElementById("t1").addEventListener("click", function() {
    window.open(atob("aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTUyNzQxOQ0="), '_blank');
});
document.getElementById("stn").innerHTML = ("胜天国际");
document.getElementById("ffn").innerHTML = ("非凡娱乐");
document.getElementById("yhn").innerHTML = ("壹号娱乐");
document.getElementById("ztn").innerHTML = ("征途国际");
document.getElementById("jln").innerHTML = ("君临国际");
document.getElementById("sjn").innerHTML = ("赏金国际");
document.getElementById("t1n").innerHTML = ("TOP1体育");
document.getElementById("2").innerHTML = ("十年信誉平台推荐");
document.getElementById("1").innerHTML = ("XXP8.MY");
const texts = ["祝您新年快乐！", "马到成功", "XXP8.MY"];
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
let currentIndex = 0;

if (month === 2 && date === 17) {
    alert("🎇祝您新年快乐！🎇"); 
setInterval(() => {
document.getElementById("1").innerHTML = texts[currentIndex];
currentIndex = (currentIndex + 1) % texts.length;
}, 2026);

} else if (month === 3 && date === 3) {
    alert("🎇祝您元宵节快乐！🎇");
}
