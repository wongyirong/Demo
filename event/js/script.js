window.onload = function() {
	var go = document.getElementById("go");
	var box = document.getElementById("box");
	eventUtil.addHandler(box, "click", function() {
		alert("我是父盒子box");
	});	
	eventUtil.addHandler(go, "click", function(event) {
		e = eventUtil.getEvent(event);
		alert(eventUtil.getElement(e));
		eventUtil.preventDefault(e);
		eventUtil.stopPropagation(e);
	});
	
}

/*function showMes() {
    alert("事件处理程序测试按钮");
}
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
//DOM0级添加
btn2.onclick = function() {
    alert("这是通过DOM0级添加的事件");
};
eventUtil.addHandler(btn5, "click", showMes);*/