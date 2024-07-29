const mongoose = require('mongoose')

const conectToDb = () => {
    mongoose.connect(process.env.DB_URI)
    .then(() => console.log('MongoDB Atlas on !'))
    .catch((err) => console.log('não foi possivel entrar no banco, ' + err))
}

module.exports = conectToDb