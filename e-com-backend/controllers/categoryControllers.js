const _ = require('lodash');
const { Category, validate } = require('../models/category');

module.exports.createCategory = async (req, res) => {
    const { error } = validate(_pick(req.body, ['name']));
    if (error) return res.status(400).send(error.details[0].message);
    let category = new Category(_pick(req.body, ['name']));

    const result = await category.save();
    return res.status(201).send({
        message: "Category create Successful!",
        data:{
            name: result.name
        }
    })
}


module.exports.getCategories = async (req, res) => {
  const categories = await Category.find().select({_id:1,name:1}).sort({name:1})
}