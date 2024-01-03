
let dana=10;

function promeniSliku(a)
{
  var slika = document.getElementById("slika")

  switch(a)
  {
   case 1: slika.src = "./slike/Greece.jpg" ; break;
   case 2: slika.src = "./slike/plaza2.jpg" ; break;
   case 3: slika.src = "./slike/CG.jpg" ; break;
   case 4: slika.src = "./slike/srecanCovek2.jpg" ; break;
   case 5: slika.src = "./slike/srecanCovek2.jpg" ; break;
   case 6: slika.src = "./slike/srecanCovek2.jpg" ; break;

  }
  
}


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("BU");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY    >= sticky) {
    navbar.classList.remove("odlepi");
    navbar.classList.add("Zalepi")
  } else {
    navbar.classList.remove("Zalepi");
    navbar.classList.add("odlepi");
  }
}

var destinacija = document.getElementById("Destinacija");
var lokacijaa = document.getElementById("lokacija");


function promena(){
  if(destinacija.value == "Gr")
  {
    document.getElementById('lokacija').options[0].innerHTML = "Hanioti";
    document.getElementById('lokacija').options[0].value = "Hanioti";
    document.getElementById('lokacija').options[1].innerHTML = "Nei Poroi";
    document.getElementById('lokacija').options[1].value = "NP";
    document.getElementById('lokacija').options[2].innerHTML = "Asprovalta";
    document.getElementById('lokacija').options[2].value = "Asprovalta";
  }
  else if(destinacija.value == "CG")
  {
    document.getElementById('lokacija').options[0].innerHTML = "Kotor";
    document.getElementById('lokacija').options[0].value = "Kotor";
    document.getElementById('lokacija').options[1].innerHTML = "Herceg Novi";
    document.getElementById('lokacija').options[1].value = "Herceg Novi";
    document.getElementById('lokacija').options[2].innerHTML = "Budva";
    document.getElementById('lokacija').options[2].value = "Budva";
  }
  else if(destinacija.value == "Tr")
  {
    document.getElementById('lokacija').options[0].innerHTML = "Kemer";
    document.getElementById('lokacija').options[0].value = "Kemer";
    document.getElementById('lokacija').options[1].innerHTML = "Istanbul";
    document.getElementById('lokacija').options[1].value = "Istanbul";
    document.getElementById('lokacija').options[2].innerHTML = "Alanya";
    document.getElementById('lokacija').options[2].value = "Alanya";
  }

}

var datum10 = document.getElementById("datum10");
var datum7 = document.getElementById("datum7");

function promenaDana(a){
  if(a==2)
  {
    datum10.classList.add("sakri")
    datum10.classList.remove("pojaviSe")

    datum7.classList.add("pojaviSe")
    datum7.classList.remove("sakri")
    dana=7;
    
  }
  if(a==1)
  {
    datum10.classList.add("pojaviSe")
    datum10.classList.remove("sakri")

    datum7.classList.add("sakri")
    datum7.classList.remove("pojaviSe")
    dana=10;
  }
}

function prevoz()
{
  if(destinacija.value == "Gr")
  {
   return 50;
  }
  else if(destinacija.value == "CG")
  {
    return 40;
  }
  else if(destinacija.value == "Tr")
  {
   return 80;
  }
}

function koeficiet()
{
  let koef;
  if(datum10.value==1)
  {
    koef=0.5;
  }
  else if(datum10.value==2)
  {
    koef=0.8;
  }
  else if(datum10.value==3)
  {
    koef=1;
  }
  else if(datum10.value=4)
  {
    koef=1.3;

  }
  if(datum7.value==1)
  {
    koef=0.5;
  }
  else if(datum7.value==2)
  {
    koef=0.7;
  }
  else if(datum7.value==3)
  {
    koef=0.9;
  }
  else if(datum7.value=4)
  {
    koef=1.1;

  }

  return koef;
}

function popust()
{


if (document.getElementById("niste").checked) {
  return document.getElementById("niste").value;
}
if (document.getElementById("Student").checked) {
  return document.getElementById("Student").value;
}
if (document.getElementById("penzioner").checked) {
  return document.getElementById("penzioner").value;
}


}

function Kalk(){

  let koef= koeficiet();
  let rez;
  let prevozz = prevoz();
  let popustt = popust()
  

  rez = (20*koef*dana+ prevozz) * popustt ;
  

  console.log(rez);
}
