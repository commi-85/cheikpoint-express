const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './laVue');

app.use((req, res, next) => {
    const date = new Date();
    const jour = date.getDay(); 
    const heure = date.getHours();

    if (jour >= 1 && jour <= 5 && heure >= 9 && heure < 17) {
        next(); 
    } else {
        res.render('./fermer'); 
    }
});

app.get('/', (req, res) => {
    res.render('accueil');
});
app.get('/accueil', (req, res) => {
    res.render('accueil');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/nosServices', (req, res) => {
    res.render('nosServices');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
