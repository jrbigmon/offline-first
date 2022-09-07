module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
          
        geolocation: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
    
        supervisorId: {
            type: DataTypes.INTEGER(10),
            foreignKey: true,
            field: 'supervisor_id',
        },
    },
    {
        tableName: 'orders',
        timestamps: true,
        paranoid: true
    })

    Order.associate = (models) => {
        Order.belongsTo(models.Supervisor, {
            foreignKey: 'supervisorId',
            as: 'supervisor'
        })
    }
    return Order
}