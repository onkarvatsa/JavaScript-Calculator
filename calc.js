function button(num) {
	document.getElementById("txt").value=document.getElementById("txt").value+num;
}


function equal() {
	var exp = document.getElementById("txt").value;
	if(exp){
	document.getElementById("txt").value = eval(exp)
}
}


function clean() {	
	document.getElementById("txt").value = "";
}