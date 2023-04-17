import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
export class SessionTokenModel extends Model {

}

export default function (sequelize: Sequelize) {
    SessionTokenModel.init(
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            token: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            userId: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            token_type: {
                allowNull: false,
                type: DataTypes.STRING(255),
                defaultValue: 'Bearer'
            },
            expires_in: {
                allowNull: false,
                type: DataTypes.INTEGER,
                defaultValue: 3600
            }
        },
        {
            tableName: 'session_tokens',
            sequelize,
            createdAt: false,
            updatedAt: false,
        },
    )


    return SessionTokenModel;
}




