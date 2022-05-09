const express = require('express')
const router = express.Router()
const {getAuthors,createAuthor,updateAuthor,deleteAuthor} = require('../controller/authorsController')

router.route('/').get(getAuthors).post(createAuthor)
router.route('/:id').put(updateAuthor).delete(deleteAuthor)

module.exports = router