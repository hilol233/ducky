const noblox = require('noblox.js');

const selfCookie = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_7FCA98A3F84BCEF6E32A6BC22252D442F5FAB4A65BA651C4CF5DC94D300CAD55B0E868E9FCC3DCEBA5C3AAF81DB5BFBC69557B5D5ABE139558A529DE59C1A8DC4364AEA57B8404526A10895FEE54A68739C6876DC55034C02B1F33E4AD419368BBFFB369BF701D19B0AE04C60DC70ACFA11F779178E996B31F37377243860B8A05E0A0D7F9D552F36F5EC82AA312C1879EE1BBBB259110E5426F18DE9950F633A1FB74915725B50C103B428576AC3E1AE5CD2D31DBC05AC8762BF5D2463B35E33D3AD0CD0FF8F67C43B113E8C091C99E59D8F9FEB2F40645C3DEEEF324A5DCD98FF7F584B693AC2BA4E8A6F4FEA7142E57030A02E99154DFE3D192219F19608B9C6EFA736DBE38A083D16D098F29664AFC1739E3491D6B23165A21D235ED89E88F20D1377258D47CDB04715F3FDB1BAA53FD985C7B857008F6532CA0D270E9251EE575C6';

module.exports.setCookie = function() {
    return noblox.setCookie(selfCookie);
    // then(function() {
    //     console.log("Logged in!")
    //     })
    //     .catch(function(err) {
    //         console.log("Unable to log in!", err)
    //     })
}

const getUserID = async () => {
    return await noblox.getSenderUserId();
}

module.exports.getSenderUserId = async () => {
    this.setCookie()
        .then( (res) => {
            getUserID()
                .then( (res) => {
                    console.log("response", res);
                })
        })
}


