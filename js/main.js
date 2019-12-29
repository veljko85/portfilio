var myImage = document.getElementById("vm");
var cliWid = document.body.clientWidth;
var hamBut = document.getElementById("ham-but");
var firLin = document.getElementById("first-line");
var secLin = document.getElementById("second-line");
var thiLin = document.getElementById("third-line");




//set image on home page size
myImage.style.height = cliWid / 1.1 + "px";
myImage.style.width = cliWid / 1.1 + "px";



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

hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			navClose();

		}	else	{
			navOpen();
		}

}







console.log(cliWid);

console.log(cliWid / 1.1);

