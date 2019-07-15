$(document).ready(function() {

	$(".btn-icon").click(function(){
		$(".search-box .input").toggleClass("active").focus().val("");
		$(this).toggleClass("animate");

	});

});