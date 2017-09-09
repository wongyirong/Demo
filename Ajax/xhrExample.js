var buttons = document.getElementsByTagName("button");
for(var i = 0; i < buttons.length; i++){
	buttons[i].onclick = handleButtonPress;
}
function handleButtonPress(e) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = handleResponse;
	httpRequest.open("GET", e.target.innerHTML + ".html");
	httpRequest.send();
}

function handleResponse(e) {
	if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
		document.getElementById("target").innerHTML = e.target.responseText;
	}
}