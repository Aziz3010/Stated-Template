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

// testimonials

var newsBox = document.getElementById("newsBox");
var control1 = document.getElementById("control1");
var control2 = document.getElementById("control2");
var control3 = document.getElementById("control3");


control1.addEventListener("click",function(){
    newsBox.style.transform = "translateX(800px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
});

control2.addEventListener("click",function(){
    newsBox.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
});

control3.addEventListener("click",function(){
    newsBox.style.transform = "translateX(-800px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
});










// ////////////////////

// slider

var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
var getImagerNumber = sliderImages.length;
var currentSlide = 5;
var slide_Number_Box = document.getElementById("slide-number");

var PreviousBTN = document.getElementById("prev");
var NextBTN = document.getElementById("next");


PreviousBTN.addEventListener("click",function(){
    PrevSlide();
})


NextBTN.addEventListener("click",function(){
    nextSlide();
})


function nextSlide(){
    if(NextBTN.classList.contains("disabled")){
        return false;
    } else{
        currentSlide++;
        console.log(currentSlide);
        checker()
    }
}

function PrevSlide(){
    if(PreviousBTN.classList.contains("disabled")){
        return false;
    } else{
        currentSlide--;
        console.log(currentSlide);
        checker()
    }
}

// create ul + li

var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id","pagination-ul");

for (var i=0 ; i<getImagerNumber ; i++){
    var listsElements = document.createElement("li");
    
    listsElements.setAttribute("data-index", i);

    listsElements.appendChild(document.createTextNode(i+1));

    paginationElement.appendChild(listsElements);

}

var indicators = document.getElementById("indicators");
indicators.appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");
var paginationArray = Array.from(document.querySelectorAll("#pagination-ul li"));


for(var i=0 ; i<getImagerNumber ; i++){
    paginationArray[i].addEventListener("click",function(){
        currentSlide = parseInt(this.getAttribute("data-index")) + 1;
        checker()
    })
}

function checker(){
    slide_Number_Box.textContent = `Silde #${currentSlide} of ${getImagerNumber}`;

    removeActives()

    sliderImages[currentSlide - 1].classList.add("active");
    
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");


    if(currentSlide == 1){
        PreviousBTN.classList.add("disabled");
    } else  {
        PreviousBTN.classList.remove("disabled");
    }

    if(currentSlide == getImagerNumber ){
        NextBTN.classList.add("disabled");
    } else  {
        NextBTN.classList.remove("disabled");
    }

}
checker()

function removeActives(){
    sliderImages.forEach(function(images){
        images.classList.remove("active");
    })

    paginationArray.forEach(function(lists){
        lists.classList.remove("active");
    })
}
// ////////////////////////////////////////////////