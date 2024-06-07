import { DataTypes } from "sequelize";
import sequelize from '../database/seq.js';

const Event = sequelize.define("Event",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  /*  amount: {
      type: DataTypes.DECIMAL(10, 2), // 10 digits, 2 decimal places
      allowNull: false,
    },*/
  },
  {
    tableName: "events",
  }
);

export default Event;