const asyncHandler = require('express-async-handler')
//Get /api/authors
const getAuthors = asyncHandler(async (req, res) => {
    res.status(200).json({ message:'send authors'})
})

//post /api/authors
const createAuthor = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add text field')
    } 
    res.status(200).json({ message:'create authors'})
})

//put /api/authors/:id
const updateAuthor = asyncHandler(async (req, res) => {
    res.status(200).json({ message:`update authors ${req.params.id}`})
})

//delete /api/authors/:id
const deleteAuthor = asyncHandler(async (req, res) => {
    res.status(200).json({ message:`delete authors ${req.params.id}`})
})
module.exports ={
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
}