const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/collection', (req, res) => {
    res.render('pages/collection')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/details/:uid', (req, res) => {
    res.render('pages/details')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})