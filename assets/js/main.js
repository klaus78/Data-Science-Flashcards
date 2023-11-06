window.onscroll = function () {
      handleWindowScroll();
};

window.onload = (event) => {
      // adjust the vertical position of the left menu
      positionElements();
};

function showHideAnswer() {
      var divQuestion = event.target;

      // in case we clicked on a child element, we move back to the parent element
      // in order to find the proper controls
      while (divQuestion.className == '')
            divQuestion = divQuestion.parentElement;

      divQuestion.classList.toggle("active");

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

function showHideLeftMenu() {
      var leftMenu = document.getElementById("leftMenu");
     
      if (leftMenu.style.display === "block") {
        leftMenu.style.display = "none";
      } else {
        leftMenu.style.display = "block";
      }
      
      positionElements();
}


// Back To Top Button
function scrollToTop() {
      window.scrollTo({
            top: 0,
            behavior: "smooth"
      });
}

function positionElements() {
      const header = document.getElementById('myHeader');
      const leftMenu = document.getElementById('leftMenu');
      const content = document.getElementById('content');
      leftMenu.style.marginTop = `${header.offsetHeight + 1}px`;
      content.style.marginTop = leftMenu.style.marginTop;
      content.style.marginLeft = `${leftMenu.offsetWidth + 10}px`;
}