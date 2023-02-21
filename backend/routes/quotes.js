const express = require('express');
const {createQuote, getQuote, getQuotes, deleteQuote, updateQuote} = require('../controllers/quoteControllers');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/', getQuotes)

router.get('/:id', getQuote)


router.post('/', createQuote)

router.delete('/:id', deleteQuote)

router.patch('/:id', updateQuote)



module.exports = router