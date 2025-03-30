import { BrainHttp } from './api/BrainHttp.js';
const serverUrl = `http://127.0.0.1:9000/api/`;

// get load list data
var loadListData = {
    init: function () {
        // get button
        var getBtn = document.querySelector('#get-btn');
        getBtn.addEventListener('click', function () {
            apiHandlerFunc.fetchListEmployees();
        });
    },
}

// create data on server
var createNewData = {
    init: function () {
        // post button
        var postBtn = document.querySelector('#post-btn');
        postBtn.addEventListener('click', function () {
            apiHandlerFunc.postNewEmployee();
        });
    }
}

var apiHandlerFunc = {
    fetchListEmployees: function () {
        // AJAX CALLS API
        let http = new BrainHttp();
        let url = `${serverUrl}/employees`;
        http.get(url, (err, employees) => {
            if (err) {
                throw err;
            }
            console.log(employees);
            let tableRows = '';
            for (let employee of employees) {
                tableRows += `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.ip_address}</td>
                    </tr>
                `;

            }

            document.querySelector('#table-body').innerHTML = tableRows;
        });
    },

    postNewEmployee: function () {
        let url = `${serverUrl}/employees`;
        let employee = {
            "first_name": "test_first_name_b02",
            "last_name": "test_last_name_b02",
            'email': "testEmailB01@gmail.com",
            "gender": "FeMale",
            "ip_address": "132.88.564.99"
        };

        let http = new BrainHttp();
        http.post(url, employee, (data) => {
            alert(JSON.stringify(data));
            apiHandlerFunc.fetchListEmployees();
        });
    }
}

$(function () {
    loadListData.init();
    createNewData.init();
});