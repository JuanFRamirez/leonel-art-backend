const express = require("express")

const router = express.Router()

const controller = require("../controllers/contacts")

const path = 'sendEmail'

router.post(`/${path}`,controller.sendContacts)

module.exports = router