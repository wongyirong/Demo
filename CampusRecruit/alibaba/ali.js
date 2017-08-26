function show(){ 
  var win=document.getElementById("win"); 
  win.style.display="block"; 
  win.style.position="absolute"; 
  win.style.top="50%"; 
  win.style.left="50%"; 
  win.style.marginTop="-75px"; 
  win.style.marginLeft="-150px"; 
  win.style.background="cyan"; 
  win.style.width="300px"; 
  win.style.height="200px"; 
  win.style.zIndex="1000";
  var mark = document.createElement("div"); 
  mark.setAttribute("id","mark"); 
  mark.style.background="#000"; 
  mark.style.width="100%"; 
  mark.style.height="100%"; 
  mark.style.position="absolute"; 
  mark.style.top="0"; 
  mark.style.left="0"; 
  mark.style.zIndex="500"; 
  mark.style.opacity="0.3"; 
  mark.style.filter="Alpha(opacity=30)"; 
  document.body.appendChild(mark); 
  document.body.style.overflow = "hidden"; 
} 
window.onload=function(){
  var obt=document.getElementById("bt");
  obt.onclick=function(){
    show();
  }
}