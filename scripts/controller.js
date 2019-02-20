// Innerfade controller. See jquery.innerfade.js for full documentation. K.M.

$(document).ready(
		function(){
			$('#fader').innerfade({
				animationtype: 'fade', //animationtype: Type of animation 'fade' or 'slide' (Default: 'fade')
				speed: 2000, //speed: Fading-/Sliding-Speed in milliseconds or keywords (slow, normal or fast) (Default: 'normal')
				timeout: 5000, //timeout: Time between the fades in milliseconds (Default: '2000')
				type: 'random', //type: Type of slideshow: 'sequence', 'random' or 'random_start' (Default: 'sequence')
				containerheight: '217px' //containerheight: Height of the containing element in any css-height-value (Default: 'auto')
			});
			
	});
