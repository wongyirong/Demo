String.prototype.getSuffixList = function (suffix) {
    var result = "",
        strs = this.split(" "),
        map = {},
        tmp = [],
        res;
    for (var i = strs.length - 1; i >= 0; i--) {
        res = strs[i].indexOf(suffix);
        if (res != -1) {
            if (strs[i] in map) {
                map[strs[i]]++
            } else {
                map[strs[i]] = 1
            }
        }
    }
    var keys = Object.keys(map).sort(function (a, b) { return map[b] - map[a] });
    for (var j = 0; j < keys.length; j++) {
        result += keys[j] + "=" + map[keys[j]] + ","
    }
    return result.substring(0, result.length - 1);//字符串
};
console.log("beaful a beaful hopeful beaful".getSuffixList("ful"));