function unique(array){
    var n = [];//临时数组
    for(var i = 0;i < array.length; i++){
        if(n.indexOf(array[i]) == -1)
        	n.push(array[i]);
    }
    return n;
}
unique([1,2,3,1,'1','2',3])