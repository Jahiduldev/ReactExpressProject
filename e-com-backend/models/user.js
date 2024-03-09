const {Scheme, model} = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');


const userSchema = Scheme({
    name: {
        type: String,
        required : true,
        minlength: 3,
        maxlength: 100
    },

    email: {
        type: String,
        required : true,
        minlength: 3,
        maxlength: 255,
        unique:true,
    },

    password: {
        type: String,
        required : true,
        minlength: 5,
        maxlength: 1024
    },
    role: {
        type: String,
        enum : ['user','admin'],
        default: user,
    },
},{timestamps: true});

userSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role,
        name: this.name
    },process.env.JWT_SECRET_KEY,{expiresIn: "7d"});
    return token;
}

const validateUser = user => {
    const scheme = Joi.object({
        name: Joi.string().min(3).max(100).required,
        email: Joi.string().min(5).max(255).required,
        password: Joi.string().min(5).max(255).required,
    });
    return scheme.validate(user);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;
