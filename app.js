const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log("exoo")
    res.send("Hello can 3")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server")
})