const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require("hbs");
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(bodyParser.json());
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname + '/views')));

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/ugna", (req, res) => {
    res.render("ugna");
})
app.get("/hnc", (req, res) => {
    res.render("hnc");
})
app.get("/mossad", (req, res) => {
    res.render("mossad");
})
app.get("/ccs", (req, res) => {
    res.render("ccs");
})
app.get("/aippm", (req, res) => {
    res.render("aippm");
})
app.get("/team", (req, res) => {
    res.render("team");
})
app.get("/committees", (req, res) => {
    res.render("committees");
})

module.exports = app;
