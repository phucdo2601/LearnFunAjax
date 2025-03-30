const express = require('express');

const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter');

const host = "127.0.0.1";
const port = "9000";

// configure body-parser
const jsonparser = bodyparser.json();
const urlEncodeedParser = bodyparser.urlencoded({
    extended: false,
});
app.use(jsonparser);
app.use(urlEncodeedParser);

// configure cors
app.use(cors());

// config router
app.use('/api', apiRouter);

// get
app.get('/', (request, response) => {
    response.send(`
        <h2>
            Welcome to my API nodejs sever app!
        </h2>
        `)
})

app.listen(port, host, () => {
    console.log(`Express Server is Started at http://${host}:${port}`);

});
