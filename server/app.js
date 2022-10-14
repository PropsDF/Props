const express = require('express')
const app = express();

const db = require('./models/db')

app.get("/", async (req, res) => {
    res.send("pagina incial")
})

app.listen(5000, () => {
    console.log("server successfully connected to port 5000")
})