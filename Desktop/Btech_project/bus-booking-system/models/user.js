const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['Admin', 'User'],
            defaultValue: 'User'
        }
    }, {
        timestamps: true,
        hooks: {
            beforeCreate: async(user) => {
                if (user.password_hash) {
                    user.password_hash = await bcrypt.hash(user.password_hash, 10);
                }
            }
        }
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compare(password, this.password_hash);
    };

    return User;
};