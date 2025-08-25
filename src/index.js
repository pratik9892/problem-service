const express = require("express")
const {PORT} = require("./config/server.config.js")
const bodyparser = require("body-parser")
const apiRouter = require("./routes/index.js")

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.text())

//route
app.use("/api" , apiRouter)

app.get("/" , (req,res) => {
    res.json({
        name : "Pratik"
    })
})

app.listen(PORT , () => {
    console.log(`Server is listening on port ${PORT}`)
})