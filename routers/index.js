const router = require('express').Router();
// const Controller = require('../controllers/controller')
const userController = require('../controllers/userController');
const { navEndpoint } = require('../middleware/middleware');
const users = require('./usersRout')
const admin = require("./adminRoute")


router.get("/register", userController.registerForm)
router.post("/register", userController.postRegister)
router.get("/login", navEndpoint, userController.loginForm)
router.post("/login", userController.postLogin)
router.get('/logout', userController.getLogOut)


//router.use("/", admin)
router.use("/users", users)
router.use("/admin", admin) //

module.exports = router