function add(items){
    var tbody = document.querySelectorAll("#jsTrolley tbody");
    for(var z=0;z<items.length;z++){
        var trNew = document.createElement("tr");
        for(var i =0;i<3;i++){
            var tdNew = createEle();
            switch(i){
                case(0):{
                    tdNew.innerHTML=items[z]["name"];
                    trNew.appendChild(tdNew);
                }break;
                case(1):{
                    tdNew.innerHTML=items[z]["price"];
                    trNew.appendChild(tdNew);
                }break;
                case(2):{
                    var aTag = document.createElement("a");
                    aTag.href="javascript:void(0)";
                    aTag.innerHTML="删除";
                    tdNew.appendChild(aTag);
                    trNew.appendChild(tdNew);
                }break;
            }
        }
        tbody[0].appendChild(trNew);
    }

//tfoot内容更新
var price=0;
var tfoot=document.querySelectorAll("#jsTrolley tfoot");
var tfootCon = document.querySelectorAll("#jsTrolley tfoot tr td");
var tbodyTd = document.querySelectorAll("#jsTrolley tbody tr td");
var tbodyTr = document.querySelectorAll("#jsTrolley tbody tr");
var len = tbodyTr.length;
for(var n =0;n<tbodyTr.length;n++){
    price = Number(tbodyTr[n].childNodes[1].innerHTML)+price;
}
str=price+"("+len+"件商品)";
console.log(str);
tfootCon[0].innerHTML=str;
}
function createEle(){
    var tdNew = document.createElement("td");
    return tdNew;
}


function bind(){
    var arr=[];
    var tbodyTr = document.querySelectorAll("#jsTrolley tbody tr");
    var tbody = document.querySelectorAll("#jsTrolley tbody ");
    var tbodyTrA = document.querySelectorAll("#jsTrolley tbody tr td a");
    for(let i = 0;i<tbodyTrA.length;i++){
        tbodyTrA[i].onclick=function(){
            tbodyTr[i].style.display="none";
            var price=0;
            var tfoot=document.querySelectorAll("#jsTrolley tfoot");
            var tfootCon = document.querySelectorAll("#jsTrolley tfoot tr td")
            var tbodyTd = document.querySelectorAll("#jsTrolley tbody tr td");
            var len = 0;
            for(var n =0;n<tbodyTr.length;n++){
                if(tbodyTr[n].style.display=="none"){
                    continue;
                }else{
                    len++;
                    price = Number(tbodyTr[n].childNodes[1].innerHTML)+price;
                }
            }
            str=price+"("+len+"件商品)";
            console.log(str);
            tfootCon[0].innerHTML=str;
        }
    }
}
var items=[{"name":"产品4","price":"5.00"},{"name":"产品5","price":"5.00"}];
add(items);
bind();
var tfootCon = document.querySelectorAll("#jsTrolley tfoot tr td");
tfootCon.innerHTML="bihao";