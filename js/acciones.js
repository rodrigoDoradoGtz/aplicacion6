// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function(){
    	$('#beep').on('tap', function (){
			navigator.notification.beep(4);
		});
		$('#btnvibrar').on('tap', function (){
			navigator.notification.vibrate(1250);
		});
	});
});
