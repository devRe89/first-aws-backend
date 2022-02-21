const Product = require('../models/Product');

exports.getPrueba = (req, res) => {
    return res.status(200).json({
        message: 'Back-Work'
    });
}

exports.insertProduct = async (req, res) => {

    try {
        
        const {name} = req.body;
        if (!name) {
            return res.status(400).json({
                message: 'Nombre es requerido'
            });
        }
        const newProduct = new Product();
        newProduct.name = name;
        await newProduct.save();
        return res.status(200).json({
            message: 'ok',
            newProduct
        });

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            message: 'Error'
        });
    }

}

exports.getAllProducts = async (req, res) => {

    try {
    
        const productsArr = await Product.find();
        if (!productsArr.length){
            return res.status(400).json({
                message: 'No hay productos'
            });
        }

        return res.status(200).json({
            message: 'ok',
            productsArr
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: 'Error'
        });
        
    }

}