
const{Profile, User, Product} = require("../models/")
let Sequelize = require('sequelize');
const currency  = require("../helpers/currency");
const { where } = require("sequelize");

class Controller {

    //*** Display HomePage */
    static home(req, res) {
        User.findAll({
            include: [Product, Profile]
        })
            .then((data) => {
                console.log(data, "<<<<<< data");
                res.render('home', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }
    //** Close */

    //*** Display all Products (Motor Bekas) */
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
    //*** Close */


    //*** Display detail Products */
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
            console.log(data)
            res.render("productDetail", {data, currency})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    //*** Close */


    //*** Display Add Products Form */
    static renderAddProduct(req,res){
        const error = req.query.err;
        Product.findAll()
        .then((data)=>{
            res.render("addProducts", {data, error})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    //*** Close */


    //*** Post Add Products Form */
    static handleAddProduct(req,res){
        const{name, brand, price, image, description} = req.body
        Product.create({name, brand, price, image, description, UserId : 1})
        .then(()=>{
            res.redirect("/users")
        })
        .catch((err)=>{
            let errMessage = err.errors.map((el)=>{
                return el.message
            })
            res.redirect(`/users/add?err=${errMessage}`)
        })
    }
    //*** Close */


    //*** Display Update Form */
    static productUpdate(req, res){
        let {id} = req.params
        Product.findByPk(id)
        .then((data) => {
            res.render("productUpdate", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
    //*** Close */


    //*** Post Update Form */
    static postProductUpdate(req, res){
        let {id} = req.params
        const{name, price, description, image, brand} = req.body
        Product.update({name, price, description, image, brand},{where:{id}})
        .then(()=>{
            res.redirect(`/users/${id}/detail`)
        })
        .catch((err)=>{
            console.log(err, "<<<< error");
            res.send(err)
        })
    }
    //*** Close */


    //*** Delete Products */
    static productDelete(req, res){
        let id = req.params.id
        Product.destroy({where: {id}})
        .then(()=>{
            res.redirect("/users")
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    //*** Close */
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