const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPost();
    await seedComments();

    process.exit(0);
};

seedDatabase();



  