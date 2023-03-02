const mongoose=require('mongoose')
const productschema=new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    number: String,
    websitename: String,
})
module.exports=mongoose.model('tabel',productschema)