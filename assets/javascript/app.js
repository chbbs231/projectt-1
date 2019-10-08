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




// incorporating NEWS API ***works with postman***
// change second line (q=Apple) to say either health, sports, or politics

// to get top news for home page
const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=152c8213a425472a94f4e747aae707b0';
var req = new Request(url);
fetch(req)
    .then(function (response) {
        console.log(response.json());
    })

const getArticles = article => {

    fetch(`https://newsapi.org/v2/everything?q=${article}&from=2019-10-06&sortBy=popularity&apiKey=152c8213a425472a94f4e747aae707b0`)

        .then(r => r.json())
        .then(({ articles }) => {
            // what happens to HTML after search
            articles.forEach(article => {
                let articleElem = document.createElement('div')
                articleElem.innerHTML = `
                <div class"outer" class="card border-light mb-3">
                  <div class"inner" class="card-header">${article.title}</div>
                  <div class="card-body">
                  <img class="imgcard"src="${article.urlToImage}" class="card-img-top" style="height: 100px" alt="${article.title}"
                   <span><p> <h5 class="card-title">${article.author}</h5></p></span>
                    <p class="card-text">${article.content}</p>
                    <button type="rmbutton" class="btn btn-primary btn-sm">Read more</button>
                  </div>
                </div>
                        `
                document.getElementById('display').append(articleElem)
            })
        })
}
getArticles()