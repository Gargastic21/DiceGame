
var randomNumber1 = Math.random() * 6
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomdiceimage = "dice" + randomNumber1 + ".png";
var randomimagesource = "images/" + randomdiceimage;

document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);

var randomNumber2 = Math.random() * 6
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomdiceimage2 = "dice" + randomNumber2 + ".png";
var randomimagesource2 = "images/" + randomdiceimage2;
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML ="Player1 wins";
}
else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML ="Player2 wins";
}

else{
	document.querySelector("h1").innerHTML ="It's a Draw";
}



