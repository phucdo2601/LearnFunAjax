import { BrainHttp } from './api/BrainHttp.js';
const serverUrl = `http://127.0.0.1:9000/api/`;

var loadListDataInit = {
    init: function () {
        console.log("test123");
        apiHandlerFunc.fetchListEmployees();
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
}

$(function () {
    loadListDataInit.init();
});
