const express = require("express")

const router = express.Router()

const controller = require("../controllers/users")

const path = 'users'

router.get(`/${path}`,controller.getUsers)

module.exports = router