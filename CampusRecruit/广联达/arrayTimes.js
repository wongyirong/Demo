/**
 * 计算数组中每一项出现的次数，map方法
 */
function times(array) {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            map[array[i]] += 1;
        } else {
            map[array[i]] = 1;
        }
    }
    return map;
}

console.log(times(['a', 'b', 'c', 'a']));