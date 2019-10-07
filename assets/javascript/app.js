// Firebase Configuration
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

//Creating a variable for the firebase db
database = firebase.firestore()

// FirebaseUI config.
const uiConfig = {
    signInSuccessUrl: 'index.html',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth())
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig)

//For User Sign In / Sign Out Buttons
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById(`login`).style.display = `none`
        document.getElementById(`signOut`).style.display = `inline`
    } else {
        document.getElementById(`login`).style.display = `inline`
        document.getElementById(`signOut`).style.display = `none`
    }
})

//User Sign Out
document.getElementById(`signOut`).addEventListener(`click`, e => {
    firebase.auth().signOut()
    document.getElementById(`signedOutAlert`).innerHTML = `
   <div class="alert alert-info alert-dismissible fade show text-center" role="alert">
  <strong>You're Signed Out!</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
   `
})


// Incorporating NEWS API 
//Tested with postman
// change second line (q=Apple) to say either health, sports, or politics

// to get top news for home page
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=152c8213a425472a94f4e747aae707b0';
var req = new Request(url);
fetch(req)
    .then(function (response) {
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


// Search Results
document.getElementById(`searchBtn`).addEventListener(`click`, e => {
    e.preventDefault()
    //Grab the users search
    let userSearch = document.getElementById(`searchInput`).value
    console.log(userSearch)
    //Empty the search input
    document.getElementById(`searchInput`).value = ``

    const getSearch = search => {
        //Get the search content from the API
        fetch(`https://newsapi.org/v2/everything?q=${userSearch}&from=2019-10-05&sortBy=popularity&apiKey=152c8213a425472a94f4e747aae707b0`)
            .then(r => r.json())
            .then(({ articles }) => {
                articles.forEach(article => {
                    let articleElem = document.createElement('div')
                    articleElem.innerHTML =
                        ` <div class="card border-light mb-3">
                            <div class="card-header">${article.title}</div>
                            <div class="card-body">
                            <img src="${article.urlToImage}" class="card-img-top" style="height: 150px;" alt="${article.title}"
                                <h5 class="card-title">${article.author}</h5>
                                <p class="card-text">${article.content}</p>
                                <button type="button" class="btn btn-primary btn-sm">Read More</button>
                            </div>
                            </div>
                        `
                    document.getElementById(`searchArticles`).append(articleElem)
                })

            })
            .catch(e => console.log(e))
    }
    getSearch()
})