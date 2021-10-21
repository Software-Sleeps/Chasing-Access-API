const User = require("../db/models/user");

/* Create User */

exports.createUser = (req, res) => {
    User.create(req.body)
    .then((data) => {
        res.status(201).send({
            message: "New User has been created",
            data,
        });
    })
    .catch((error) => {
        res.status(500).send({ error: error.message });
    });
};