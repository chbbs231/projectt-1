
// initializing firebase***
const config = {
    apiKey: 'AIzaSyC1U8sQWVOz6FkYyxtNCBSRl8XDNZY24ao',
    authDomain: 'projectonebam.firebaseapp.com',
    databaseURL: 'https://projectonebam.firebaseio.com',
    projectId: 'projectonebam',
    storageBucket: '',
    messagingSenderId: '414001198345',
    appId: '1:414001198345:web:101af6fb28d538d95e0fd8',
    measurementId: 'G-MR21YKQQ59'
}
// Initialize Firebase
firebase.initializeApp(config);

// incorporating NEWS API ***works with postman***
// change second line (q=Apple) to say either health, sports, or politics

// to get top news for home page
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=152c8213a425472a94f4e747aae707b0';
var req = new Request(url);
fetch(req)
    .then(function (response) {
     console.log (  (response.json()));
    })

// to get sports articles
const getSports = sports => {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=Sports&' +
        'from=2019-10-04&' +
        'sortBy=popularity&' +
        'apiKey=152c8213a425472a94f4e747aae707b0';

    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })
}

// to get health articles
const getHealth = health => {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=Health&' +
        'from=2019-10-04&' +
        'sortBy=popularity&' +
        'apiKey=152c8213a425472a94f4e747aae707b0';

    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })
}

// to get politics articles
const getPolitics = politics => {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=Politics&' +
        'from=2019-10-04&' +
        'sortBy=popularity&' +
        'apiKey=152c8213a425472a94f4e747aae707b0';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })
}

/*const getSportArticles = article =>{
    fetch(`https://newsapi.org/v2/everything?q=${article}&from=2019-10-05&sortBy=Sports&apiKey=152c8213a425472a94f4e747aae707b0`)
    .then(r => r.json())
    .then(({article}) => {
        article.forEeach(getSportArticles => {
            let articleElem = document.createElement(`div`)
            articleElem.innerHTML= `
            <h1>${article.title}</h1>
            <h2>${article.author}</h2>
            <img src="${article.urlToImage}" alt= "${article.title}"></img>
            <h5>${article.content}</h5>`

            document.getElementById(`sportart`).append(articleElm)
        })
    })
}
getSportArticles()*/

const topNewsArt = article => {
    fetch(`https://newsapi.org/v2/everything?q=${article}&from=2019-10-05&sortBy=Sports&apiKey=152c8213a425472a94f4e747aae707b0`)
    .then(r => r.json())
    .then(({article}) => {
        article.forEach(article => {
            let articleElem = document.createElement('div')
            articleElem.innerHTML= `
            <h1>${article.title}</h1>
            <h2>${article.author}</h2>
            <img src="${article.urlToImage}" alt= "${article.title}"></img>
            <h5>${article.content}</h5>`

            document.getElementById('topnews').append(articleElm)
        })
    })
}
topNewsArt()
/*const getPoliArt = article => {
    fetch(`https://newsapi.org/v2/everything?q=${article}&from=2019-10-05&sortBy=politics&apiKey=152c8213a425472a94f4e747aae707b0`)
    .then(r => r.json())
    .then(({articles}) => {
        articles.forEach(article => {
            let articleElem = document.createElement(`div`)
            articleElem.innerHTML= `
            <h1>${article.title}</h1>
            <h2>${article.author}</h2>
            <img src="${article.urlToImage}" alt= "${article.title}"></img>
            <h5>${article.content}</h5>`

            document.getElementsByClassName("card border-light mb-3").append(articleElm)
        })
    })
}
getPoliArt()*/
