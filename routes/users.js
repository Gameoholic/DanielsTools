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


router.param("id", (req, res, next, id) => {
    console.log(id)

    next()
})


module.exports = router