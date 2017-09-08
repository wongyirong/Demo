let a = 3, b = 1;
if (a > b) {
	b = a-b;
	a = a-b;
	b = a + b;
} else {
	a = b - a;
	b = b - a;
	a = b + a;
}
console.log("a=" + a + " b=" + b);