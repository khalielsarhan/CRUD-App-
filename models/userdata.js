const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    list: [
        listSchema
    ]

})

const listSchema = mongoose.Schema({
    listname: {
        type : String,
        required: true,
        unique: true
    },
    listdescriptions: {
        type : String,
    }
})

var userdata = mongoose.model('userdata',userSchema);
module.exports= userdata;