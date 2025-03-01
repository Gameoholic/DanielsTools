const express = require("express")
const router = express.Router()




router.get('/', (req, res) =>{
    res.send('User List')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/new', (req, res) =>{
    res.send("User New Form")
})

router.get('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`)
})

const users = [{name: "Kyle"}, {name: "Sally"}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = router