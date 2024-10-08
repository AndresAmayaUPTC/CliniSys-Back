const express = require('express');
const { addInventoryItem, getInventory } = require('../controllers/inventoryController');

const router = express.Router();

router.post('/', addInventoryItem);
router.get('/', getInventory);

module.exports = router;
