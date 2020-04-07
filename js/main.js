var bckLogo = document.getElementById("vm");
var cliWid = document.body.clientWidth;
var hamBut = document.getElementById("ham-but");
var firLin = document.getElementById("first-line");
var secLin = document.getElementById("second-line");
var thiLin = document.getElementById("third-line");




//set image on home page size
bckLogo.style.height = cliWid / 1.5 + "px";
bckLogo.style.width = cliWid / 1.5 + "px";
bckLogo.style.marginLeft = (cliWid-(cliWid / 1.5))/2 + "px";

//navigatin bar open and close
function navClose () {
		firLin.classList.remove("change1");
		secLin.style.display = "block";
		thiLin.classList.remove("change2");
}

function navOpen () {
	firLin.classList.add("change1");
	secLin.style.display = "none";
	thiLin.classList.add("change2");
}


//hamburger button animation
hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			navClose();

		}	else	{
			navOpen();
		}
}


//home page velibor markovic animation

var homePage = document.getElementsByClassName("home-page-heading");
var myName = document.getElementsByClassName("name");
var lastName = document.getElementsByClassName("last-name");
var webDeveloper = document.getElementsByClassName("web-developer");
var firBrake = document.getElementById("greater-than");
var secBrake = document.getElementById("curly-brace");
var thiBrake = document.getElementById("bracket-2");


for (var i = 0; i < myName.length; i++) {

	setTimeout('myName[0].style.display = "inline";', 1000);
	setTimeout('myName[1].style.display = "inline";', 1100);
	setTimeout('myName[2].style.display = "inline";', 1200);
	setTimeout('myName[3].style.display = "inline";', 1300);
	setTimeout('myName[4].style.display = "inline";', 1400);
	setTimeout('myName[5].style.display = "inline";', 1500);
	setTimeout('myName[6].style.display = "inline";', 1600);
	setTimeout('myName[7].style.display = "inline";', 1700);
	setTimeout('myName[8].style.display = "inline";', 1800);
}

setTimeout('firBrake.insertAdjacentHTML("afterend", "<br>");', 2300);


for (var i = 0; i < lastName.length; i++) {
	lastName[i].addEventListener("mouseover", function() {
	        this.style.color = "#00ec00";
	});
	lastName[i].addEventListener("mouseout", function() {
	        this.style.color = "#fff";
	});
	setTimeout('lastName[0].style.display = "inline";', 3000);
	setTimeout('lastName[1].style.display = "inline";', 3100);
	setTimeout('lastName[2].style.display = "inline";', 3200);
	setTimeout('lastName[3].style.display = "inline";', 3300);
	setTimeout('lastName[4].style.display = "inline";', 3400);
	setTimeout('lastName[5].style.display = "inline";', 3500);
	setTimeout('lastName[6].style.display = "inline";', 3600);
	setTimeout('lastName[7].style.display = "inline";', 3700);
	setTimeout('lastName[8].style.display = "inline";', 3800);
	setTimeout('lastName[9].style.display = "inline";', 3900);
}

setTimeout('secBrake.insertAdjacentHTML("afterend", "<br>");', 4600);

for (var i = 0; i < webDeveloper.length; i++) {
	webDeveloper[i].addEventListener("mouseover", function() {
	        this.style.color = "#00ec00";
	});
	webDeveloper[i].addEventListener("mouseout", function() {
	        this.style.color = "#fff";
	});
	setTimeout('webDeveloper[0].style.display = "inline";', 5100);
	setTimeout('webDeveloper[1].style.display = "inline";', 5200);
	setTimeout('webDeveloper[2].style.display = "inline";', 5300);
	setTimeout('webDeveloper[3].style.display = "inline";', 5400);
	setTimeout('webDeveloper[4].style.display = "inline";', 5500);
	setTimeout('webDeveloper[5].style.display = "inline";', 5600);
	setTimeout('webDeveloper[6].style.display = "inline";', 5700);
	setTimeout('webDeveloper[7].style.display = "inline";', 5800);
	setTimeout('webDeveloper[8].style.display = "inline";', 5900);
	setTimeout('webDeveloper[9].style.display = "inline";', 6000);
	setTimeout('webDeveloper[10].style.display = "inline";', 6100);
	setTimeout('webDeveloper[11].style.display = "inline";', 6200);
	setTimeout('webDeveloper[12].style.display = "inline";', 6300);
	setTimeout('webDeveloper[13].style.display = "inline";', 6400);
	setTimeout('webDeveloper[14].style.display = "inline";', 6500);
}

setTimeout('thiBrake.insertAdjacentHTML("afterend", "<br>");', 7000);


console.log(homePage[0]);

console.log(lastName[0]);

