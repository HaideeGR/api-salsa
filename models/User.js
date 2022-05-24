const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize) => {

const user = sequelize.define("users" , {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.INTEGER,
    lastname: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
},
{
    hooks: {
     beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( user.password, salt)
     },
    },
 });

 User.prototype.validPassword = function (password){
    return bcrypt.compareSync(password, this.password)
 }

 return User;
}
