
async function loadFile(fichier) {
        let MindMap = await fichier.MindMap();
        document.getElementById('resultat').textContent = MindMap;
      }

      document.getElementById('inputFile').addEventListener('change', function() {
        var fichier = new FileReader();
        fichier.onload = () => {
          document.getElementById('resultat').textContent = fichier.result;
        }
        fichier.readAsText(this.fichier[0]);