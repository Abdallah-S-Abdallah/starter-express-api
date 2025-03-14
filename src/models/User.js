const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    zipCode: {
        type: String
    },
}, { timeseries: true })

userSchema.statics.isThisEmailUse = async function (email) {
    if (!email) throw new Error('Invalid email')
    try {
        const user = await this.findOne({ email })
        if (user) return false

        return true
    } catch (error) {
        console.log('error inside isThisEmailUse method ', error.message)
        return false
    }
}

const User = mongoose.model('user', userSchema)
module.exports = User