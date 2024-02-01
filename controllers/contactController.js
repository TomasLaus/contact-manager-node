const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Create all contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(200).json(contact);
});

//@desc Get individual contact
//@route GET /api/contacts/:id
//@access private
const getIndividualContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found.');
  }
  res.status(200).json(contact);
});

//@desc Update a single contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const editContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (editContact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error('User doesn`t have permission to edit other user`s contacts');
  }
  
  res.status(200).json(editContact);
});

//@desc Delete a single contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found.');
  }
  
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error('User doesn`t have permission to delete other user`s contacts');
  }


  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getIndividualContact,
  updateContact,
  deleteContact,
};
