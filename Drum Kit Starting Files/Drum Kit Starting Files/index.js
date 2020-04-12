for (i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // for (i = 0; i < document.querySelectorAll("button").length; i++) {
    //    if (document.querySelectorAll("button")[i])
    console.log(this.innerHTML);
    var buttonclick1 = this.innerHTML;

    Clickfunction(buttonclick1);

    Addannimation(buttonclick1);
  });
}

function Clickfunction(buttonclick) {

  switch (buttonclick) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    default:

  }
}

function Addannimation(buttonclick) {

  var activeButton = document.querySelector("." + buttonclick);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
