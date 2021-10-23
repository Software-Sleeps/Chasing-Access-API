const db = require('../db/models')
const Comments = db.Comments
const jwt = require("jsonwebtoken");
const {SECRET} = process.env;
const {Op} = require("sequelize");

exports.getCommentsByPost = (req, res) => {
    Comments.findAll({where: {postId: req.params.postId}})//, order: ['createdAt', 'ASC']})
        .then(data => res.status(200).send({
            message: "All Posts for This Category",
            data
        }))
        .catch(error => res.status(500).send({error: error.message}))
}

exports.getCommentById = (req, res) => {
    Comments.findOne({
        where: {
            [Op.and]: [{categoryId: req.params.postId}, {id: req.params.id}]
        }
    })
        .then(data => {
                data === null ?
                    res.status(400).send({
                        error: "There is no data",
                    })
                    :
                    res.status(200).send({
                        message: "Here is the Comment",
                        data
                    })
            }
        )
        .catch(error => res.status(500).send({error: error.message}))
}

exports.createComment = (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, SECRET);

        if (payload.username === req.params.username) {
            req.payload = payload;

            if (req.params.username) {
                Comments.create({
                    message: req.body.message,
                    postId: req.params.postId,
                    username: req.params.username
                })
                    .then(data => res.status(201).send({
                        message: "Post Created",
                        data
                    }))
                    .catch(error => res.status(500).send({error: error.message}))

            }
        }
    }
}

exports.updateComment = (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, SECRET);

        if (payload.username === req.params.username) {
            req.payload = payload;

            if (req.params.username) {
                Comments.update(req.body, {where: {id: req.params.id}})
                    .then(data => res.status(200).send({
                        message: "Post Updated",
                        data
                    }))
                    .catch(error => res.status(500).send({error: error.message}))
            }
        }
    }
}

exports.deleteComment = (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, SECRET);

        if (payload.username === req.params.username) {
            req.payload = payload;

            if (req.params.username) {
                Comments.destroy({where: {id: req.params.id}})
                    .then(data => res.status(200).send({
                        message: "Post Deleted"
                    }))
                    .catch(error => res.status(500).send({error: error.message}))

            }
        }
    }
}