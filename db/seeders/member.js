module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        field: 'name',
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      phone: {
        field: 'phone',
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      email: {
        field: 'email',
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      member_type_id: {
        field: 'member_type_id',
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        field: 'status',
        type: Sequelize.STRING(10),
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

    await queryInterface.bulkInsert('members', [{
      id: 1,
      name: 'Murilo Medeiros',
      phone: '(62) 9 9999-9999',
      email: 'murilo@gmail.com',
      member_type_id: 1,
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Vitor Brandao',
      phone: '(62) 9 9999-8888',
      email: 'vitor@gmail.com',
      member_type_id: 1,
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Marcela Costa',
      phone: '(62) 9 8888-9999',
      email: 'marcela@gmail.com',
      member_type_id: 2,
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('members'),
};
