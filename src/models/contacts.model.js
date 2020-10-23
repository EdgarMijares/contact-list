import Sequelize from 'sequelize';
import { sequelize } from '../functions/databse';

const Contacts = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  phone: {
    type: Sequelize.TEXT
  }
});

export default Contacts;