var buttons = document.querySelectorAll("button.clickme");
var buttonss1 = document.querySelectorAll("button.clickmee");
var pr = document.getElementById("para");
count = 0;
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        count += 1;
        pr.innerHTML = "      " + " "  + "  " +count;
        pr.style.display="inline-block"

    });
})
buttonss1.forEach(function (button) {
    
    button.addEventListener('click', function () {
        count --;
        pr.innerHTML = " " + count;
        if(count ==-1) {
       pr.style.display="none"
        };   
    });
})
/* slider */ 

let slider = document.getElementById("slider")
let right = document.getElementById("right")
let left = document.getElementById("left")

let imgs = ["url(images/slider/1.jpg)","url(images/slider/2.jpg)","url(images/slider/3.jpg)"]
// let imgs = ["url(../images/furniture/slide1.jpg)","url(../images/furniture/slide2.jpg)"]
let s = 0 ; 

function slideRight(){
    s++
    if(s==3){
        s=0;
    }
    slider.style.backgroundImage = imgs[s];

}
function slideLeft(){
    if(s==0){
            s=3;
    }
    s--
    slider.style.backgroundImage = imgs[s]
    
}


right.addEventListener("click",slideRight)

left.addEventListener("click",slideLeft)


// var slide_index = 1;  
// displaySlides(slide_index);  
// function nextSlide(n) {  
//     displaySlides(slide_index += n);  
// }  
// function currentSlide(n) {  
//     displaySlides(slide_index = n);  
// }  
// function displaySlides(n) {  
//     var i;  
//     var slides = document.getElementsByClassName("showSlide");  
//     if (n > slides.length) { slide_index = 1 }  
//     if (n < 1) { slide_index = slides.length }  
//     for (i = 0; i < slides.length; i++) {  
//         slides[i].style.display = "block";  
//     }  
//     slides[slide_index - 1].style.display = "none";  
// }  
/*************  category  *************/
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     BTRemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) BTAddClass(x[i], "show");
//   }
// }

// function BTAddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function BTRemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

var x=document.querySelector(".wrap1");
var z=document.querySelector(".wrap2");
var y=document.querySelector(".wrap3");
var k=document.querySelector(".wrap4");
var all=document.querySelector(".wrapAll");
function filterSelectionn(){
    k.style.display='none';
    y.style.display='none';
    z.style.display='none';
    x.style.display='none';
    all.style.display='block';

}
function filterSelection(){   
    k.style.display='none';
    y.style.display='none';
    z.style.display='none';
    x.style.display='block';
    all.style.display='none';
}
function filterSelection1(){
    k.style.display='none';
    y.style.display='none';
    z.style.display='block';
    x.style.display='none';
    all.style.display='none';
}

function filterSelection2(){
    k.style.display='none';
    y.style.display='block';
    z.style.display='none';
    x.style.display='none';
    all.style.display='none';
}
function filterSelection3(){
    k.style.display='block';
    y.style.display='none';
    z.style.display='none';
    x.style.display='none';
    all.style.display='none';
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
