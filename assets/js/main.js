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