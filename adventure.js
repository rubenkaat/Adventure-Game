function gameStart(){
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Decline").onclick = function(){gameUitleg()};
}
function gameUitleg(){
	document.getElementById("Title_Level").innerHTML = "Uitleg";
	document.getElementById("Level_Description").innerHTML = "Bij elk level krijg je een stukje tekst te zien dat uitlegt wat er in het level aan de hand is. Daarna kan je op een van de knoppen drukken om naar het volgende level te gaan. Veel Plezier!"
	document.getElementById("Button_Decline").innerHTML = "Menu";
	document.getElementById("Button_Decline").onclick = function(){gameStart()};
	document.getElementById("Button_Accept").onclick = function(){level1()};

}

function level1(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/forest.jpg')";
	document.getElementById("Title_Level").innerHTML = "Bij de Auto";
	document.getElementById("Level_Description").innerHTML = "Het is koud buiten en je hebt het gevoel dat je word bekeken. Je ziet verderop het huis. Het lijkt verlaten. Wil je naar het huis toe gaan?";
	document.getElementById("Button_Accept").onclick = function(){level2()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level3()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level2(){
	document.getElementById("Title_Level").innerHTML = "Voordeur";
	document.getElementById("Level_Description").innerHTML = "Je komt aan bij het huis en ziet een voordeur en een deur naar de kelder. Ga je naar de voordeur?";
	document.getElementById("Button_Accept").onclick = function(){level4()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level5()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level3(){
	document.getElementById("Title_Level").innerHTML = "Bij de Auto";
	document.getElementById("Level_Description").innerHTML = "Je komt aan bij het huis en ziet een voordeur en een deur naar de kelder. Ga je naar de voordeur?";
	document.getElementById("Button_Accept").onclick = function(){level4()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level5()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
gameStart()
