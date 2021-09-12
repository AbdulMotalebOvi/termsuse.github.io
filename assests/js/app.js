$(".carousel").owlCarousel({
	items: 1,
	autoplay: true,
	autoplayTimeout: 3000,
	loop: true,	
	autoplayHoverPause: true,
	smartSpeed: 1000,

});
$('document').ready(function(){
	AOS.init();
});

var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');
function togglePlayPause(){
	if(video.paused){
		btn.className = 'pause';
		video.play();
	}
	else{
		btn.className = "play";
		video.pause();
	}	
}
btn.onclick = function () {
	togglePlayPause();
};
video.addEventListener('timeupdate', function(){
	var juicePos = video.currentTime / video.duration;
	juice.style.width = juicePos * 100 + "%";
	if(video.ended){
		btn.className = "play";
	}
});

$(".accordion-content").css("display", "none");
$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});