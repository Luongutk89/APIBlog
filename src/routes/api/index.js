const express = require('express');
const router = express.Router();

const {
    createTabController,
    getAllTabController,
    updateTabController,
    deleteTabController,
} = require('../../controllers/tabController');


// Get Tabs
router.get('/tabs', getAllTabController);

router.post('/tabs', createTabController);

// Update Tabs
router.put('/tabs/:id', updateTabController);

// Delete Tabs
router.delete('/tabs/:id', deleteTabController);

module.exports = router;