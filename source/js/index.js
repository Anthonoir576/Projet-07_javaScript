// variable et constante

const start = document.getElementById('start_date');
const end = document.getElementById('end_date');

const aujourdhui = new Date().toISOString().split('T')[0];

start.value = aujourdhui;
start.min = aujourdhui;

const demainDate = () => {

    let jour = new Date(aujourdhui);
    jour.setDate(jour.getDate() + 1);

    let demain = jour.toISOString().split('T')[0];
    end.value = demain;
    end.min = demain;
}

demainDate()

start.addEventListener('change', (e) => {

    let jour = new Date(e.target.value);
    jour.setDate(jour.getDate() + 1);
    let demain = jour.toISOString().split('T')[0];
    end.min = demain;
    end.value = demain;

})

const TOTAL = () => {

    let date01 = new Date(start.value);
    let date02 = new Date(end.value);

    let difference = Math.abs(date02 - date01);

    let diffJours = Math.ceil(difference / (1000 * 60 * 60 * 24))
    let nightPrice = document.getElementById('nightPrice').innerHTML;

    let total = diffJours * nightPrice;
    document.getElementById('total').innerHTML = total;
}

start.addEventListener('change', () => TOTAL());
end.addEventListener('change', () => TOTAL());

TOTAL()