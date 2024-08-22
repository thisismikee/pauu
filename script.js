let currentPage = 1;

function nextPage() {
	document.getElementById("message-container").style.display = "none";
	document.getElementById("poem-container").style.display = "block";
	currentPage = 2;
}

function nextPage2() {
	document.getElementById("poem-container").style.display = "none";
	document.getElementById("image-container").style.display = "block";
	currentPage = 3;
}

function sendMessage() {
	window.location.href = "https://wa.me/your-whatsapp-number?text=Lop%20u%20sayangg";
}

function animateText() {
	if (currentPage === 1) {
		document.getElementById("message").style.opacity = 0;
		document.getElementById("message").style.transform = "translateY(100%)";
		setTimeout(function() {
			document.getElementById("message").style.opacity = 1;
			document.getElementById("message").style.transform = "translateY(0)";
		}, 2000);
	}
}

animateText();