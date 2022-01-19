
// A remplacer par l'objet renvoyer -------------------------

class item {
	constructor(contenue) {
        this.contenue = contenue;       // Récupère le contenue d'un item
        this.dependance = [];   // Permet de gérer les dépendance de l'item
}
}


var ok = new item("ok");
var tran = new item("tran");

var feu = new item("C'est le feu");
var vie = new item("C'est la vie");

var MDR = new item("MDR");
MDR.dependance.push(feu);
MDR.dependance.push(vie);

var testo = new item("Testo");
testo.dependance.push(ok);
testo.dependance.push(tran);
testo.dependance.push(MDR);

var On_est_bon = new item("ON EST BON");
var Ah_Non = new item("AH NON");

var okSaroule = new item("Ok Saroule");
okSaroule.dependance.push(On_est_bon);
okSaroule.dependance.push(Ah_Non);

var base = new item("base");
base.dependance.push(testo);
base.dependance.push(okSaroule);


//.consol.log("")
// --------------------------------------------


// Modifier le titre de la mind map
var Main = document.getElementById("MindMapTitre");
Main.innerHTML = base.contenue;

for (var i = 0; i < 19; i++) {

// Ajouter 1 grand titre
var Niveau1 = document.getElementById("Liste1");
Niveau1.innerHTML += '<li class="Front">' + base.dependance[i].contenue + '<ul id=Titre'+ i +'></ul></li>'; 

for (var j = 0; j < 19; j++) { 
	if ((base.dependance[i] == null) || (base.dependance[i].dependance[j] == null)) {break;}

      else{
// Ajouter 1 sous titre
var Niveau2 = document.getElementById("Titre"+ i);
Niveau2.innerHTML += '<li id="hid">' + base.dependance[i].dependance[j].contenue + '<ul id=SousTitre'+ j +'></ul></li>'; 
}

for (var k = 0; k < 19; k++) {
      if ((base.dependance[i].dependance[j] == null) || (base.dependance[i].dependance[j].dependance[k] == null)) {break;}
      else{
// Ajouter 1 sous sous titre
var Niveau3 = document.getElementById("SousTitre"+ j);
Niveau3.innerHTML += '<li id="hid">' + base.dependance[i].dependance[j].dependance[k].contenue + '<ul id=SoussousTitre'+ k +'></ul></li>'; 
}
}

for (var l = 0; l < 19; l++) {
      if ((base.dependance[i].dependance[j].dependance[k] == null) || (base.dependance[i].dependance[j].dependance[k].dependance[l] == null)) {break;}
      else{
// Ajouter 1 sous sous sous titre
var Niveau4 = document.getElementById("SoussousTitre"+ k);
Niveau4.innerHTML += '<li id="hid">' + base.dependance[i].dependance[j].dependance[k].contenue + '<ul id=SoussousTitre'+ l +'></ul></li>'; 
}
}

}
}






