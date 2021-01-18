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
      freezeTableName: true,
      tableName: 'members_types',
      underscored: true,
      schema: process.env.DATABASE_SCHEMA || 'public',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  );

  return MemberTypes;
};
