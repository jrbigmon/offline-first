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
        },

        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at',
        },

        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at',
        },

        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deleted_at'
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