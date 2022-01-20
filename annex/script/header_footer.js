let header = document.createElement("header");
header.id = "test";
document.getElementById("main").appendChild(header);

let inner = document.createElement("div");
inner.className = "inner";
document.getElementById("test").appendChild(inner);

let mleft = document.createElement("div");
inner.className = "m-left";
document.getElementsByClassName("inner").appendChild(mleft);

let comeback = document.createElement("a");
comeback.location.href = "#";
document.getElementById("m-left").appendChild(comeback);

let logo_site = document.createElement("object");
logo_site.data = "../pic/icon.png";
logo_site.height = "50px";
document.getElementById("a").appendChild(comeback);



soubigcat.className = "salutations";


let cat = document.createElement("li");
cat.className = "Front";
cat.appendChild(document.createTextNode(base.dependance[i].contenue));
document.getElementById("salutations").appendChild(cat);