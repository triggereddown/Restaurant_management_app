const mongoose=require('mongoose');

const menuSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet', 'spicy','sour'],
        required:true
    },
    isdrink: {
        type:Boolean,
        default:false
    },
    ingredients: {
        type:[String],
        default:[]
    },
    numSales:{
        type:Number,
        default:0
    }
})

const Menu=mongoose.model('MenuItem', menuSchema);
module.exports=Menu;