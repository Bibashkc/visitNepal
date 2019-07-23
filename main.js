$(document).ready(function() {

// ----------------navBar-----------------------------------
var pervScrollpos=window.pageYOffset;

window.onscroll=function() {
	var currentScrollpos=window.pageYOffset;
	if(pervScrollpos>currentScrollpos){
		document.getElementById("main-nav").style.top="0";
		document.getElementById("right-article-type-top").style.top="24%";
	} else {
		document.getElementById("main-nav").style.top="-100px"
		document.getElementById("right-article-type-top").style.top="8%";
	}

	pervScrollpos=currentScrollpos;
}

//-------------------------------------------------------------

//-------------------searchButton-------------------------------------

	$(".btn-icon").click(function(){
		$(".search-box .input").toggleClass("active").focus().val("");
		$(this).toggleClass("animate");

	});

//----------------------------------------------------------------------

$("#blog-type1").hover(function(){
	$("#hide1").show();
}, function(){
	$("#hide1").hide();
});

$("#blog-type2").hover(function(){
	$("#hide2").show();
}, function(){
	$("#hide2").hide();
});

$("#blog-type3").hover(function(){
	$("#hide3").show();
}, function(){
	$("#hide3").hide();
});

$("#blog-type4").hover(function(){
	$("#hide4").show();
}, function(){
	$("#hide4").hide();
});

$(".top-blog-type").hover(function(){
	$("#hide5").show();
}, function(){
	$("#hide5").hide();
});

// ---------------------------AOS -------------------------------------------

AOS.init({
		easing: 'ease',
		duration: 1800
		// once:true
	});


});