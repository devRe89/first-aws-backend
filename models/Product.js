const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema, 'products');