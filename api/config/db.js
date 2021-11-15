const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/roblox', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
mongoose.connect('mongodb+srv://admin:kevintravis@cluster0.wtubk.mongodb.net/roblox', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db
