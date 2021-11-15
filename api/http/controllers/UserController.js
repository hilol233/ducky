const Joi = require('joi');
const RobloxUserService = require('./../services/RobloxUserService');
const OrderService = require('./../services/OrderService');

const joiOtions = { abortEarly: false, allowUnknown: true, stripUnknown: true };

module.exports.findUsername = function(req, res, next) {
    const validate = Joi.object({
        username: Joi.string().required(),
    });

    const  { error, value } = validate.validate(req.body, joiOtions);

    if ( error ) return res.status(422).send({ message: error.details[0].message });

    var username = req.body.username;

    RobloxUserService.checkUsername(username)
        .then( (response) => {
            return res.json(response.data);
        })
        .catch( (response) => {
            return res.json(response.data);
        });
}

module.exports.getAuthUserOrders = function(req, res, next) {
    OrderService.findUserOrder($user.id)
        .then( (response) => {
            return res.json({ entity: response });
        });
}