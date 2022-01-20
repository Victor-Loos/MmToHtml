async function loadFile(fichier) {
    let mindMap = await fichier.MindMap();
    document.getElementById('resultat').textContent = MindMap;
}

const MapChosen = document.getElementById('inputFile').addEventListener('change', function() {
    var fichier = new FileReader();
    fichier.onload = () => {
            document.getElementById('resultat').textContent = fichier.resultat;
        }
        // fichier.readAsText(this.fichier[0]);
});