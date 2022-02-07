const { Post } = require('../models');

const postsInfo = [
    {
        title: "My favorite food",
        post_content: "Tacos are the best!!!",
        user_id: 1
    },
    {
        title: "My favorite car",
        post_content: "Geo Metros didnt really catch fire did they?",
        user_id: 2
    },
    {
        title: "My favorite drink",
        post_content: "Would you like some cheese with your whine?",
        user_id: 3,
    },
    {
        title: "My favorite Sport",
        post_content: "10 years as world best professional tagger",
        user_id: 4
    }
];

const seedThePosts = () => Post.bulkCreate(postsInfo);
module.exports = seedThePosts;