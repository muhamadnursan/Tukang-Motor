const express = require("express")
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use("/", (req,res)=>{
    res.send(`Ok`)
})

app.listen(port, ()=>{
    console.log(`on port ${port}`);
})