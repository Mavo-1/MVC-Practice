const mongoose = require('mongoose')
const itemListSchema = new mongoose.Schema({
    textInput:{
        type: String,
        required: true,
    },
    numInput:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
})
// (ItemList is the name of the model that will reference itemListSchema and items is the collection. Cluster=>database=>collection=>documents)
module.exports = mongoose.model('ItemList',itemListSchema,'items')