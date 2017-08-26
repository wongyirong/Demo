//页面加载完毕后触发
window.onload = function() {
    var obtn = document.getElementById('btn');

    obtn.onclick = function() {
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}