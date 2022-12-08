const express = require("express")
const router = express.Router()
const users = require("./usersRout")
const Controller = require("../controllers/controller")

router.get("/", (req,res)=>{
    res.render("home")
})
router.use("/users", users)

module.exports = router