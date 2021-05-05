const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({}, { strict: false });
module.exports = mongoose.model('Product', productSchema, 'products');