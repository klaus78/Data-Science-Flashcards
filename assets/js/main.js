// When the user scrolls the page, execute myFunction
window.onscroll = function () { handleWindowScroll() };

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleWindowScroll() {
      // Get the header
      header = document.getElementById("myHeader");
      
      // Get the offset position of the navbar
      sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
      } else {
            header.classList.remove("sticky");
      }
}

function showHideAnswer() {
      var divQuestion = event.target;

      // in case we clicked on a child element, we move back to the parent element
      // in order to find the proper controls
      while (divQuestion.className == '')
            divQuestion = divQuestion.parentElement;

      divQuestion.classList.toggle("active")

      var divAnswer = divQuestion.parentElement.getElementsByClassName('divAnswer')[0];

      var divCode = divQuestion.parentElement.getElementsByClassName('divCode')[0];

      if (divAnswer) {
            if (divAnswer.style.display == "block") {
                  divAnswer.style.display = "none";
            } else {
                  divAnswer.style.display = "block";
            }
      }

      if (divCode) {
            if (divCode.style.display == "block") {
                  divCode.style.display = "none";
            } else {
                  divCode.style.display = "block";
            }
      }
}

function showHideMenus() {

      event.target.classList.toggle("active")

      next = event.target.nextElementSibling;

      while (next && next.classList.contains("hideable_h3")) {
            if (next) {
                  showHideElement(next);
                  next = next.nextElementSibling;
            }
            else return;
      }

      if (!next) {

      }

}

function showHideElement(elem) {
      if (elem) {
            if (elem.style.display == "block") {
                  elem.style.display = "none";
            } else {
                  elem.style.display = "block";
            }
      }
}

