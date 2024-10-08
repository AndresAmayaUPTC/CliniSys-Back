const express = require('express');
const { createBilling, getBilling } = require('../controllers/billingController');

const router = express.Router();

router.post('/', createBilling);
router.get('/', getBilling);

module.exports = router;
