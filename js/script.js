var img = ["<img src='https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg'>", 
"<img src='https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1280x720_666874-mm-90.jpg'>", 
"<img src='https://images.wallpapersden.com/image/download/astronaut-exploring-space_a2lmZ26UmZqaraWkpJRmZ21lrWxnZQ.jpg'>", 
"<img src='https://images.wallpapersden.com/image/download/night-mountains-summer-illustration_a2plamaUmZqaraWkpJRmZ21lrWxnZQ.jpg'>",
"<img src='https://images.hdqwalls.com/download/8-bit-pixel-art-city-2o-1280x720.jpg'>"];

var i = 0;
var lock=false;

/*function change() {
    if(i==img.length-1) i=0;
    document.getElementById("properscreen").innerHTML = img[i];
    i++
    $("#properscreen").fadeIn(300);
  setTimeout("change()", 3000);
  setTimeout("hide()", 2700);
}
Fuction for automatic change of image (Work in progress :P)*/

document.getElementById("dot1").style.backgroundColor="red";

function unlock(){
    lock=false;
}

function show(){
    $("#properscreen").fadeIn(300);
    if(i==0) dot1();
    if(i==1) dot2();
    if(i==2) dot3();
    if(i==3) dot4();
    if(i==4) dot5();
    }

document.getElementById("properscreen").innerHTML = img[i];

function prev() {
   if (i == 0) {
      i = img.length - 1;
} else {
        i = i - 1;
    }
    
    document.getElementById("properscreen").innerHTML = img[i];
}

function next() {
    if (i == img.length - 1) {
        i = 0;
    } else {
        i = i + 1;
    }
    $("#properscreen").fadeOut(300);
    document.getElementById("properscreen").innerHTML = img[i];
}

function nextAnimation(){
    if(!lock){
    lock=true;
    $("#properscreen").fadeOut(200);
    setTimeout("next()",200)
    setTimeout("show()",200)
    setTimeout("unlock()",600)
}
}

 function prevAnimation(){
    if(!lock){
    lock=true;
    $("#properscreen").fadeOut(200);
    setTimeout("prev()",200)
    setTimeout("show()",200) 
    setTimeout("unlock()",600)}
 }


function dot1(){
        document.getElementById("dot1").style.backgroundColor="red";
        document.getElementById("dot2").style.backgroundColor="black";
        document.getElementById("dot3").style.backgroundColor="black";
        document.getElementById("dot4").style.backgroundColor="black";
        document.getElementById("dot5").style.backgroundColor="black";
   
}


function dot2(){
    document.getElementById("dot1").style.backgroundColor="black";
    document.getElementById("dot2").style.backgroundColor="red";
    document.getElementById("dot3").style.backgroundColor="black";
    document.getElementById("dot4").style.backgroundColor="black";
    document.getElementById("dot5").style.backgroundColor="black";

}


function dot3(){
    document.getElementById("dot1").style.backgroundColor="black";
    document.getElementById("dot2").style.backgroundColor="black";
    document.getElementById("dot3").style.backgroundColor="red";
    document.getElementById("dot4").style.backgroundColor="black";
    document.getElementById("dot5").style.backgroundColor="black";

}

function dot4(){
    document.getElementById("dot1").style.backgroundColor="black";
    document.getElementById("dot2").style.backgroundColor="black";
    document.getElementById("dot3").style.backgroundColor="black";
    document.getElementById("dot4").style.backgroundColor="red";
    document.getElementById("dot5").style.backgroundColor="black";

}

function dot5(){
    document.getElementById("dot1").style.backgroundColor="black";
    document.getElementById("dot2").style.backgroundColor="black";
    document.getElementById("dot3").style.backgroundColor="black";
    document.getElementById("dot4").style.backgroundColor="black";
    document.getElementById("dot5").style.backgroundColor="red";

}

