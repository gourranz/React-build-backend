const express = require('express')
const router = express.Router()
const peopleCtrl = require('../controllers/people')


router.get('/', peopleCtrl.index)

router.post ('/', peopleCtrl.create)

router.get("/:id", peopleCtrl.show)

router.get ("/:id", peopleCtrl.delete)
router.put("/:id", peopleCtrl.update )

module.exports =  router