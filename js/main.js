// click on burger BTN to open & close the menu

$("#burgerBTN").click(function(){
    if($(".links").offset().top == 0){
        $(".links").slideDown(1000);
        $(".links").css("display","flex");
    } else {
        $(".links").slideUp(1000);
    }

});

// when scrolling the navbar-bg-color will change

$(window).scroll(function(){
    let navBar_Top_Offset = $("#Navbar").offset().top;
    
    if(navBar_Top_Offset > 39){
        // navbar
        $("#Navbar").css("background","#fff");
        // logo text
        $(".logoText h1 a").css("color","#999");
        // burgerBTN
        $(".burgerBTN span").css("background","#999");
        // hover on links
        $(".container .links ul li a").css("color","#212529")
        changeColorHoverOnLink();
    } else{
        // navbar
        $("#Navbar").css("background","#f1f1f118");
        // logo text
        $(".logoText h1 a").css("color","#fff");
        // burgerBTN
        $(".burgerBTN span").css("background","#f1f1f1");
        
    }  
})

function changeColorHoverOnLink(){
    let navBar_Top_Offset = $("#Navbar").offset().top;

    $(".container .links ul li a").mousemove(function(event){
        $(event.target).css("color","#f69314");
    })

    $(".container .links ul li a").mouseout(function(event){
        $(event.target).css("color","#212529")
    })

}

// go to sections smoothly when click in link
$("#Navbar .links ul li a,#Navbar .logoText a").click(function(e){
    let currentSection = $(e.target).attr("href");
    let sectionOffset = $(`${currentSection}`).offset().top;
    $("body , html").animate({scrollTop:sectionOffset},1500);
});

// owlCarousel

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        800:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
  });

  // Go to the next item
  $('#Properties .indecator #Next').click(function() {
      owl.trigger('next.owl.carousel');
  })

  // Go to the previous item
  $('#Properties .indecator #Prev').click(function() {
      owl.trigger('prev.owl.carousel');
  })