$(function() {

// fixed header

let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();
let nav = $("#nav");
let navToggle = $("#navToggle");

checkScroll(scrollPos, introH);

$(window).on("scroll resize",function() {
	introH = intro.innerHeight()-120;
	scrollPos = $(this).scrollTop();

	checkScroll(scrollPos, introH);
});

function checkScroll(scrollPos, introH) {
	if (scrollPos > introH) {
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
}

// smooth header
$("[data-scroll]").on("click", function(event) {
event.preventDefault();
let elementId = $(this).data('scroll');
let elementOffset = $(elementId).offset().top;

nav.removeClass("show");

$("html, body").animate({
scrollTop:elementOffset - 80
}, 900);
});


// nav Tooggle

navToggle.on("click", function(event) {
	event.preventDefault();

nav.toggleClass("show")
});

});

// portfolio: https://kenwheeler.github.io/slick/
let slider = $("#portfolioSlider");
slider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	arrows:false,
	dots:true,
 });

//modal window

let btn = $("#btn");
let btnLong = $("#btnLong");
let btnCall = $("#btn-call");
let btnClose = $("#btn-close");
let modalCall = $("#modal-call");
let modalBlock = $(".modal__block");
let modalResponse = $("#modal-response");
let exit = $("#exit");

$(btn).click(function() {
	$(modalCall).fadeIn();
});
$(exit).click(function() {
$(modalCall).fadeOut();
});

$(btnLong).click(function() {
	$(modalCall).fadeIn();
});
$(exit).click(function() {
$(modalCall).fadeOut();
});

$(btnCall).click(function() {
	$(modalCall).fadeOut();
	$(modalBlock).trigger('reset');
	$(modalResponse).fadeIn();
});
$(btnClose).click(function() {
	$(modalResponse).fadeOut();
	});

