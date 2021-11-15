const axios = require('axios');

module.exports.getFunds = async () => {
    let url = "https://premiumfeatures.roblox.com/v1/products";
    return await axios.get(url);
}