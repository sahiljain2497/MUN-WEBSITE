const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
//create localhost server
//const server = http.createServer();
//server.listen(port);
app.listen(port, function () {
    console.log("listening");
});
