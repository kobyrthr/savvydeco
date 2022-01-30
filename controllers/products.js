const Products = require('models/products')

function newProduct (req,res){

    Products.create({
        title:'Bar Stools',
        shortdes:'Lighlty used. Moving sale.',
        longdes:'I got these about 2 years ago when my office closed down. They have sat in the basement for a while unused',
        seller:'Koby',
        

    })
}