/* changeVideo demonstrates how you can change an
DOM attribute using javacript functions*/
function changeVideo() {
	let video1 = "https://www.youtube.com/embed/E4Eoev6a6nQ";
	let video2 = "https://www.youtube.com/embed/i_wT_Tt6Jc4";
	let video3 = "https://www.youtube.com/embed/g9wcM5qztXY";

	if (document.getElementById('youtube').src == video1) {
		document.getElementById('youtube').src = video2;
	} else if (document.getElementById('youtube').src == video2) {
		document.getElementById('youtube').src = video3;
	} else {
		document.getElementById('youtube').src = video1;
	}
}

function openResume() {
	window.location.href = "resume.html";
}