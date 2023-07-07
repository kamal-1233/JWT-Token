const asyncHandler = require("express-async-handler");
const Contact = require ("../models/contactModel");

//GET all contacts 
//route GET /api/contacts
//access public 

const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});



//GET Create contacts 
//route POST /api/contacts
//access public 

const createContact = asyncHandler (async (req, res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandotory");
    }
    const contact = await Contact.create ({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

//GET  contacts 
//route GET /api/contacts/:id
//access public 

const getContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error ("Contact not found");
    }
    res.status(200).json(contact);
});

//PUT  contacts 
//route PUT /api/contacts/:id
//access public 

const updateContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error ("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updateContact);
});

//Delete  contacts 
//routE Delete /api/contacts/:id
//access public 

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    const result = await Contact.deleteOne({ _id: req.params.id });
    console.log(result);
  
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Contact deleted successfully" });
    } else {
      res.status(500);
      throw new Error("Failed to delete contact");
    }
  });
  



module.exports = { 
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} ;