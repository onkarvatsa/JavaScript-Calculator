$(document).ready(function () {
	console.log("Onkar Sharma Vatsa")
})

function button(num) {
	document.getElementById("txt").value = document.getElementById("txt").value + num;
}

function Equal() {
	var exp = document.getElementById("txt").value;
	if (exp != null || exp != "") {
		var result = eval(exp)
		$("#txt").val(result);
	}
}

function Clean() {
	// document.getElementById("txt").value = "";
	$("#txt").val('');
}

function Back() {
	var input = $("#txt").val();
	$("#txt").val(input.substr(0, input.length - 1));
}