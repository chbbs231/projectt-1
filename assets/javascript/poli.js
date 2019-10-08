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
