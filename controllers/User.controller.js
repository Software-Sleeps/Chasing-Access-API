require("dotenv").config;

const db = require("../db/models");
const User = db.User
const jwt = require("jsonwebtoken");
const {SECRET} = process.env;
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
            res.status(500).send({error: error.message});
        });
};

exports.loginUser = (req, res) => {
    try {
        const {username, password} = req.body;

        const user = User.findAll({
            where: {username: username}
        });

        //check if user exists
        if (user) {
            const token = jwt.sign({username}, SECRET, {
                expiresIn: "365 days",
            });

            res.status(200).json({username, token});
        } else {
            res.status(400).json({
                error: "User Does Not Exist",
            });
        }
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}