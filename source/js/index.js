// variable et constante

const start = document.getElementById('start_date');
const end = document.getElementById('end_date');

const aujourdhui = new Date().toISOString().split('T')[0];

start.value = aujourdhui;
start.min = aujourdhui;

const demainDate = () => {

    let jour = new Date(aujourdhui);
    jour.setDate(jour.getDate() + 1);
    
}
