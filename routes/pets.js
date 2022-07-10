const express = require('express')
const fs = require('fs')
const router = express.Router()
const db = require('../config/db')

router.post('/', function (req, res, next) {
    const query = 'INSERT INTO pets (id, name, status) VALUES (?, ?, ?)'
    const body = req.body
    db.run (query, [body.id, body.name, body.status], function(err) {
        if (err) {
            console.log(err)
        }
    })
    res.status(201).json({message: "Success create new data!"})
})

router.get('/', function (req, res, next) {
    const query = 'SELECT * FROM pets'
    db.all(query, (err, row ) => {
        console.log(row)
        res.status(200).json(row)
    })
})

router.put('/:id', function (req, res, next) {
    const query = 'UPDATE pets SET name=?, status=? WHERE id=?'
    const petId = req.params.id
    const body = req.body
    db.run(query, [body.name, body.status, petId], function(err) {
        if(err) {
            console.log(err)
        }
    })
    res.status(200).json({message: "Success update new data!"})
})

router.delete('/:id', function (req, res, next) {
    const query = 'DELETE from pets WHERE id=?'
    const petId = req.params.id
    
    db.run(query, [petId], function(err) {
        if(err) {
            console.log(err)
        }
    })
    res.status(200).json({message: "Success delete new data!"})
})

module.exports = router
