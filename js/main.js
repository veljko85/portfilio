var bckLogo = document.getElementById("vm");
var cliWid = document.body.clientWidth;
var hamBut = document.getElementById("ham-but");
var firLin = document.getElementById("first-line");
var secLin = document.getElementById("second-line");
var thiLin = document.getElementById("third-line");
var content = document.getElementById("content");






//set image on home page size
bckLogo.style.height = cliWid + "px";
bckLogo.style.width = cliWid + "px";
//bckLogo.style.marginLeft = (cliWid-(cliWid / 1.5))/2 + "px";




//navigatin bar open and close

var navLine = document.getElementsByClassName("nav-line");
var navBar = document.getElementById("nav-bar");

function navClose () {
		firLin.classList.remove("change1");
		secLin.style.display = "block";
		thiLin.classList.remove("change2");

		navBar.style.width = 0;
		for (var i = 0; i < navLine.length; i++) {
			navLine[i].children[0].style.transition = "0s";
			navLine[i].children[0].style.opacity = 0;
			navLine[i].children[0].style.display = "inline-block";
		}
}
		



function navOpen () {
	firLin.classList.add("change1");
	secLin.style.display = "none";
	thiLin.classList.add("change2");




	navBar.style.width = 100 + "%";
	for (var i = 0; i < navLine.length; i++) {


		navLine[i].children[0].style.transition = "0.3s";
		setTimeout('navLine[0].children[0].style.opacity = 1;', 300);
		setTimeout('navLine[1].children[0].style.opacity = 1;', 300);
		setTimeout('navLine[2].children[0].style.opacity = 1;', 300);
		setTimeout('navLine[3].children[0].style.opacity = 1;', 300);
		setTimeout('navLine[4].children[0].style.opacity = 1;', 300);

	}

	



}


//hamburger button animation
hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			navClose();

		}	else	{
			navBar.style.transition = "0.3s";
			navOpen();
		}
}

//home page velibor markovic animation


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
	setTimeout('lastName[9].style.display = "inline";', 4000);
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





//nav bar change on clicks
for (var i = 0; i < navLine.length; i++) {
	navLine[i].addEventListener("click", function() {

		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("content").innerHTML =
				this.responseText;
							    }
			};
		xhttp.open("GET", "html/" + this.id + ".html", true);
		xhttp.send();


			

		if (this.id == "about") {



			setTimeout('content.children[0].children[4].style.width = cliWid * 0.8 + "px";', 200);
			setTimeout('content.children[0].children[4].style.height = cliWid * 0.8 + "px";', 200);
			
			setTimeout('content.children[0].children[0].style.opacity = 1;', 200);
			setTimeout('content.children[0].children[1].style.marginLeft = "5%";', 200);
			setTimeout('content.children[0].children[2].style.marginLeft = "15%";', 400);
			setTimeout('content.children[0].children[3].style.marginLeft = "5%";', 600);
			setTimeout('content.children[0].children[4].style.right = 0;', 800);

		}

		if (this.id == "skills") {


			setTimeout('content.children[0].children[0].style.opacity = 1;', 200);
			setTimeout('content.children[0].children[1].style.marginLeft = "5%";', 200);
			setTimeout('content.children[0].children[2].style.marginLeft = "5%";', 400);
			setTimeout('content.children[0].children[3].style.marginLeft = "5%";', 600);
			setTimeout('content.children[0].children[4].style.marginLeft = "20%";', 800);


			setTimeout('content.children[0].children[4].style.height = cliWid * 1.2 + "px";', 200);

		}

		if (this.id == "my-work") {


			setTimeout('content.children[0].children[0].style.opacity = 1;', 200);
			setTimeout('content.children[0].children[1].style.marginLeft = "5%";', 200);
			setTimeout('content.children[0].children[2].style.marginLeft = "5%";', 400);


		}

		if (this.id == "contact") {


			setTimeout('content.children[0].children[0].style.opacity = 1;', 200);
			setTimeout('content.children[0].children[1].style.marginLeft = "5%";', 200);
			setTimeout('content.children[0].children[2].style.marginLeft = "5%";', 400);
			setTimeout('content.children[0].children[3].style.marginLeft = "5%";', 600);
			setTimeout('content.children[0].children[4].style.marginLeft = "5%";', 800);
			setTimeout('content.children[0].children[5].style.marginLeft = "5%";', 1000);
			setTimeout('content.children[0].children[6].style.marginLeft = "5%";', 1200);


		}
















		switch (this.id) {
			case "home":
				this.children[0].src = "icons/home11on.png";
				document.getElementById("about").children[0].src = "icons/aboutme.png";
				document.getElementById("skills").children[0].src = "icons/skills11.png";
				document.getElementById("my-work").children[0].src = "icons/mywork11.png";
				document.getElementById("contact").children[0].src = "icons/contact11.png";
			break;
			case "about":
				this.children[0].src = "icons/aboutmeon.png";
				document.getElementById("home").children[0].src = "icons/home11.png";
				document.getElementById("skills").children[0].src = "icons/skills11.png";
				document.getElementById("my-work").children[0].src = "icons/mywork11.png";
				document.getElementById("contact").children[0].src = "icons/contact11.png";

			break;
			case "skills":
				this.children[0].src = "icons/skills11on.png";
				document.getElementById("home").children[0].src = "icons/home11.png";
				document.getElementById("about").children[0].src = "icons/aboutme.png";
				document.getElementById("my-work").children[0].src = "icons/mywork11.png";
				document.getElementById("contact").children[0].src = "icons/contact11.png";

			break;
			case "my-work":
				this.children[0].src = "icons/mywork11on.png";
				document.getElementById("home").children[0].src = "icons/home11.png";
				document.getElementById("about").children[0].src = "icons/aboutme.png";
				document.getElementById("skills").children[0].src = "icons/skills11.png";
				document.getElementById("contact").children[0].src = "icons/contact11.png";

			break;
			case "contact":
				this.children[0].src = "icons/contact11on.png";
				document.getElementById("home").children[0].src = "icons/home11.png";
				document.getElementById("about").children[0].src = "icons/aboutme.png";
				document.getElementById("skills").children[0].src = "icons/skills11.png";
				document.getElementById("my-work").children[0].src = "icons/mywork11.png";

			break;
			default:
				document.getElementById("home").children[0].src = "icons/home11.png";
				document.getElementById("about").children[0].src = "icons/aboutme.png";
				document.getElementById("skills").children[0].src = "icons/skills11.png";
				document.getElementById("my-work").children[0].src = "icons/mywork11.png";
				document.getElementById("contact").children[0].src = "icons/contact11.png";
				}
		});

}









		console.log(2+3);


