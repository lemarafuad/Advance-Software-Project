import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';
import user from './user.js';
const Usersresource = sequelize.define('Usersresource', {
    users_res_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // userId:{
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: user,
    //         key: 'id',
    //     },
    // },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {  
    tableName: 'Usersresource',

})

// Usersresource.belongsTo(user, { foreignKey: 'userId' });
// user.hasMany(Usersresource, { foreignKey: 'userId' });
                
export default Usersresource