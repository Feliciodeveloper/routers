const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

function config () {
    const app = express()
    app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    //consign().include("controllers").into(app)
    return app
}

module.exports = config