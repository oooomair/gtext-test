const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Contact = require('../models/contact')

router.get('/', async (req, res) => {
    const contacts = await Contact.find()

    try {
        res.status(200).json(contacts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.post('/', async (req, res) => {

    const { firstName, lastName, email }  = req.body

    console.log(req.body);

    const newContact = new Contact({
        _id: mongoose.Types.ObjectId(),
        firstName: firstName,
        lastName: lastName,
        email: email
    })

    try {
        await newContact.save()
        res.status(200).json(newContact)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.patch('/:id', async (req, res) => {

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {color: req.body.colorChange}, {new: true})

    try {
        res.status(200).json(updatedContact)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.delete('/:id', async (req, res) => {

    const foundContact = await Contact.findById(req.params.id)

    try {
        await foundContact.remove()
        res.status(200).json({ message: 'successfully deleted the contact' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router