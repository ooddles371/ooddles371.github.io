/* card flip */
$(".flip").hover(function(){
  $(this).find(".card").toggleClass("flipped");
  return false;
});

$(window).resize(function() {
 if ($(this).width() < 768) {
   document.getElementById("textbelowrow").innerHTML = "Death by snoo snoo!";
   
   
   
   //find element
       //remove element from current parent
       //make element child of the other parent
 }
 else {
       document.getElementById("textbelowpic").innerHTML = "Death by snoo snoo!";
	   //do inverse
 }
});

//min 992 is medium
//min 768 is small