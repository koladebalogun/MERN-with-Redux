const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, password, name){

    if(!email || !password ||!name){
        throw Error('Name, email and password are required');
    }

    if(!validator.isEmail(email)){
        throw Error('Invalid email');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Your password should be 8 characters long and should include Block letters, small letters, a number and a special character');
    }

    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password: hash})

    return user
}

userSchema.statics.login = async function (email, password){
    if(!email || !password){
        throw Error('Email and password are required');
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema);