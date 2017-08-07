window.onload = function() {
	waterfall("main", "box");
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
	window.onscroll = function() {
		if(checkScrollSlide()) {
			var oParent = document.getElementById('main');
			console.log("hahah"+dataInt.data.length);
			for(var i=0;i<dataInt.data.length;i++){
				var oBox = document.createElement('div');
				oBox.className ='box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className ='pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = "img/" + dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall("main", "box");
		}
	}
}

function waterfall(parent, box){
	//将main下所有class为box的元素取出来
	var oParent = document.getElementById(parent);
	var oBox = document.getElementsByClassName(box);
	//console.log(oBox.length);
	//计算显示了列数（页面宽度/box宽度）
	var oBoxW = oBox[0].offsetWidth;
	//console.log(oBoxW);
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	//console.log(cols);
	//设置main的宽度
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';

	var hArr = [];
	for(var i = 0; i < oBox.length; i++){
		if(i < cols){
			hArr.push(oBox[i].offsetHeight);
		}else {
			var minH = Math.min.apply(null, hArr);
			//console.log(minH);
			var index = getMinIndex(hArr, minH);
			oBox[i].style.position = 'absolute';
			oBox[i].style.top = minH + 'px';
			//oBox[i].style.left = oBoxW * index +'px';
			oBox[i].style.left = oBox[index].offsetLeft + 'px';
			hArr[index] += oBox[i].offsetHeight;
		}
	}
	console.log(hArr);
}

function getMinIndex(arr, val) {
	for(var i in arr) {
		if(arr[i] == val){
			return i;
		}
	}
}

function checkScrollSlide() {
	var oParent = document.getElementById('main');
	var oBox = document.getElementsByClassName('box');
	var lastBoxH = oBox[oBox.length-1].offsetTop + Math.floor(oBox[oBox.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scrollTop);
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	console.log(height);
	return (lastBoxH < scrollTop+height)?true:false;
}