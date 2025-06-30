// const express = require('express');
// const router = express.Router();
// const contactController = require('../controllers/contactController');
// const authenticateToken = require('../middleware/authMiddleware');

// // Apply the authentication middleware to all routes below
// router.get('/', authenticateToken, contactController.getAllContacts);
// router.get('/:id', authenticateToken, contactController.getContactById);
// router.post('/', authenticateToken, contactController.createContact);
// router.put('/:id', authenticateToken, contactController.updateContact);
// router.delete('/:id', authenticateToken, contactController.deleteContact);
// router.delete('/', authenticateToken, contactController.deleteAllContacts);

// module.exports = router;

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// All routes below are now public — no authentication required
router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);
router.delete('/', contactController.deleteAllContacts);

module.exports = router;








