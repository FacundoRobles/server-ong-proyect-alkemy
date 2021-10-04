const { User } = require('../models/index')

const createUser = async(info) => {
    return await User.create({
        email: info.email,
        firstName: info.firstName,
        lastName: info.lastName,
        image: info.image,
        password: info.password,
        roleId: 1
    })
}

const verifyEmail = async(email) => {
    return await User.findOne({
        where: {
            email
        }
    })
}

module.exports = {
    createUser,
    verifyEmail
}