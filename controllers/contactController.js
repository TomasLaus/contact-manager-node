//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
};

//@desc Create all contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(200).json({ message: 'Create contact' });
};

//@desc Get individual contact
//@route GET /api/contacts/:id
//@access public
const getIndividualContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update a single contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete a single contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getIndividualContact,
  updateContact,
  deleteContact,
};
