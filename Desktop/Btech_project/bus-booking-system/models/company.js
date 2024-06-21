module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        company_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contact_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: DataTypes.TEXT
    }, {
        timestamps: true
    });
    return Company;
};