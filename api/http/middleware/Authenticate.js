const jwt = require('jsonwebtoken');
const User = require('./../../models/User');

module.exports.authenticate = async (req, res, next) => {
    let privateKey = 'believe';
    // let privateKey = process.env.JWT_PRIVATE_KEY;
    token = req.headers ? req.headers.authorization : null;
    if ( !token ) return res.status(401).json({ message: "You Need Permission To Access This Page" });
    try {
        let decodeToken = jwt.verify(token, privateKey);
        User.find({_id: decodeToken.id}, function(err, user) {
            if ( user && user.length >= 1 ) {
                global.$user = {
                    id: user[0]._id.toString(),
                    username: user[0].username,
                    email: user[0].email
                };
                return next();
            } else {
                return res.status(401).json({ message: "You Need Permission To Access This Page" });
            }
        });

    } catch {
        return res.status(401).json({ message: "You Need Permission To Access This Page" });
    }
}