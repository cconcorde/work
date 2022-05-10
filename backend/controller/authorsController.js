const asyncHandler = require('express-async-handler')

const Author = require('../model/authorModel') 
//Get /api/authors
const getAuthors = asyncHandler(async (req, res) => {
    const authors = await Author.find()
    res.status(200).json(authors)
})

//post /api/authors
const createAuthor = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add text field')
    } 
    const author = await Author.create({
        text: req.body.text,
    })
    res.status(200).json(author)
})

//put /api/authors/:id
const updateAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id)

    if(!author){
        res.status(400)
        throw new Error('Author not found')
    }
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    })
    res.status(200).json(updatedAuthor)
})

//delete /api/authors/:id
const deleteAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id)

    if(!author){
        res.status(400)
        throw new Error('Author not found')
    }
    await author.remove()
    res.status(200).json({ id: req.params.id})
})
module.exports ={
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
}