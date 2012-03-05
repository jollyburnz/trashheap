var jQT = new $.jQTouch({
	icon: 'jqtouch.png',
	addGlossToIcon: false,
	startupScreen: 'jqt_startup.png',
	statusBar: 'black'
});

$(function(){
	// Custom Javascript (onReady)


	document.addEventListener(
	  'touchmove',
	  function(e) {
	      e.preventDefault();
	    },
	  false
	);

	
	$('#jqt').swipeRight(function(evt,data){
	
	});
	
	$('#jqt').swipeLeft(function(evt,data){
	
	});

	$('#jqt').swipeDown(function(evt,data){
	
	});





});
