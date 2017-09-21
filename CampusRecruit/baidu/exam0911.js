
window.onload = function link() {
    let container = document.getElementById("jsContainer").innerText;
    let pattern = /(https|http|www).\w$/g;
    const res = container.match(pattern);
    console.log(res);
}