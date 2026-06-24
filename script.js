const correctEmail = "member@stadiagym.com";
const correctPassword = "gym123";

const form = document.getElementById("loginForm");
const clearBtn = document.getElementById("clearBtn");
const errorMessage = document.getElementById("errorMessage");

if(form){

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    errorMessage.innerHTML = "";

    if(email !== correctEmail && password !== correctPassword){

        errorMessage.innerHTML =
        "Please enter a valid email and password.";

    }

    else if(email !== correctEmail){

        errorMessage.innerHTML =
        "Please enter a valid email.";

    }

    else if(password !== correctPassword){

        errorMessage.innerHTML =
        "Please enter a valid password.";

    }

    else{

        window.location.href = "home.html";

    }

});

}

if(clearBtn){

clearBtn.addEventListener("click", function(){

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    errorMessage.innerHTML = "";

});

}

const listViewBtn = document.getElementById("listViewBtn");
const gridViewBtn = document.getElementById("gridViewBtn");
const serviceCards = document.querySelectorAll(".service-card");

if(listViewBtn && gridViewBtn){

listViewBtn.addEventListener("click", function(){

    serviceCards.forEach(function(card){

        card.classList.remove("col-md-6");
        card.classList.add("col-12");

        card.classList.add("list-view");

    });

});

gridViewBtn.addEventListener("click", function(){

    serviceCards.forEach(function(card){

        card.classList.remove("col-12");
        card.classList.add("col-md-6");

        card.classList.add("list-view");

    });

});

}

