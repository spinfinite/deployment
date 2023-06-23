const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '180cf30d6762477bb23aed4c6e5fa916',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req,res) => {

    res.status(200).sendFile(path.join(__dirname,'../public/index.html'))
})

app.get('/castle', (req,res) => {

    res.status(200).send('<h1>Welcome to my castle!</h1>')

})

app.get('/profile',(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'../public/profile.html'))
})


app.get('/break', (req, res) =>{
    try {
        nonExistentFunction(req,body);
    } catch (err) {
        rollbar.error('I am broken')
    }
})
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)

  
app.get('/error', tryFunc)


app.listen(4000, () => console.log('Server running on 4000!'))