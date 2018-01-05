function changeVideo() {
	let video1 = "https://www.youtube.com/embed/E4Eoev6a6nQ";
	let video2 = "https://www.youtube.com/embed/i_wT_Tt6Jc4";
	if (document.getElementById('youtube').src == video1) {
		document.getElementById('youtube').src = video2;
	} else {
		document.getElementById('youtube').src = video1;
	}
}

function openResume() {
	window.location.href = "resume.html";
}