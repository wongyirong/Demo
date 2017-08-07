$(window).on('load',function(){
	waterfall();
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(key, value) {
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				var oImag=$('<img>').attr('src', 'img/'+$(value).attr('src')).appendTo($(oPic));
			})
			waterfall();
		}
	})
})
function waterfall() {
	var $box = $('#main>div');
	var w = $box.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$box.each(function(index, el) {
		/*console.log(index);*/
		var h = $box.eq(index).outerHeight();
		if(index<cols) {
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null, hArr);
			var minHIndex=$.inArray(minH, hArr);
			$(el).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=$box.eq(index).outerHeight();
		}
	})
}

function checkScrollSlide(){
	var $lastBox = $('#main>div').last();
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;
}
