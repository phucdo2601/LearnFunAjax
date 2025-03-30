// display data text
var displayTextDataFunc = {
    // Text file data
    init: function () {
        let textBtn = document.querySelector('#text-btn');
        textBtn.addEventListener('click', function () {
            // Create AJAX request
            let xhr = new XMLHttpRequest();

            // Prepare the request
            xhr.open('GET', './data/message.txt', true);

            // send the request
            xhr.send();

            // Process the request
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let data = xhr.responseText;
                    console.log(data);
                    displayTextDataFunc.displayTextData(data);
                }
            }
        })
    },

    displayTextData: function (data) {
        var htmlTemplate = `<h3>${data}</h3>`;
        document.querySelector('#text-card').innerHTML = htmlTemplate;
    },
}

// display json data
var displayJsonDataFunc = {
    init: function () {
        let jsonBtn = document.querySelector('#json-btn');
        jsonBtn.addEventListener('click', function () {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', './data/mobiles.json', true);
            xhr.send();
            xhr.onload = () => {
                let data = xhr.response;

                let mobile = JSON.parse(data);
                console.log(mobile);
                console.log(typeof mobile);
                displayJsonDataFunc.displayJsonObjectData(mobile);
            }
        });
    },

    // display json data
    displayJsonObjectData: function (mobile) {
        var htmlTemplate = `
            <ul class="list-group">
                <li class="list-group-item">ID: ${mobile.id}</li>
                <li class="list-group-item">BRAND: ${mobile.brand}</li>
                <li class="list-group-item">COLOR: ${mobile.color}</li>
                <li class="list-group-item">PRICE: ${mobile.price}</li>
            </ul>
        `;

        document.querySelector("#json-card").innerHTML = htmlTemplate;
    }
}

// display API data
var displayApiDataFunc = {
    init: function () {
        let apiBtn = document.querySelector('#api-btn');
        apiBtn.addEventListener('click', function () {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
            xhr.send();
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let data = xhr.response;
                    // console.log(data);
                    let users = JSON.parse(data);
                    console.log(users);
                    displayApiDataFunc.displayAPIData(users);
                }
            }
        });
    },

    // display list data on API response
    displayAPIData: function (users) {
        var htmlTemplate = ``;
        for (let user of users) {
            htmlTemplate += `
                <ul class='list-group mt-1'>
                    <li class="list-group-item">ID:    ${user.id}</li>
                    <li class="list-group-item">USER NAME: ${user.name}</li>
                    <li class="list-group-item">STREET: ${user.address.street}</li>
                    <li class="list-group-item">CITY:   ${user.address.city}</li>
                    <li class="list-group-item">ZIP CODE:   ${user.address.zipcode}</li>
                </ul>
            `;
        }

        document.querySelector('#api-card').innerHTML = htmlTemplate;
    }
}



$(function () {
    displayTextDataFunc.init();
    displayJsonDataFunc.init();
    displayApiDataFunc.init();
})
