const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts);
app.use(express.static('public'))
app.set('layout', './layouts/main')

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    const contact = {
        "name" : "Adrián Estrada",
        "email" : "adrian.estrada.alvarez@gmail.com",
        "phone" : "411111",
        "address" : "Alv"
    }
    res.render('contact', {contact:contact});
})

app.get('/services', (req, res) => {
    const services = [
        {"name":"Server Administration", "description":"bla, bla, bla...", "price":"$10000"},
        {"name":"Web Design", "description":"bla, bla, bla...", "price":"$39393"},
        {"name":"Networking Design", "description":"bla, bla, bla...", "price":"$12345"},
    ]

    res.render('services', {services:services})
})


app.listen(port, () => console.log(`Example app listening on port ${port}`))