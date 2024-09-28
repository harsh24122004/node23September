const mongoose = require('mongoose')

async function connection(){
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/batch-3')
        console.log("db is connected");
    } catch (error) {
        console.log(err);
    }

}
module.exports = connection