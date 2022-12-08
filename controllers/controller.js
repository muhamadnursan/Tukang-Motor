
const{Profile, User, Product} = require("../models/")
let Sequelize = require('sequelize');
const currency  = require("../helpers/currency")
// const {resolve} = require("path")

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
        const {id} = req.params.id
        let error = req.query.errors?JSON.parse(req.query.errors):''
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

    static productDelete(req, res){
        let id = req.params.id
        Product.destroy({where: {id:id}})
        .then(()=>{
            res.redirect("/users")
        })
        .catch((err)=>{
            res.send(err)
        })
    }

}

module.exports = Controller







// const {Profile, User, Product} = require('../models/');
// class Controller {
//     static renderAdd(req, res) {
//         const { email, password } = req.body
//         User.create({email, password})
//         .then((res) => {
//             res.render("add", {res})
//         }).catch((err) => {
            
//         });
//     }
// }

// module.exports = Controller