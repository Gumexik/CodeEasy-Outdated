const express = require('express')
const app = express()
const port = 5000

app.post("/api/login", (req, res) => {
    const { username, password } = req.body
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})