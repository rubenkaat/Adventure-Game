function gameStart(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/huis.jpg')";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "START";
	document.getElementById("Button_Decline").onclick = function(){gameUitleg()};
	document.getElementById("Button_Decline").innerHTML = "UITLEG";
	document.getElementById("Title_Level").innerHTML = "Het Verlaten Huis";
	document.getElementById("Level_Description").innerHTML = "Welkom bij het spel. Druk op de knop om te starten";
}
function gameUitleg(){
	document.getElementById("Title_Level").innerHTML = "Uitleg";
	document.getElementById("Level_Description").innerHTML = "Bij elk level krijg je een stukje tekst te zien dat uitlegt wat er in het level aan de hand is. Daarna kan je op een van de knoppen drukken om naar het volgende level te gaan. Veel Plezier!";
	document.getElementById("Button_Decline").innerHTML = "Menu";
	document.getElementById("Button_Decline").onclick = function(){gameStart()};
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Start";
}
function level1(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/forest.jpg')";
	document.getElementById("Title_Level").innerHTML = "Bij de Auto";
	document.getElementById("Level_Description").innerHTML = "Het is koud buiten en je hebt het gevoel dat je wordt bekeken. Je ziet verderop het huis. Het lijkt verlaten. Wil je naar het huis toe gaan?";
	document.getElementById("Button_Accept").onclick = function(){level2()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level3()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level2(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/voordeurlevel.jpg')";
	document.getElementById("Title_Level").innerHTML = "Voordeur";
	document.getElementById("Level_Description").innerHTML = "Je komt aan bij het huis en ziet een voordeur en een deur naar de kelder. Ga je naar de voordeur?";
	document.getElementById("Button_Accept").onclick = function(){level4()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level5()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level3(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/forest-snow.jpg')";
	document.getElementById("Title_Level").innerHTML = "Bij de Auto";
	document.getElementById("Level_Description").innerHTML = "Je hebt besloten om niet naar het huis te gaan. Je word moe en besluit even je ogen dicht te doen. Hoeveel uur wil je slapen?";
	document.getElementById("Button_Accept").onclick = function(){level6()};
	document.getElementById("Button_Accept").innerHTML = "meer dan 3 uur";
	document.getElementById("Button_Decline").onclick = function(){level7()};
	document.getElementById("Button_Decline").innerHTML = "minder dan 3 uur";
}
function level4(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je loopt naar de voordeur maar voordat je er bent val je door een luik in de grond. Het gat is te diep om uit te klimmen, je zit vast.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level2()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level5(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/kelder.jpg')";
	document.getElementById("Title_Level").innerHTML = "De Kelder";
	document.getElementById("Level_Description").innerHTML = "Je besluit de kelder binnen te gaan. Binnen in de kelder is het pikdonker, je ziet een lichtknopje, doe je het licht aan?";
	document.getElementById("Button_Accept").onclick = function(){level9()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level8()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level6(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je valt in slaap en in de ijskoude donkere nacht vries je dood.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level3()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level7(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je valt even in slaap en als je wakker wordt hoor je een geluid buiten je auto. Je stapt uit en word aangevallen door wolven. Ze eten je op.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level3()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level8(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je besluit het licht niet aan te doen en voorzichtig verder te lopen. Helaas zie je daardoor het grote gat in de grond niet en val je erin.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level5()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level9(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/huis-binnen1.jpg')";
	document.getElementById("Title_Level").innerHTML = "In Het Huis";
	document.getElementById("Level_Description").innerHTML = "je loopt de trap op de kelder uit. Het donkere huis bevalt je niks. je kan ervoor kiezen om te vluchten of om de trap op te gaan. Wat kies je?";
	document.getElementById("Button_Accept").onclick = function(){level10()};
	document.getElementById("Button_Accept").innerHTML = "De Trap Op";
	document.getElementById("Button_Decline").onclick = function(){level11()};
	document.getElementById("Button_Decline").innerHTML = "Vluchten";
}
function level10(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/huis-boven.jpg')";
	document.getElementById("Title_Level").innerHTML = "De Bovenverdieping";
	document.getElementById("Level_Description").innerHTML = "Je komt aan op de bovenverdieping en ziet twee open deuren: Links en Rechtdoor. Welke deur neem je?";
	document.getElementById("Button_Accept").onclick = function(){level12()};
	document.getElementById("Button_Accept").innerHTML = "De Linkse Deur";
	document.getElementById("Button_Decline").onclick = function(){level13()};
	document.getElementById("Button_Decline").innerHTML = "De Deur Rechtdoor";
}
function level11(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je vlucht naar buiten toe de koude donkere nacht in. Na een tijdje te hebben gerend val je uitgeput op de grond. Je vriest dood.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level9()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level12(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/kamer-wapen.jpg')";
	document.getElementById("Title_Level").innerHTML = "Lege Kamer";
	document.getElementById("Level_Description").innerHTML = "Je loopt de kamer aan je linkerkant binnen en ziet dat hij helemaal leeg is. op de grond ligt alleen een revolver. Je pakt de revolver op en loopt naar de volgende kamer. Daar zie je een nachtkastje, wil je het nachtkastje doorzoeken?";
	document.getElementById("Button_Accept").onclick = function(){level20()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level18()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level13(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/slaapkamer.jpg')";
	document.getElementById("Title_Level").innerHTML = "Slaapkamer";
	document.getElementById("Level_Description").innerHTML = "Je loopt rechtdoor de kamer in. Het is een slaapkamer. In de kamer zie je een nachtkastje, wil je het nachtkastje doorzoeken?";
	document.getElementById("Button_Accept").onclick = function(){level14()};
	document.getElementById("Button_Accept").innerHTML = "Ja";
	document.getElementById("Button_Decline").onclick = function(){level15()};
	document.getElementById("Button_Decline").innerHTML = "Nee";
}
function level14(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/slaapkamer.jpg')";
	document.getElementById("Title_Level").innerHTML = "Slaapkamer";
	document.getElementById("Level_Description").innerHTML = "In het kastje vind je een autosleutel. Je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?";
	document.getElementById("Button_Accept").onclick = function(){level16()};
	document.getElementById("Button_Accept").innerHTML = "Val Aan";
	document.getElementById("Button_Decline").onclick = function(){level17a()};
	document.getElementById("Button_Decline").innerHTML = "Ren Weg";
}
function level15(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/slaapkamer.jpg')";
	document.getElementById("Title_Level").innerHTML = "Slaapkamer";
	document.getElementById("Level_Description").innerHTML = "Je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?";
	document.getElementById("Button_Accept").onclick = function(){level16()};
	document.getElementById("Button_Accept").innerHTML = "Val Aan";
	document.getElementById("Button_Decline").onclick = function(){level17a()};
	document.getElementById("Button_Decline").innerHTML = "Ren Weg";
}
function level16(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je valt de man aan maar zonder wapen verlies je het gevecht direct. De man maakt je dood.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level14()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level17a(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level14()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level17b(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level20()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level17c(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je rent naar beneden en de man komt achter je aan. Hij krijgt je te pakken als je net de trap af bent. Hij maakt je dood.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level18()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level18(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/slaapkamer.jpg')";
	document.getElementById("Title_Level").innerHTML = "Slaapkamer";
	document.getElementById("Level_Description").innerHTML = "Je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?";
	document.getElementById("Button_Accept").onclick = function(){level19()};
	document.getElementById("Button_Accept").innerHTML = "Val Aan";
	document.getElementById("Button_Decline").onclick = function(){level17c()};
	document.getElementById("Button_Decline").innerHTML = "Ren Weg";
}
function level19(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/gameover.jpg')";
	document.getElementById("Title_Level").innerHTML = "Game Over";
	document.getElementById("Level_Description").innerHTML = "Je richt je wapen op de man en hij duikt uit de weg. Dit geeft je genoeg tijd om weg te rennen. Je rent de trap af en ziet een open deur naar een garage. in de garage staat een auto. Je hebt geen sleutel en voordat je de garage uit kan rennen komt de man binnen. hij maakt je dood";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){level18()};
	document.getElementById("Button_Decline").innerHTML = "Stap Terug";
}
function level20(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/slaapkamer.jpg')";
	document.getElementById("Title_Level").innerHTML = "Slaapkamer";
	document.getElementById("Level_Description").innerHTML = "In het kastje vind je een autosleutel. Je loopt de kamer uit. In de kamer recht tegenover je zie je plotseling een man staan. Wat kies je: Val aan of Ren weg?";
	document.getElementById("Button_Accept").onclick = function(){level21()};
	document.getElementById("Button_Accept").innerHTML = "Val Aan";
	document.getElementById("Button_Decline").onclick = function(){level17b()};
	document.getElementById("Button_Decline").innerHTML = "Ren Weg";
}
function level21(){
	document.getElementById("body_container").style.backgroundImage = "url('IMG/garage.jpg')";
	document.getElementById("Title_Level").innerHTML = "The End";
	document.getElementById("Level_Description").innerHTML = "Je richt je wapen op de man en hij duikt uit de weg. Dit geeft je genoeg tijd om weg te rennen. Je rent de trap af en ziet een open deur naar een garage. in de garage staat een auto. Je gebruikt de sleutel die je hebt gevonden en de auto start. Je rijd de garage uit en je bent ontsnapt.";
	document.getElementById("Button_Accept").onclick = function(){level1()};
	document.getElementById("Button_Accept").innerHTML = "Begin Opnieuw";
	document.getElementById("Button_Decline").onclick = function(){gameStart()};
	document.getElementById("Button_Decline").innerHTML = "Terug naar Menu";
}

gameStart()
