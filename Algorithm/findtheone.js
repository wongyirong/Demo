/*function findtheone() {
	var s1 = "abc";
	var s2 = "cbad";
	var m=0;
	var n=0;
	for(var i = 0; i < s1.length; i++) {
		m = m + s1.charCodeAt(i);
	}
	for(var j =0; j < s2.length; j++) {
		n = n + s2.charCodeAt(j);
	}
console.log(String.fromCharCode(n-m));
}
findtheone()*/

function findtheone(s1,s2) {
	var n = 0;
/*	var i;*/
	for(var i = 0; i < s1.length; i++) {
		n = n + (s2.charCodeAt(i) - s1.charCodeAt(i));
	}
	n = n + s2.charCodeAt(i);//出循环的时候i又加1了
console.log(String.fromCharCode(n));
}
findtheone("abd", "bacd")
