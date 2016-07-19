"use strict";

angular.module('Dashboard')
.factory('Modal', function ModalFactory(){
	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
		  e.preventDefault();
		e.returnValue = false;  
	}

	return {
		scrollOn: function(){
			if (window.removeEventListener){
		        window.removeEventListener('DOMMouseScroll', preventDefault, false);
		    }
		    window.onmousewheel = document.onmousewheel = null; 
		    window.onwheel = null; 
		    window.ontouchmove = null;  
		    document.onkeydown = null;  
		},
		scrollOff: function(){
			if (window.addEventListener){ // older FF
				window.addEventListener('DOMMouseScroll', preventDefault, false);
				window.onwheel = preventDefault; // modern standard
				window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
				window.ontouchmove  = preventDefault; // mobile
			}
		}
	}
});