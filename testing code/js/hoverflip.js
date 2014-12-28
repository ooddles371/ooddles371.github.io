//--------------------Start Card Flip---------------
$(".flip").hover(function(){
  $(this).find(".card").toggleClass("flipped");
  return false;
});
//--------------------End Card Flip---------------

var small,medium,large,width;
small = 0;
medium = 0;
large = 0;
width=0;

if($(window).width() < 768){
	$('.small').prepend("screen is SMALL");   
	$('.large').empty();
	$('.medium').empty();
	small=2;
}	else if($(window).width() < 992){
		$('.medium').prepend("screen is MEDIUM");   
		$('.large').empty();
		$('.small').empty();
		medium=2;
	}	else{
			$('.large').prepend("screen is LARGE")
			$('.small').empty();
			$('.medium').empty();
			large=2;
		}



$(window).resize(function() {
	$('width').empty();
	$('width').prepend(width);
	if ($(this).width() < 768) {
		small+=1;
		medium=0;
		large=0;
		if (small < 2) {
			$('.small').prepend("screen is SMALL");   
			$('.large').empty();
			$('.medium').empty();
		}
	}	else if ($(window).width() < 992){
			medium+=1;
			small=0;
			large=0;
			if(medium < 2) {
				$('.medium').prepend("screen is MEDIUM");
				$('.small').empty();
				$('.large').empty();
			}
		}	else {
				large+=1;
				small=0;
				medium=0;
				if(large < 2) {
					$('.large').prepend("screen is LARGE");
					$('.small').empty();
					$('.medium').empty();
				}
			}
});


//min 1200 is large
//min 992 is medium
//min 768 is small