function load() {
	let timeOut = setTimeout(showPage, 2000); // Default: 2000
}

function showPage() {
	// Hide loader and reveal page
	document.getElementById("loaderDiv").style.display = "none";
	document.getElementById("header").style.visibility = "visible";
	document.getElementById("content").style.display = "block";
}

function copyEmail() {
	// Copies my email to the user's clipboard
	var promise = navigator.clipboard.writeText("ayo")
}
