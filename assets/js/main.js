window.onscroll = function() {
      handleWindowScroll();
    };
    
    function handleWindowScroll() {
      // Get the header
      var header = document.getElementById("myHeader");
    
      // Get the offset position of the navbar
      var sticky = header.offsetTop;
    
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    
    document.addEventListener("click", function(event) {
      var clickedElement = event.target;
      
      // Check if the clicked element is a header
      if (clickedElement.tagName === "H1" || clickedElement.tagName === "H2" || clickedElement.tagName === "H3" || clickedElement.tagName === "H4" || clickedElement.tagName === "H5" || clickedElement.tagName === "H6") {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
      }

    
      // Rest of your code (showHideAnswer, showHideMenus, etc.)
    });
    
=======
}

// Back To Top Button
function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }

