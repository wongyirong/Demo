var arr = [[1, 2, 4], [7, 2, 3], [1, 3, 3]];
arr.sort(function(x, y){
  return x[0]-y[0];
});
console.log(arr);

arr.sort(function(x, y){
  return x[1]-y[1];
});
console.log(arr);

arr.sort(function(x, y){
  return x[2]-y[2];
});
console.log(arr);

var arr2 = [['中','国'], ['啊','的'], ['哦','的']];
arr2.sort(function(x, y){
  return x[0].localeCompare(y[0]);
});//逆序排序
console.log(arr2)

