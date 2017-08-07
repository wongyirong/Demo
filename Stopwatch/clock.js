var num = 0;
var t;

function timedCount() {
    document.getElementById('txt').value = num;
    num = num + 1;
    t = setTimeout("timedCount()", 1000);
}

function stopCount() {
    clearTimeout(t);
}

function cs() {
    num = 0;
    document.getElementById('txt').value = 0;
}