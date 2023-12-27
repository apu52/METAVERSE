const mongoose = require('mongoose');

const shopDetailsSchema = new mongoose.Schema({
    ShopName: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    Link: {
        type: String,
        required: true
    }
});

const ShopDetails = mongoose.model('ShopDetails', shopDetailsSchema);

module.exports = ShopDetails;
