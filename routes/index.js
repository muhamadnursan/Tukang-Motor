const router = require('express').Router();
const Controller = require('../controllers/controller')
const userController = require('../controllers/userController')

router.get("/register", userController.registerForm)
router.post("/register", userController.postRegister)
router.get("/login", userController.loginForm)
router.post("/login", userController.postLogin)
router.get('/logout', userController.getLogOut)


// router.get('/entertain', Controller.getEntertain)
//session
router.use(function (req, res, next) {
    if (!req.session.userId) {
        const error = "Please Login"
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
})

router.use(function (req, res, next) {
    if (req.session.userId && req.session.role === 'admin') {
        res.redirect('/')
    } else {
        next()
    }
})

// log

router.use('/', (req, res) => {
    res.render("home")
})

module.exports = router