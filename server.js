const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let drawings = []; // Pour stocker les dessins

app.use(cors()); // Permet les requêtes depuis d'autres origines
app.use(express.json()); // Pour traiter les données JSON

// Route pour enregistrer un dessin
app.post('/saveDrawing', (req, res) => {
    const { drawing } = req.body; // Récupère le dessin envoyé
    drawings.push(drawing); // Ajoute le dessin à notre tableau
    res.send('Dessin enregistré');
});

// Route pour récupérer les dessins
app.get('/getDrawings', (req, res) => {
    res.json({ drawings }); // Envoie tous les dessins
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en ligne sur http://localhost:${port}`);
});
