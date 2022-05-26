const asyncHandler = require('express-async-handler')

const Author = require('../model/authorModel') 
const Book = require('../model/bookModel')
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
//Get /api/book
const getBook = asyncHandler(async (req, res) => {
    const authors = await Book.find()
    res.status(200).json(authors)
})
//Post /api/book
const createBook = asyncHandler(async (req, res) => {
    const book = await Book.create({
        title: req.body.title,
        description: req.body.description,
        publication_date: req.body.publication_date,
        publisher: req.body.publisher
    })
    const author = await Author.findById(req.params.id)
   //assign author to a book
    book.authors = author;
   // save the book
   await book.save();
   // push book to author array
   author.books.push(book);
  await author.save();
    res.status(200).json(book)
})
//put /api/books/:id
const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    })
    res.status(200).json(updatedBook)
})
//delete /api/books/:id
const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }
    await book.remove()
    res.status(200).json({ id: req.params.id})
})
module.exports ={
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}