import Sequelize from 'sequelize';
import { sequelize } from '../functions/databse';
import Contacts from './contacts';

const Users = sequelize.define('users', {
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
  password: {
    type: Sequelize.TEXT
  }
});

Users.hasMany(Contacts, { foraingKey: 'userId', sourceKey: 'id' });
Contacts.belongsTo(Users, { foraingKey: 'userId', sourceKey: 'id' });

export default Users;
