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

//Creating a vaiable for the db
database = firebase.firestore()

//Click Event On Sign Up Button in Modal to store the info provided
document.getElementById(`signUp`).addEventListener(`click`, e => {
    e.preventDefault()

    //Object for new user
    const newUser = {
        email: document.getElementById(`signUpEmail`).value,
        password: document.getElementById(`signUpPassword`).value,
        confPw: document.getElementById(`confPassword`).value
    }
    //TESTING - console log object of input values on submit
    console.log(newUser)

    //Storing the new train object into the Firestore database
    database
        .collection(`users`)
        .doc(newUser.email)
        .set(newUser)

    //Reset form
    document.getElementById(`signUpEmail`).value = ""
    document.getElementById(`signUpPassword`).value = ""
    document.getElementById(`confPassword`).value = ""

    //Document Snapshot & have modal display a thank you message
    database
        .collection(`users`)
        .onSnapshot(({ docs }) => {
            docs.forEach(user => {
                let { email, password, confPw } = user.data()
                document.getElementById(`signUpContent`).innerHTML = `
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <h2>Thanks for Signing Up with BAM!<h2>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                `
            })
        })

})

// to get health articles
const getHealth = health => {
    var url = 'https://newsapi.org/v2/everything?q=Health&from=2019-10-04&sortBy=health&apiKey=152c8213a425472a94f4e747aae707b0';

    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })
}


const healthDis = article => {
    fetch(`https://newsapi.org/v2/everything?q=${article}&from=2019-10-05&sortBy=health&apiKey=152c8213a425472a94f4e747aae707b0`)

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
        <div id= "rmmodal" class= "modal"></div>
                `
                document.getElementById('hdisplay').append(articleElem)
            })
        })
}
healthDis()

document.getElementById('rmbutton').addEventListener('click', e=>{
// Get the modal
var modal = document.getElementById("rmmodal");

// Get the button that opens the modal
var btn = document.getElementById("rmbutton");

btn.onclick = function() {
    modal.style.display = "block";
  }
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})