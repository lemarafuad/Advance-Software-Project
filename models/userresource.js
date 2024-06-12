import { DataTypes } from 'sequelize';
import sequelize from '../database/seq.js';

const UsersTools = sequelize.define('UsersTools', {
    users_res_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {  
    tableName: 'UsersTools',

})
                
export default UsersTools