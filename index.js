const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({hi: "there"})
})

app.listen(PORT)