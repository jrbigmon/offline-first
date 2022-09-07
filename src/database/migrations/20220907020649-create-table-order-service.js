'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      
      geolocation: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },

      supervisor_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'supervisors'},
          key: 'id'
        }
      },

      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },

      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      
      deleted_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      }
      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
