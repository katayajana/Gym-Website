const correctEmail = "member@stadiagym.com";
const correctPassword = "gym123";

const form = document.getElementById("loginForm");
const clearBtn = document.getElementById("clearBtn");
const errorMessage = document.getElementById("errorMessage");

if(form){

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    const password = document.getElementById("password").value;

    errorMessage.innerHTML = "";

    if (!emailPattern.test(email)) {

    errorMessage.innerHTML =
    "Please enter a valid email format.";

}

    else if(email !== correctEmail && password !== correctPassword){

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

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function(card){

        card.classList.remove("col-md-6");
        card.classList.add("col-12");

        card.classList.add("list-view");

    });

});

    gridViewBtn.addEventListener("click", function(){

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function(card){

        card.classList.remove("col-12");
        card.classList.add("col-md-6");

        card.classList.remove("list-view");

    });

});

}

async function LoadServices() {

    const services = await GetAllServices();

    const loader = document.getElementById("loader");
    const container = document.getElementById("servicesContainer");

    loader.style.display = "block";
    container.style.display = "none";

    await new Promise(resolve => setTimeout(resolve, 3000));

    loader.style.display = "none";
    container.style.display = "flex";

    container.innerHTML = "";

    services.forEach(service => {

        container.innerHTML += `
            <div class="col-md-6 service-card">

                <div class="card h-100">

                    <img src="${service.image}"
                         class="card-img-top"
                         alt="${service.title}">

                    <div class="card-body">

                        <h3 class="card-title">
                            ${service.title}
                        </h3>

                        <p>
                            <strong>Schedule:</strong>
                            ${service.schedule}
                        </p>

                        <p class="card-text">
                            ${service.description}
                        </p>

                    </div>

                </div>

            </div>
        `;

    });

}

if(document.getElementById("servicesContainer")){
    LoadServices();
}

async function LoadHomeServices() {

    const services = await GetAllServices();

    const container = document.getElementById("homeServicesContainer");

    if (!container) return;

    container.innerHTML = "";

    services.forEach(service => {

        container.innerHTML += `
            <div class="swiper-slide">

                <div class="card h-100">

                    <img src="${service.image}"
                         class="card-img-top"
                         alt="${service.title}">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${service.title}
                        </h5>

                        <p class="card-text">
                            ${service.description}
                        </p>

                    </div>

                </div>

            </div>
        `;

    });

    new Swiper(".servicesSwiper", {

        slidesPerView: 2,
        spaceBetween: 30,

        pagination: {
            el: ".services-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        }

    }); 

}

if(document.getElementById("homeServicesContainer")){
    LoadHomeServices();
}
