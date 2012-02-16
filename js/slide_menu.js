// Toggle Menu

$(document).ready(function() {
	// Slide
	$("#stone-links > li > a.expanded + ul").slideToggle("medium");
	$("#stone-links > li > a").click(function() {
		$(this).toggleClass("expanded").toggleClass("collapsed").find("+ ul").slideToggle("medium");
	});
});
