class Cash {
	constructor(value) {
		this.yuan = Math.floor(value / 100);
		this.jiao = Math.floor((value-100*this.yuan) / 10);
		this.fen = value - 100*this.yuan -10*this.jiao;
		this.all = value;
	}
	add(cash) {
		return new Cash(cash.valueOf() + this.valueOf());
	}
	valueOf() {
		return this.all;
	}
	toString() {
		return `${this.yuan}元${this.jiao}角${this.fen}分`;
	}
	static add(cash1, cash2) {
		return new Cash(cash1.valueOf() + cash2.valueOf());
	}
}
const cash1 = new Cash(105);
const cash2 = new Cash(66);
const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1, cash2);//静态方法只能在类上调用
const cash5 = new Cash(cash1 + cash2);
console.log(`${cash3}`, `${cash4}`, `${cash5}`);

