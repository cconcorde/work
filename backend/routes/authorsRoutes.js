const express = require('express')
const router = express.Router()
const {getAuthors,createAuthor,updateAuthor,deleteAuthor,getBook,createBook,updateBook} = require('../controller/authorsController')

router.route('/').get(getAuthors).post(createAuthor)
router.route('/:id').put(updateAuthor).delete(deleteAuthor)
router.route('/:id/books').post(createBook)
router.route('/books').get(getBook)
router.route('/books/:id').put(updateBook)
module.exports = router