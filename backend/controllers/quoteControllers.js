const Quote = require('../models/quoteModel');
const mongoose = require('mongoose');

const createQuote = async(req,res) => {
    
    const {title} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }

    
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill out all fields', emptyFields})
    }

    try {
        const user_id = req.user._id
        const quote = await Quote.create({title, user_id})
        res.status(200).json(quote)

    } catch (error) {
        res.status(404).json({error: 'error message'})
    }
}


const getQuotes = async (req, res) => {
    const user_id = req.user._id
    const quotes = await Quote.find({ user_id}).sort({createdAt: -1})

    res.status(200).json(quotes)
}


const getQuote = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such quote'})
    }

    const quote = await Quote.findById(id)

    if(!quote){
        return res.status(404).json({error:'No such quote'})
    }

    res.status(200).json(quote)
}


const deleteQuote = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such quote'})
    }

    const quote = await Quote.findByIdAndDelete({_id:id})

    if(!quote){
        return res.status(404).json({error:'No such quote'})
    }

    res.status(200).json(quote)
}


const updateQuote = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such quote'})
    }

    const quote = await Quote.findByIdAndUpdate({_id:id}, {...req.body})

    if(!Quote){
        return res.status(404).json({error:'No such quote'})
    }

    res.status(200).json(quote)
}



module.exports={
    createQuote,
    getQuote,
    getQuotes,
    deleteQuote,
    updateQuote
}