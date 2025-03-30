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

$(function () {
    displayTextDataFunc.init();
})
