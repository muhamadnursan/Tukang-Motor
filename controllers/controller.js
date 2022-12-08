const {Profile, User, Product} = require('../models/');
class Controller {
    static renderAdd(req, res) {
        const { email, password } = req.body
        User.create({email, password})
        .then((res) => {
            res.render("add", {res})
        }).catch((err) => {
            
        });
    }
}

module.exports = Controller