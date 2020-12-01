var randomNumber1 = Math.floor(Math.random()*6)+1  ;

var randomImage1 = "dice"+ randomNumber1 + ".png";

var randomImageSource1 = "images/"+ randomImage1;

document.querySelectorAll('img')[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/"+ randomImage2;

document.querySelectorAll('img')[1].setAttribute("src", randomImageSource2);

//Checking the number to decide winning dice

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =   "🚩Player1 wins!";
    //document.getElementsByTagName("h1")[0].innerHTML = "🚩Player1 wins!"; //getElementsByTagName also works
  }
  else if (randomNumber1 < randomNumber2){
      document.querySelector("h1").innerHTML = "Player2 wins!🚩";
  }
  else{
      document.querySelector("h1").innerHTML = "Draw!";
  }
