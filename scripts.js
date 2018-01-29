/* changeVideo demonstrates how you can change an
DOM attribute using javacript functions*/
function moveVideoForward() {
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

function moveVideoBackward() {
	let video1 = "https://www.youtube.com/embed/E4Eoev6a6nQ";
	let video2 = "https://www.youtube.com/embed/i_wT_Tt6Jc4";
	let video3 = "https://www.youtube.com/embed/g9wcM5qztXY";

	if (document.getElementById('youtube').src == video1) {
		document.getElementById('youtube').src = video3;
	} else if (document.getElementById('youtube').src == video3) {
		document.getElementById('youtube').src = video2;
	} else {
		document.getElementById('youtube').src = video1;
	}
}

function openResume() {
	window.location.href = "resume.html";
}

//This is code I got from an online resource that uses jQuery to 
// move through slideshow of images
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4000);