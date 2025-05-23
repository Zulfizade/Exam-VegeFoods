import VegeModel from "../model/ProductModel.js"

const getAllProducts = async (req, res) => {
    try {
        const products = await VegeModel.find()
        res.json(products)
    } catch (error) {
        res.json(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await VegeModel.findByIdAndDelete(req.params.id)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

const postProduct = async (req, res) => {
    try {
        const product = await VegeModel.create(req.body)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

export { getAllProducts, deleteProduct, postProduct }