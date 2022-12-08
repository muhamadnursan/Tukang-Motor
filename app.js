const express = require("express")
const app = express()
const port = 3000
const router = require('./Routes/')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'rahasia perusahaan',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        sameSite: true

    }
}))

app.use("/", router)

app.listen(port, ()=>{
    console.log(`on port ${port}`);
})