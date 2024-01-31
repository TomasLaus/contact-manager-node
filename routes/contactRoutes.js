const express = require('express');
const router = express.Router();
const {
  getContacts,
  createContact,
  getIndividualContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

router.route('/').get(getContacts);

router.route('/').post(createContact);

router.route('/:id').get(getIndividualContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
