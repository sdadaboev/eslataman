import { Schema, model } from "mongoose";


const User = new Schema({
    fullName: String,
    chatId: Number, 
    admin:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})


export default model('User', User)