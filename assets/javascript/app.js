// Firebase Configuration
const config = {
    apiKey: 'AIzaSyC1U8sQWVOz6FkYyxtNCBSRl8XDNZY24ao',
    authDomain: 'projectonebam.firebaseapp.com',
    databaseURL: 'https://projectonebam.firebaseio.com',
    projectId: 'projectonebam',
    storageBucket: 'projectonebam.appspot.com',
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

// to get top news for home page
const getArticles = article => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=63ed6db340cb46dfb7c3745d5a42a3c0`)
        .then(r => r.json())
        .then(({ articles }) => {
            articles.forEach(article => {
                let articleElem = document.createElement('div')
                articleElem.innerHTML =
                    ` 
                <div class="card mb-2 border-0 bg-light" style="max-width: auto;" >
                    <div class="row no-gutters">
                        <div class="col-md-6">
                        <img src="${article.urlToImage}" class="card-img" style="height: 200px; width: 340px;" alt="${article.title}">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}.</p>
                                
                                <button type="button" class="btn btn-primary navColor" data-toggle="modal" data-target="#readMoreModal">
                                Read More
                                </button>

                                <!-- read more modal -->
                                <div class="modal fade" id="readMoreModal" tabindex="-1" role="dialog" aria-labelledby="readMoreModalTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="readMoreModalTitle">${article.title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    
                                    <div class="modal-image">
                                        <img src="${article.urlToImage}" style="height: 200px; width: 340px; display: block; margin-left: auto; margin-right: auto;" alt="${article.title}">
                                    </div>

                                    <div class="modal-body">
                                        ${article.content}
                                        <br><br>
                                        <h6><i>Purchase News API Business for full article</i><h6>
                                    </div>

                                    <div class="modal-footer">
                                     <p class="card-text"><small class="text-primary">UPGRADE YOUR ACCOUNT TO READ  THE FULL ARTICLE!</small></p>
                                        <button type="button" class="btn btn-secondary navColor" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById('display').append(articleElem)
            })
        })
}
getArticles()

//Sports Page Results
const getSports = sports => {
    fetch(`https://newsapi.org/v2/everything?q=Sports&from=2019-10-06&sortBy=sports&apiKey=63ed6db340cb46dfb7c3745d5a42a3c0`)
        .then(r => r.json())
        .then(({ articles }) => {
            articles.forEach(article => {
                let articleElem = document.createElement('div')
                articleElem.innerHTML =
                    ` 
                <div class="card mb-2 border-0 bg-light" style="max-width: auto;" >
                    <div class="row no-gutters">
                        <div class="col-md-6">
                        <img src="${article.urlToImage}" class="card-img" style="height: 200px; width: 340px;" alt="${article.title}">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}.</p>
                                
                                <button type="button" class="btn btn-primary navColor" data-toggle="modal" data-target="#readMoreModal">
                                Read More
                                </button>

                                <!-- read more modal -->
                                <div class="modal fade" id="readMoreModal" tabindex="-1" role="dialog" aria-labelledby="readMoreModalTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="readMoreModalTitle">${article.title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    
                                    <div class="modal-image">
                                        <img src="${article.urlToImage}" style="height: 200px; width: 340px; display: block; margin-left: auto; margin-right: auto;" alt="${article.title}">
                                    </div>

                                    <div class="modal-body">
                                        ${article.content}
                                        <br><br>
                                        <h6><i>Purchase News API Business for full article</i><h6>
                                    </div>

                                    <div class="modal-footer">
                                     <p class="card-text"><small class="text-primary">UPGRADE YOUR ACCOUNT TO READ  THE FULL ARTICLE!</small></p>
                                        <button type="button" class="btn btn-secondary navColor" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById('sportart').append(articleElem)
            })
        })
}
getSports()

//Health Page Results
const getHealthArticles = health => {
    fetch(`https://newsapi.org/v2/everything?q=Health&from=2019-10-04&sortBy=health&apiKey=63ed6db340cb46dfb7c3745d5a42a3c0`)
        .then(r => r.json())
        .then(({ articles }) => {
            articles.forEach(article => {
                let articleElem = document.createElement('div')
                articleElem.innerHTML =
                    ` 
                <div class="card mb-2 border-0 bg-light" style="max-width: auto;" >
                    <div class="row no-gutters">
                        <div class="col-md-6">
                        <img src="${article.urlToImage}" class="card-img" style="height: 200px; width: 340px;" alt="${article.title}">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}.</p>
                                
                                <button type="button" class="btn btn-primary navColor" data-toggle="modal" data-target="#readMoreModal">
                                Read More
                                </button>

                                <!-- read more modal -->
                                <div class="modal fade" id="readMoreModal" tabindex="-1" role="dialog" aria-labelledby="readMoreModalTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="readMoreModalTitle">${article.title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    
                                    <div class="modal-image">
                                        <img src="${article.urlToImage}" style="height: 200px; width: 340px; display: block; margin-left: auto; margin-right: auto;" alt="${article.title}">
                                    </div>

                                    <div class="modal-body">
                                        ${article.content}
                                        <br><br>
                                        <h6><i>Purchase News API Business for full article</i><h6>
                                    </div>

                                    <div class="modal-footer">
                                     <p class="card-text"><small class="text-primary">UPGRADE YOUR ACCOUNT TO READ  THE FULL ARTICLE!</small></p>
                                        <button type="button" class="btn btn-secondary navColor" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById('hdisplay').append(articleElem)
            })
        })
}
getHealthArticles()


//Politics Page Results
const getPolitics = politics => {
    fetch(`https://newsapi.org/v2/everything?q=Politics&from=2019-10-06&sortBy=popularity&apiKey=63ed6db340cb46dfb7c3745d5a42a3c0`)

        .then(r => r.json())
        .then(({ articles }) => {
            articles.forEach(article => {
                let articleElem = document.createElement('div')
                articleElem.innerHTML =
                    ` 
                <div class="card mb-2 border-0 bg-light" style="max-width: auto;" >
                    <div class="row no-gutters">
                        <div class="col-md-6">
                        <img src="${article.urlToImage}" class="card-img" style="height: 200px; width: 340px;" alt="${article.title}">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}.</p>
                                
                                <button type="button" class="btn btn-primary navColor" data-toggle="modal" data-target="#readMoreModal">
                                Read More
                                </button>

                                <!-- read more modal -->
                                <div class="modal fade" id="readMoreModal" tabindex="-1" role="dialog" aria-labelledby="readMoreModalTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="readMoreModalTitle">${article.title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    
                                    <div class="modal-image">
                                        <img src="${article.urlToImage}" style="height: 200px; width: 340px; display: block; margin-left: auto; margin-right: auto;" alt="${article.title}">
                                    </div>

                                    <div class="modal-body">
                                        ${article.content}
                                        <br><br>
                                        <h6><i>Purchase News API Business for full article</i><h6>
                                    </div>

                                    <div class="modal-footer">
                                     <p class="card-text"><small class="text-primary">UPGRADE YOUR ACCOUNT TO READ  THE FULL ARTICLE!</small></p>
                                        <button type="button" class="btn btn-secondary navColor" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById('politicsart').append(articleElem)
            })
        })
}
getPolitics()


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
        fetch(`https://newsapi.org/v2/everything?q=${userSearch}&from=2019-10-05&sortBy=popularity&apiKey=63ed6db340cb46dfb7c3745d5a42a3c0`)
            .then(r => r.json())
            .then(({ articles }) => {
                document.getElementById(`searchArticles`).innerHTML = ``
                articles.forEach(article => {
                    let articleElem = document.createElement('div')
                    articleElem.innerHTML =
                        ` 
                    <div class="card mb-2 border-0 bg-light" style="max-width: auto;" >
                        <div class="row no-gutters">
                            <div class="col-md-6">
                            <img src="${article.urlToImage}" class="card-img" style="height: 200px; width: 340px;" alt="${article.title}">
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                    <h5 class="card-title">${article.title}</h5>
                                    <p class="card-text">${article.description}.</p>
                                    
                                    <button type="button" class="btn btn-primary navColor" data-toggle="modal" data-target="#readMoreModal">
                                    Read More
                                    </button>
    
                                    <!-- read more modal -->
                                    <div class="modal fade" id="readMoreModal" tabindex="-1" role="dialog" aria-labelledby="readMoreModalTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="readMoreModalTitle">${article.title}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        
                                        <div class="modal-image">
                                            <img src="${article.urlToImage}" style="height: 200px; width: 340px; display: block; margin-left: auto; margin-right: auto;" alt="${article.title}">
                                        </div>
    
                                        <div class="modal-body">
                                        ${article.content}
                                        <br><br>
                                        <h6><i>Purchase News API Business for full article</i><h6>
                                    </div>

                                        <div class="modal-footer">
                                        <p class="card-text"><small class="text-primary">UPGRADE YOUR ACCOUNT TO READ  THE FULL ARTICLE!</small></p>
                                            <button type="button" class="btn btn-secondary navColor" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
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

