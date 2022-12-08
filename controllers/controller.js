const{Profile, User, Product, Sequelize} = require("../models")
const currency  = require("../helpers/currency")
const {resolve} = require("path")
class Controller {
    static readAllProducts(req, res){
        const{search} = req.query
        let option = {
            include: User
        }
        if(search){
            option.where = {
                name: {
                    [Sequelize.Op.iLike] : `%${search}%`
                }
            }
        }
        Product.findAll(option)
        .then((result) => {
            res.render("allProducts", {result})
        }).catch((err) => {
            res.send(err)
        });
    }

    static productDetail(req,res){
        let id = req.params.id
        Product.findByPk(id, {
            include: {
                model:User,
                include:  {
                    model:Profile
                }
            }
        })
        .then((data)=>{
            res.render("productDetail", {data, currency})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static renderAddProduct(req,res){
        Product.findAll()
        .then((data)=>{
            console.log(data, "<<< data");
            res.render("addProducts", {data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static handleAddProduct(req,res){
        // let product = {
        //    name: req.body.name,
        //    category: req.body.category,
        //    price: req.body.price,
        //    image: req.body.image,
        //    description: req.body.description 
        // }
        const{name, brand, price, image, description} = req.body
        console.log(req.body, "<<<<<<");
        Product.create({name, brand, price, image, description, UserId : 1})
        .then(()=>{
            res.redirect("/users")
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = Controller