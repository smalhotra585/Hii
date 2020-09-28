var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



//Quantity inc dec button

$(".incdecbutton").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find(".mainBtn").text();

  if ($button.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find(".mainBtn").text(newVal);

});

//Add To cart Animation
var count= 0;
$(".addToCart").on("click",function() {
    count++;
    $('#counter').text(count)
    $('#counter').removeClass('animation-counter')
    setTimeout(() => 
                      $('#counter').addClass('animation-counter'),1);
});

//Sticky Navbar Function
        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        var searchbr = document.getElementById("search51")
        var sticky = navbar.offsetTop;
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

//Collapsible Button For Menu Details
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                } 
            });
        }
      
////Filter Button Categories Function
$("#filterBtn").on("click", function() {
    if ($("#category-panel").css("display") == "none"){
        $("#category-panel").css("display","block");
        }
    else{
          $("#category-panel").css("display","none");         
                   }
    
    
});

 $('#filterBtn').click(function(e) { //button click class name is myDiv
  e.stopPropagation();
 })

 $('.switchb').click(function(e) { //button click class name is myDiv
  e.stopPropagation();
 })

 $(function(){
  $(document).click(function(){  
  $('#category-panel').hide(); //hide the button

  });
});



//Pre Loader Function
$(window).on("load",function(){
    $(".preloader-wrapper").fadeOut("slow");
})
     

// JavaScript code
function myfood() {
	let input = document.getElementById('search51').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('menu-title');
  let y = document.getElementsByClassName('menu-subtitle');
  let flag = 0;

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentElement.parentElement.style.display="none";
		}
		else {
			x[i].parentElement.parentElement.style.display="inline-block";
      flag = 1;
		}
	}
  for (i = 0; i < y.length; i++) {
		if (y[i].innerHTML.toLowerCase().includes(input)) {
            y[i].parentElement.parentElement.style.display="inline-block";
            flag=1;
		}
      
	}

  if (flag == 0){
        document.getElementById('not-found').style.display="block";
  }
  else{
      document.getElementById('not-found').style.display="none";
  }
}

$("#search51").keyup(function(){
    if ($('#search51').val().length){
        $(".parallax").addClass('hiddens');
        $(".imageSlider").addClass('hiddens');
        $("footer").addClass('hiddens');
        $("#parralaxaside").addClass('hiddens');
        $(".main-header").addClass('hiddens');
        $(".double-border-seprator").addClass('hiddens');
        $(".double-border-seprator").addClass('hiddens');
        $(".dot").addClass('hiddens');
        $("#extra").css('display','block')
    }
    else{
        $(".parallax").removeClass('hiddens');
        $(".imageSlider").removeClass('hiddens');
        $("footer").removeClass('hiddens');
        $("#parralaxaside").removeClass('hiddens');
        $(".main-header").removeClass('hiddens');
        $(".double-border-seprator").removeClass('hiddens');
        $(".dot").removeClass('hiddens');
        $("#extra").css('display','none')
    }
    
});





const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

$(window).on("load",function(){
      $('.parallax').css('background-image','url(file:///C:/Users/hp/Desktop/Taj/image/Parralax/parralax.jpg)');
});

