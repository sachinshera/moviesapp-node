import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
export class AdminUserModel extends Model {

}

export default function (sequelize: Sequelize) {
    AdminUserModel.init(
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            allowAddUser: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
            },
            allowEditUser: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
            },
            allowDeleteUser: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
            },
        },
        {
            tableName: 'admin_users',
            sequelize,
            createdAt: false,
            updatedAt: false,
        },
    )


    return AdminUserModel;
}




