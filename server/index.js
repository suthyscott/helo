require("dotenv").config()

const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

const ctrl = require('./controller')


app.use(express.json())

const port = SERVER_PORT

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB connected.')
})

// Authentication
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)

app.get('/api/posts/:userid', ctrl.getPosts)

app.listen(port, () => console.log(`Take us to warp ${port}!`))