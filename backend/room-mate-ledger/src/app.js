const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/signup', (req, res) => {
    res.send('Signup page!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})