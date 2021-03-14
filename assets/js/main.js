function showHideAnswer() {
    var divAnswer = event.target.parentElement
            .getElementsByClassName('divAnswer')[0];

    var divCode = event.target.parentElement.getElementsByClassName('divCode')[0];
    

      if(divAnswer) {
            if (divAnswer.style.display == "block") {
                  divAnswer.style.display = "none";
            } else {
                  divAnswer.style.display = "block";
            }
      }

    
      if(divCode) {
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
      
      while(next && next.classList.contains("hideable_h3"))
      {
            if(next) {
                  showHideElement(next);
                  next = next.nextElementSibling;
            }
            else return;
      }

      if(!next) {

      }
      
}

function showHideElement(elem) {
      if(elem) {
            if (elem.style.display == "block") {
                  elem.style.display = "none";
            } else {
                  elem.style.display = "block";
            }
      }
}