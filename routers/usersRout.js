const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")
const {loginGuard} = require("../middleware/middleware")

router.use(loginGuard)

router.get("/", Controller.readAllProducts)
router.get("/add", Controller.renderAddProduct)
router.post("/add", Controller.handleAddProduct)
router.get("/:id/detail", Controller.productDetail)
router.get("/:id/update", Controller.productUpdate)
router.post("/:id/update", Controller.postProductUpdate)

router.get("/:id/delete", Controller.productDelete)

module.exports = router