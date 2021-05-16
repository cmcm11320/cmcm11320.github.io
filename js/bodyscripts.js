function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("navbar").style.width = "0";
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("headmenu").style.top = "0";
    } else {
      document.getElementById("headmenu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }