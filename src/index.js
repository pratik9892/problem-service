const express = require("express")
const {PORT} = require("./config/server.config.js")
const bodyparser = require("body-parser")
const apiRouter = require("./routes/index.js")
const BaseError = require("./errors/baseError.js")
const errorHandler = require("./utils/errorHandler.js")
const connectToDB = require("./config/db.config.js")
const { default: mongoose } = require("mongoose")

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.text())

//routes
app.use("/api" , apiRouter)

app.get("/" , (req,res) => {
    res.json({
        name : "Pratik"
    })
})

app.use(errorHandler)

app.listen(PORT , async () => {
    console.log(`Server is listening on port ${PORT}`)
    await connectToDB()
    console.log("succesfully connected to DB")
})