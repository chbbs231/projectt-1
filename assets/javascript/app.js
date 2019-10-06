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

// //Click Event On Sign Up Button in Modal to store the info provided
// document.getElementById(`signUp`).addEventListener(`click`, e => {
//     e.preventDefault()

//     //Object for new user
//     const newUser = {
//         email: document.getElementById(`signUpEmail`).value,
//         password: document.getElementById(`signUpPassword`).value,
//         confPw: document.getElementById(`confPassword`).value
//     }

//     //Validating the sign up form
//     if (newUser.password !== newUser.confPw) {
//         document.getElementById(`alert`).innerHTML = `
//              <div class="alert alert-info text-center" role="alert" id="alert">Please enter matching passwords.</div>
//         `
//     } else {
//         //Reset form
//         document.getElementById(`signUpEmail`).value = ""
//         document.getElementById(`signUpPassword`).value = ""
//         document.getElementById(`confPassword`).value = ""

//         //Storing the new user object into the Firestore database
//         database
//             .collection(`users`)
//             .doc(newUser.email)
//             .set(newUser)

//         //Have modal display a thank you message
//         document.getElementById(`signUpContent`).innerHTML = `
//                 <div class="modal-header">
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div class="modal-body text-center p-5">
//                     <h3 class="text-info">Thanks for Signing Up with BAM!<h3>
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                 </div>
//                 `
//     }
// })

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



// incorporating NEWS API ***works with postman***
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
