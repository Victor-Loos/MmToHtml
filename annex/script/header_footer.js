let header = document.createElement("header");
header.id = "test";
document.getElementById("main").appendChild(header);

let inner = document.createElement("div");
inner.className = "inner";
document.getElementById("test").appendChild(inner);

/*******************logo site********************/
let div_header_1 = document.createElement("div");
div_header_1.className = "m-left";
document.getElementsByClassName("inner").appendChild(div_header_1);

let comeback = document.createElement("a");
comeback.id = "comeback";
comeback.location.href = "#";
document.getElementsByClassName("m-left").appendChild(comeback);

let logo_site = document.createElement("img");
logo_site.data = "../pic/icon.png";
logo_site.height = "50px";
document.getElementById("comeback").appendChild(logo_site);
/************************************************/


/*******************titre site********************/
let div_header_2 = document.createElement("div");
div_header_2.className = "m-center";
document.getElementsByClassName("inner").appendChild(div_header_2);

let div_titre = document.createElement("a");
div_titre.id = "blanc";
div_titre.location.href = "#";
document.getElementsByClassName("m-center").appendChild(div_titre);

let titre_site = document.createElement("h1");
titre_site.className = "Note-Title";
titre_site.id = "MindMapTitre";
titre_site.innerText = "Tout doit être pouvoir";
document.getElementById("blanc").appendChild(titre_site);
/*************************************************/


soubigcat.className = "salutations";


let cat = document.createElement("li");
cat.className = "Front";
cat.appendChild(document.createTextNode(base.dependance[i].contenue));
document.getElementById("salutations").appendChild(cat);