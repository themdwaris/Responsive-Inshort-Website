// window.onscroll = function() {stickyOnDesktop()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyOnDesktop() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// for mobile view

window.onscroll = function() {stickyOnMobile()};

// Get the navbar
var menubar = document.getElementById("menu-bar");

// Get the offset position of the navbar
var sticky2 = menubar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyOnMobile() {
  if (window.pageYOffset >= sticky2) {
    menubar.classList.add("sticky2")
  } else {
    menubar.classList.remove("sticky2");
  }
}


function openMenu(){

    document.getElementById("navbar").style.left = "0px"
    document.getElementById("logo").innerHTML = "";
    
    
}
function closeMenu(){
    
    document.getElementById("navbar").style.left = "-280px"
    document.getElementById("logo").innerHTML = "InShort";
}