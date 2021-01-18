module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('member_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.bulkInsert('member_types', [{
      id: 1,
      description: 'ADMIN',
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      description: 'COMMON',
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('member_types'),
};
