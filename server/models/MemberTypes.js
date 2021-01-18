export default (sequelize, DataTypes) => {
  const MemberTypes = sequelize.define(
    'MemberTypes',
    {
      description: {
        field: 'description',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      status: {
        field: 'status',
        type: DataTypes.STRING(5),
        allowNull: false,
      },
    },
    {
      tableName: 'member_types',
      underscored: false,
      schema: process.env.DATABASE_SCHEMA || 'public',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  return MemberTypes;
};
