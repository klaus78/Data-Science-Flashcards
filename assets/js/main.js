function showHideAnswer() {
    var x = event.target.parentElement
            .getElementsByClassName('divAnswer')[0];

    if (x.style.display == "block") {
          x.style.display = "none";
    } else {
          x.style.display = "block";
    }
}