var reg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Aa-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
console.log(reg.test("http://regexr.com/foo.html?q=bar"));