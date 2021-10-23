const db = require('../db/models')
const Posts = db.Posts
const jwt = require("jsonwebtoken");
const {SECRET} = process.env;
const { Op } = require("sequelize");

exports.getPostsPerCategory = (req, res) => {
    Posts.findAll({where: {categoryId: req.params.categoryId}, order: ['createdAt', 'ASC']})
        .then(data => res.status(200).send({
            message: "All Posts for This Category",
            data
        }))
        .catch(error => res.status(500).send({error: error.message}))
}

exports.getPostById = (req, res) => {
    Posts.findAll({ [Op.and]: [{ categoryId: req.params.categoryId }, { id: req.params.id }]})
        .then(data => res.status(200).send({
            message: "Here is the Post",
            data
        }))
        .catch(error => res.status(500).send({error: error.message}))
}

exports.createPost = (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, SECRET);

        if (payload.username === req.params.username) {
            req.payload = payload;

            if (req.params.username) {
                Posts.create(req.body)
                    .then(data => res.status(201).send({
                        message: "Post Created",
                        data
                    }))
                    .catch(error => res.status(500).send({error: error.message}))

            }
        }
    }
}

exports.updatePost = (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, SECRET);

        if (payload.username === req.params.username) {
            req.payload = payload;

            if (req.params.username) {
                Posts.update(req.body, {where: {id: req.params.id}})
                    .then(data => res.status(200).send({
                        message: "Post Updated",
                        data
                    }))
                    .catch(error => res.status(500).send({error: error.message}))

            }
        }
    }
}

exports.deletePost = (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, SECRET);

        if (payload.username === req.params.username) {
            req.payload = payload;

            if (req.params.username) {
                Posts.destroy({where: {id: req.params.id}})
                    .then(data => res.status(200).send({
                        message: "Post Deleted"
                    }))
                    .catch(error => res.status(500).send({error: error.message}))

            }
        }
    }
}