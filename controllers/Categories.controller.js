const db = require('../db/models/')
const Categories = db.Categories
const { where } = require("sequelize");

//GET ALL CATEGORIES
exports.getAllCategories = (req, res) =>{
    Categories.findAll({})
        .then(data =>{
            res.status(200).send({
                message: "All Categories That Exist Currently",
                data
            })
        })
        .catch(error => {
            console.log(Categories)
            console.log(db[db.models])
            res.status(500).send(error.message)
        })
}

//Create Category
exports.createCategory = (req, res) =>{
    Categories.create(req.body)
        .then(data => res.status(201).send({
            message: "Category Created",
            data
        }))
}

//Update Category
exports.updateCategory = (req,res) =>{
    Categories.update(req.body,{where: {id: req.params.id}})
        .then(data => res.status(200).send({
            message: "Category Name Updated",
            data
        }))
        .catch(error => res.status(500).send(error.message))
}

exports.deleteCategory = (req, res) => {
    Categories.destroy({where: {id: req.params.id}})
        .then(data => res.status(200).send({message: "Category Deleted"}))
        .catch(error => res.status(500).send(error.message))
}