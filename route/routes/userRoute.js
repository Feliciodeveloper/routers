const express = require('express')
const users = require('../../controllers/user')

const router = express.Router()
router.get('/', (req,res)=>users.getUser(res))
module.exports = router