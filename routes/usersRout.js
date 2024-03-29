const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")

router.get("/", Controller.readAllProducts)
router.get("/add", Controller.renderAddProduct)
router.post("/add", Controller.handleAddProduct)
router.get("/:id/detail", Controller.productDetail)
router.get("/:id/delete", Controller.productDelete)
// router.get("/:id/update", Controller.renderProductUpdate)
// router.post("/:id/update", Controller.handleProductUpdate)

module.exports = router