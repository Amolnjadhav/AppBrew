function fun1()
{
var randomNumber1=Math.random();

randomNumber1=(Math.floor(randomNumber1 * 6) + 1);

var ranimage = "images/" + "dice" + randomNumber1 + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute('src',ranimage);

return randomNumber1;
}

function fun2()
{
var randomNumber2=Math.random();

randomNumber2=(Math.floor(randomNumber2 * 6) + 1);

var ranimagesource2 = "images/" + "dice" + randomNumber2 + ".png";

var image2=document.getElementById('rightimage');

image2.setAttribute('src',ranimagesource2);

return randomNumber2;
}

function result ()
{
  randomNumber1=fun1();
  randomNumber2=fun2();
  
  if(randomNumber1 === randomNumber2) {
    document.getElementsByTagName("H1")[0].innerHTML="Draw the Match";
  } else if (randomNumber1 > randomNumber2 ) {
    document.getElementsByTagName("H1")[0].innerHTML="Player1 Wins";
  } else if (randomNumber1 < randomNumber2 ) {
    document.getElementsByTagName("H1")[0].innerHTML="Player2 Wins";
  }
}
