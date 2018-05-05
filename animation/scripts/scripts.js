var i = 0;
var txt = "That's all, folks!";
var speed = 100;

var w = document.getElementById("spinbox");
var x = document.getElementById("cover");
var y = document.getElementById("target1");
var z = document.getElementById("ball");



function attention()
{
    y.innerHTML="Yes, here!";
}
function heydummy()
{
    y.innerHTML="Here, nitwit!";
}
function fadeback()  
{

    document.getElementById("spinbox").className = ("spinbox");
    document.getElementById("ball").className = ("ball");

    if (x.style.zIndex === "1") {
        y.style.zIndex = "-5" ;
        x.style.opacity = "0" ;
        x.style.zIndex = "-5";
    } else {
        x.style.zIndex = "1";
    }

}
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("texty").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function closingcredits()
{
    w.style.backgroundColor = "green" ;
    z.style.backgroundColor = "green" ;
    x.style.zIndex = "1" ;
    x.style.backgroundColor = "gray" ;
    x.style.opacity = "1" ;

    typeWriter();
    setTimeout(() => document.getElementById("texty").innerHTML="", 5000);

}

z.addEventListener("animationend", closingcredits);
y.addEventListener("mouseover", attention);
y.addEventListener("mouseout", heydummy);
y.addEventListener("mousedown", fadeback);

