const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/Coniah?retryWrites=true&w=majority")
        console.log('DB connected')
    } catch (error) {
        console.log(error)
        console.log('Could not connect to db')
        process.exit(1)
    }
}


module.exports = {
    connection,
}