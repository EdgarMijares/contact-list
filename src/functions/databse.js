import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'contact',  // DATABASE NAME
  'postgres', // USER
  'postgres', // PASSWORD
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 3,
      min: 0,
      require: 5000,
      idle: 10000
    },
    logging: false
  }
)
