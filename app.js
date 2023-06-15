require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')

const initApi = req => {
    return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        req
    })
}

const handleLinkResolver = doc => {
    return '/'
}

app.use((req, res, next) => {
    res.locals.ctx = {
        endpoint: process.env.PRISMIC_ENDPOINT,
        linkResolver: handleLinkResolver
    }

    res.locals.PrismicDOM = PrismicDOM

    next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/collection', (req, res) => {
    res.render('pages/collection')
})

app.get('/about', async (req, res) => {
    const api = await initApi(req)
    const about = await api.getSingle('about')
    const meta = await api.getSingle('meta')

    res.render('pages/about', {
        about,
        meta
    })
})

app.get('/details/:uid', async (req, res) => {
    const api = await initApi(req)
    const meta = await api.getSingle('meta')
    const product = await api.getByUID('product', req.params.uid, {
        fetchLinks: 'collection.title'
    })

    console.log(product.highlights)
    res.render('pages/details', {
        meta,
        product
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})