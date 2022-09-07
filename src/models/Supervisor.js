module.exports = (sequelize, DataTypes) => {
    const Supervisor = sequelize.define('Supervisor', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(200),
            allowNull: false
          },
    
          email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
          },
    
          password: {
            type: DataTypes.STRING(400),
            allowNull: false,
          }
    }, 
    {
        tableName: 'supervisors',
        timestamps: true,
        paranoid: true
    })
    Supervisor.associate = (models) => {
        Supervisor.hasMany(models.Order, {
            foreignKey: 'supervisor_id',
            as: 'orders'
        })
    }
    return Supervisor
}