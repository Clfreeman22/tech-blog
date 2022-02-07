const { User } = require("../models");

const usersInfo = [
    {
        username: "Chuck",
        email: "fakeemail@gmail.com",
        password: "tacos"
    },
    {
        username: "Bobby",
        email: "fakeemail2@gmail.com",
        password: "fire"
    },
    {
        username: "James",
        email: "fakeemail3@gmail.com",
        password: "water"
    },
    {
        username: "Greg",
        email: "fakeemail4@gmail.com",
        password: "ball"
    }
];

const seedTheUsers = () => User.bulkCreate(usersInfo);
module.exports = seedTheUsers;