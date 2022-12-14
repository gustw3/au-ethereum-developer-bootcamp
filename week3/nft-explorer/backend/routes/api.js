const router = require('express').Router();
const apiCtrl = require('../controllers/api')


router.get('/getNfts/:address', apiCtrl.getNfts);

module.exports = { router };
