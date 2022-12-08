const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")

router.get("/", Controller.readAllProducts)
router.get("/add", Controller.renderAddProduct)
router.post("/add", Controller.handleAddProduct)
router.get("/:id/detail", Controller.productDetail)

module.exports = router