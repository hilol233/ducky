const config = require('./../../config/roblox.json');
const axios = require('axios');


module.exports.checkUsername = async (_username) => {
    var url = `${config.USER_BASE_URL}/v1/usernames/users`,
        username = { usernames: [ _username ]};
    return await axios.post(url, username );
}