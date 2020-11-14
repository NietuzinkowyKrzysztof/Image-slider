var img = ["<img src='https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg'>", 
"<img src='https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1280x720_666874-mm-90.jpg'>", 
"<img src='https://images.wallpapersden.com/image/download/astronaut-exploring-space_a2lmZ26UmZqaraWkpJRmZ21lrWxnZQ.jpg'>", 
"<img src='https://images.wallpapersden.com/image/download/night-mountains-summer-illustration_a2plamaUmZqaraWkpJRmZ21lrWxnZQ.jpg'>"];

var i = 0;
/*function change() {
    if(i==img.length-1) i=0;
    document.getElementById("properscreen").innerHTML = img[i];
    i++
    $("#properscreen").fadeIn(300);
  setTimeout("change()", 3000);
  setTimeout("hide()", 2700);
}
Fuction for automatic change of image (Work in progress :P)
*/
function show(){
    $("#properscreen").fadeIn(300);
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
    $("#properscreen").fadeOut(200);
    setTimeout("next()",200)
    setTimeout("show()",200)   
}
 function prevAnimation(){
    $("#properscreen").fadeOut(200);
    setTimeout("prev()",200)
    setTimeout("show()",200) 
 }