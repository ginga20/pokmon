var div1 = document.getElementById("div1");
var divcarte = document.getElementById("divcarte");
var btn1 = document.getElementById("bouton1");
var choiximage = document.getElementById('choiximg');
var choiximage1 = document.getElementById('choiximg1');
var choiximage2 = document.getElementById('choiximg2');
var choiximage3 = document.getElementById('choiximg3');
var choiximage4 = document.getElementById('choiximg4');
var choiximage5 = document.getElementById('choiximg5');
var videostyle = document.getElementById('vvideos');
var btnrejouer = document.getElementById('btnrejouer');
var divrejouer = document.getElementById('divrejouer');
var ultraaf =  document.getElementById('ultraaf');
var ultraaff =  document.getElementsByClassName('ultraaff');


var nb_carte = 15;// Achanger
var nb_rare = 6; //A modif
var nb_carte_ultra = 3;// Acahnger


var video = document.getElementById('video');
var tempvideoopen = 2300;


vvideos.style.display = "none";
divcarte.style.display = "none";
ultraaf.style.display = "none";

btn1.addEventListener("click" , () => {
	if(getComputedStyle(div1).diplay != "none"){
		div1.style.display = "none";
	}else{
		d1.style.display = "block";
	}
});
	

// Permet de générer une carte aléatoirement
function carte_alea(){
	videostyle.style.display = "none";
	divcarte.style.display = "block";
	choiximage.style.display = "block";
    
    
    var lancer = Math.floor(Math.random()*nb_carte +1); // choix d'un chiffre aléatoire entre 1 et 
    choiximage.src = 'Cartes/' +lancer + ".jpg";
    
    var lancer1 = Math.floor(Math.random()*nb_carte +1);
    choiximage1.src = 'Cartes/' +lancer1 + ".jpg";
    
    var lancer2 = Math.floor(Math.random()*nb_carte +1);
    choiximage2.src = 'Cartes/' +lancer2 + ".jpg";
    
    var lancer3 = Math.floor(Math.random()*nb_carte +1); // choix d'un chiffre aléatoire entre 1 et 
    choiximage3.src = 'Cartes/' +lancer3 + ".jpg";
    
    var lancer4 = Math.floor(Math.random()*nb_carte +1); // carte rare
    choiximage4.src = 'Cartes/' +lancer4 + ".jpg";
    
    
    var lanc = Math.floor(Math.random()*10 +1);
    if(lanc === 1) {
		var lancerultra = Math.floor(Math.random()*nb_carte_ultra +1);
		choiximage5.src = 'Cartes/ultras/' +lancerultra + ".jpg";   //carte ultra_rare
		ultraaf.style.display = "block";
	}
	else{
			var lancer6 = Math.floor(Math.random()*nb_rare +1); // carrte rare
		choiximage5.src = 'Cartes/rares/' +lancer6 + ".jpg";
	}
    
    
};



 
//fontion pour animation opening booster
function open_booster(){
	divcarte.style.display = "none";
	videostyle.style.display = "block";
	ultraaf.style.display = "none";
	video.load();
	video.play();		
};

//une fois video fini devoile cartes
video.onended = function(e) {
      carte_alea()
};



