function merge(arr1, arr2) {
    const result = [];
    let index = 0,
        i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (index % 2 == 0) {
            result[index++] = arr1[i++];
        } else {
            result[index++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        result[index++] = arr1[i++];
    }

    while (j < arr2.length) {
        result[index++] = arr2[j++];
    }

    return result;
}
console.log(merge([1, 2, 3, 4, 5], [4, 5, 6, 7]))