
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



for (var i = 0; i < 19; i++) { // Affiche 20 branches max

// Ajouter 1 grand titre
var Bloc1 = document.getElementById("Corps"); // Récupère le corps
Bloc1.innerHTML += '<div id="Bloc1'+i+'" class="Bloc"><h1 class="BlocTitre">' + base.dependance[i].contenue + '</h1></div>'; // Ajoute la liste du premier niveau (for). Ajoute un id pour la récupérer après.


for (var j = 0; j < 19; j++) { 
          if ((base.dependance[i] == null) || (base.dependance[i].dependance[j] == null)) {break;} // Vérifie que les branches précédente et actuelle ne sont pas vide.
          else{
        // Ajouter 1 sous titre
        var Bloc2 = document.getElementById("Bloc1"+ i);
        Bloc2.innerHTML += '<div id="BlocTexte'+j+'" class="BlocTexte"><p>'+base.dependance[i].dependance[j].contenue+'</p><img src="" width="100px"></div>'; 
      }

      for (var k = 0; k < 19; k++) {
        if ((base.dependance[i].dependance[j] == null) || (base.dependance[i].dependance[j].dependance[k] == null)) {break;}
        else{
                // Ajouter 1 sous sous titre
                var Bloc3 = document.getElementById("BlocTexte"+ j);
                Bloc3.innerHTML += '<p>' + base.dependance[i].dependance[j].dependance[k].contenue + '<p>'; 
              }

              for (var l = 0; l < 19; l++) {
                if ((base.dependance[i].dependance[j].dependance[k] == null) || (base.dependance[i].dependance[j].dependance[k].dependance[l] == null)) {break;}
                else{
                // Ajouter 1 sous sous sous titre
                var Niveau4 = document.getElementById("BlocTexte"+ k);
                Niveau4.innerHTML += '<p>' + base.dependance[i].dependance[j].dependance[k].dependance[l].contenue + '<p>'; 
              }
            }

          }
        }

      }











