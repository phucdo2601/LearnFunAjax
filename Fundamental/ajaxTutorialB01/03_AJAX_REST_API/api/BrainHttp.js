export class BrainHttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // GET REQUEST
    get = (url, callback) => {
        this.http.open('GET', url, true);
        this.http.send();
        this.http.onload = () => {
            if (this.http.status === 200) {
                let data = this.http.response;
                let responseData = JSON.parse(data);
                callback(null, responseData);
            } else {
                callback(`Error : ${this.http.status}`);
            }
        }
    };

    // POST REQUEST
    post = (url, dataBody, callback) => {
        this.http.open('POST', url, true);
        // add data on the sending body
        this.http.setRequestHeader('Content-Type', 'application/json');

        this.http.send(JSON.stringify(dataBody));
        this.http.onload = () => {
            let data = this.http.response;
            let employees = JSON.parse(data);
            console.log(employees);
            callback(employees);
        }
    };
}