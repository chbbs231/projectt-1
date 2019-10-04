// incorporating NEWS API ***works with postman***
// change second line (q=Apple) to say either health, sports, or politics

// to get top news for home page
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=152c8213a425472a94f4e747aae707b0';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
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
    .then(function(response) {
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
    .then(function(response) {
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
       .then(function(response) {
           console.log(response.json());
       })
    }
