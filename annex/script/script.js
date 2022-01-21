$("#fileInput").on("change", function() {


    var selctFile = document.getElementById('fileInput').files[0];
    console.log(document.getElementById('fileInput').files[0]);
    alert("votre fichier est chargé");


    // A remplacer par l'objet renvoyer --------------innerHTML-----------

    class item {
        constructor(contenue) {
            this.contenue = contenue; // Récupère le contenue d'un item
            this.dependance = []; // Permet de gérer les dépendance de l'item
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







    var la = new item("la");
    var fou = new item("fou");

    var ze = new item("mais oui");
    var bi = new item("mais non");

    var star = new item("star");
    star.dependance.push(ze);
    star.dependance.push(bi);

    var test1 = new item("test1");
    test1.dependance.push(star);
    test1.dependance.push(fou);
    test1.dependance.push(la);





    var test2 = new item("test2");
    var test3 = new item("test3");

    var base = new item("base");
    base.dependance.push(testo);
    base.dependance.push(okSaroule);
    base.dependance.push(test1);
    base.dependance.push(test2);
    base.dependance.push(test3);


    //.consol.log("")
    // --------------------------------------------


    // Modifier le titre de la mind map
    var Main = document.getElementById("MindMapTitre");
    Main.innerHTML = null;

    for (var i = 0; i < 19; i++) { // Affiche 20 branches max

        // Ajouter 1 grand titre
        var Niveau1 = document.getElementById("Liste1"); // Récupère la liste principale
        Niveau1.innerHTML += '<li class="Front">' + base.dependance[i].contenue + '<ul id=Titre' + i + '></ul></li>'; // Ajoute la liste du premier niveau (for). Ajoute un id pour la récupérer après.
        // .innerText -> écrit directement dans html
        // .innerHTML -> écrit et triate le rendu dans html
        // L'utilisateur pourais injecter du code ? -> plus sécurisé avec : var = document.createElement("li")

        for (var j = 0; j < 19; j++) {
            if ((base.dependance[i] == null) || (base.dependance[i].dependance[j] == null)) { break; } // Vérifie que les branches précédente et actuelle ne sont pas vide.
            else {
                // Ajouter 1 sous titre
                var Niveau2 = document.getElementById("Titre" + i);
                Niveau2.innerHTML += '<li id="hid">' + base.dependance[i].dependance[j].contenue + '<ul id=SousTitre' + j + '></ul></li>';
            }

            for (var k = 0; k < 19; k++) {
                if ((base.dependance[i].dependance[j] == null) || (base.dependance[i].dependance[j].dependance[k] == null)) { break; } else {
                    // Ajouter 1 sous sous titre
                    var Niveau3 = document.getElementById("SousTitre" + j);
                    Niveau3.innerHTML += '<li id="hid">' + base.dependance[i].dependance[j].dependance[k].contenue + '<ul id=SoussousTitre' + k + '></ul></li>';
                }

                for (var l = 0; l < 19; l++) {
                    if ((base.dependance[i].dependance[j].dependance[k] == null) || (base.dependance[i].dependance[j].dependance[k].dependance[l] == null)) { break; } else {
                        // Ajouter 1 sous sous sous titre
                        var Niveau4 = document.getElementById("SoussousTitre" + k);
                        Niveau4.innerHTML += '<li id="hid">' + base.dependance[i].dependance[j].dependance[k].dependance[l].contenue + '<ul id=SoussousTitre' + l + '></ul></li>';
                    }
                }
            }

        }
    }


});