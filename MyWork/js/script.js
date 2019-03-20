'USE STRICT';
let img = document.querySelectorAll('img'),
    names = document.querySelectorAll('.card-name'),
    description = document.querySelectorAll('.card-desk'),
    price = document.querySelectorAll('.card-price'),
    card = document.querySelectorAll('.card'),
    countryCheck = document.querySelectorAll('input'),
    btnCountry = document.querySelector('.btnCountry'),
    btnAll = document.querySelector('.btnAll'),
    category = document.querySelectorAll('.card-category');


function priceJson() {

    let request = new XMLHttpRequest();
    request.open('GET', 'js/cars.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.onreadystatechange = () => {
        function promiseNew() {
            return new Promise(resolve => {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                }
            });
        }
        promiseNew()
            .then(() => {
                let data = JSON.parse(request.response);
                function allCars() {
                    for (let i = 0; i < data.cars.length; i++) {
                        img[i].src = data.cars[i].img;
                        names[i].innerHTML = data.cars[i].name;
                        description[i].innerHTML = data.cars[i].description;
                        category[i].innerHTML = data.cars[i].category;
                        price[i].innerHTML = data.cars[i].price;
                    }
                }

                function countryCars(country) {
                    let j = 0;
                    for (let i = 0; i < data.cars.length; i++) {
                        if (data.cars[i].category !== country) continue;
                        img[j].src = data.cars[i].img;
                        names[j].innerHTML = data.cars[i].name;
                        description[j].innerHTML = data.cars[i].description;
                        category[j].innerHTML = data.cars[i].category;
                        price[j].innerHTML = data.cars[i].price;
                        j++;
                    }
                }

                function clearCountry() {
                    for (let i = 0; i < data.cars.length; i++) {
                        img[i].src = '';
                        names[i].innerHTML = '';
                        description[i].innerHTML = '';
                        category[i].innerHTML = '';
                        price[i].innerHTML = '';
                    }
                }
                btnCountry.addEventListener('click', () => {
                    clearCountry();
                    countryCheck.forEach((item) => {
                        if (item.checked) {
                            countryCars(item.getAttribute('id'));
                        }
                    });
                });
                btnAll.addEventListener('click', () => {
                    clearCountry();
                    allCars();
                });
                allCars();
            });
    };
}
priceJson();
