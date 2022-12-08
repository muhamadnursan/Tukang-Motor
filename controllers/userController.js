const { User } = require('../models/index')
const bcrypt = require('bcryptjs')

class UserController {
    static loginForm(req, res) {
        const { error } = req.query
        res.render('login-form', { error })

    }

    static registerForm(req, res) {
        res.render('register-form')

    }

    static postRegister(req, res) {
        // create user baru yg isinya ussername, password, role
        const { email, password, role } = req.body
        User.create({ email, password, role })
            .then(() => {
                res.redirect('/login')
            }).catch((err) => {
                console.log(err)
                res.send(err)
            });
    }
    static postLogin(req, res) {
        const { email, password } = req.body
        console.log(req.body);
        User.findOne({ where: { email } })
            .then((user) => {
                if (user) {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if (isValidPassword) {
                        req.session.userId = user.id
                        req.session.role = user.role
                        return res.render('home')
                    } else {
                        const error = "Invalid username/password"
                        return res.redirect(`/login?error=${error}`)
                    }
                }
                else {
                    const error = "invalid email or password"
                    return res.redirect(`/login?error=${error}`)
                }
            }).catch((err) => {
                console.log(err);
                res.send(err)
            })
    }
    static getLogOut(req, res) {
        req.session.destroy((err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.redirect('/login')
            }
        })
    }
}
module.exports = UserController