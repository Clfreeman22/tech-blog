const { Comment } = require('../models');

const commentsInfo = [
    {
        comment_text: "Testing the app",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Ok I think this is working",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Yea for sure its working",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "Maybe?",
        user_id: 4,
        post_id: 3
    }
];

const seedTheComments = () => Comment.bulkCreate(commentsInfo);
module.exports = seedTheComments;