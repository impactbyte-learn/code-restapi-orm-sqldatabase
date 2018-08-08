const Sequelize = require('sequelize');

const sequelize = new Sequelize('mytasks', 'haidar', 'halodunia', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    email: Sequelize.STRING
}, {
    timestamps: true
});

sequelize.sync()
    .then(() => User.create({
        username: 'mhaidarh',
        email: 'haidar@impactbyte.com'
    }))
    .then(newUser => {
        console.log(newUser.toJSON());
    });

User.findAll().then(users => {
    console.log(users)
})

const run = async () => {
    const user = await User.findOne({
        email: 'haidarhanif@impactbyte.com'
    })
    console.log(user.get('username'));
}
run()