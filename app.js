const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello can sadsadsadsadsa 3")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server")
})