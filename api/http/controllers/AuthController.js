const Joi = require('joi');
const Bcrypt = require('bcryptjs');
const User = require('./../../models/User');
const jwt = require('jsonwebtoken');

const joiOtions = { abortEarly: false, allowUnknown: true, stripUnknown: true };

/**
 * @method POST
 * @link /api/register
 */
module.exports.register = function(req, res, next) {
    const validate = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).required().label('password'),
        password_confirmation: Joi.any()
            .equal( Joi.ref('password') )
            .required()
            .messages({ 'any.only': '{{#label}} does not match with password' })
    });

    const  { error, value } = validate.validate(req.body, joiOtions);

    if ( error ) return res.status(422).send({ message: error.details[0].message });

    User.findOne({ username: req.body.username}, function(err, user) {
        if ( user ) return res.status(422).send({ message: "This username is already registered"});

        User.findOne({ email: req.body.email}, function(err, user) {
            if ( user ) return res.status(422).send({ message: "This email is already registered"});

            const salt = Bcrypt.genSaltSync(10);
            userCreate = new User({
                username: req.body.username,
                email: req.body.email,
                password: Bcrypt.hashSync(req.body.password, salt),
            });
        
            userCreate.save( function(err, user) {
                let privateKey = 'believe';
                if ( err ) return res.json({message: err});
                let userModel = { id: user._id, email: user.email, username: user.username },
                    token = jwt.sign(userModel, privateKey);
                return res.json({ entity: userModel , token: token , message: "You have successfully logged in" });
            });
        });
    });
}

/**
 * @method POST
 * @link /api/login
 */
module.exports.login = function(req, res, next) {
    let privateKey = 'believe';
    // let privateKey = process.env.JWT_PRIVATE_KEY;
    const validate = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    const { error, value } = validate.validate(req.body, joiOtions);
    
    if ( error ) return res.status(422).json({ message: error.details[0].message });

    User.findOne({ username: req.body.username }, function(err, user) {
        if ( !user ) return res.status(422).json({ message: "The entered data is not valid." });

        Bcrypt.compare(req.body.password, user.password, function(err, isValid){
            if ( !isValid ) return res.status(422).json({ message: "Incorrect username or password" });
            let userModel = { id: user._id, email: user.email, username: user.username },
                token = jwt.sign(userModel, privateKey);
            return res.json({ entity: userModel , token: token , message: "You have successfully logged in" });
        })
    });
}