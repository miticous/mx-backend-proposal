export default (sequelize, DataTypes) => {
  const Member = sequelize.define(
    'Member',
    {
      name: {
        field: 'name',
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      phone: {
        field: 'phone',
        type: DataTypes.STRING(11),
        allowNull: true,
      },
      email: {
        field: 'email',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      member_type_id: {
        field: 'member_type_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        field: 'status',
        type: DataTypes.STRING(5),
        allowNull: false,
      },
    },
    {
      tableName: 'members',
      underscored: false,
      schema: process.env.DATABASE_SCHEMA || 'public',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  Member.associate = models => {
    Member.belongsTo(models.MemberTypes, { foreignKey: 'member_type_id', targetKey: 'id' });
  };

  return Member;
};
