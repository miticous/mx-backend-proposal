module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MemberTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.bulkInsert('MemberTypes', [{
      id: 1,
      description: 'Estudioso',
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },
  down: (queryInterface, Sequelize) => await queryInterface.dropTable('MemberTypes')
};
