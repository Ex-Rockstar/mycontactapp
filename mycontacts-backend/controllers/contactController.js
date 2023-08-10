const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");

// @desc  -> get all contacts
// @route GET /api/contacts
//@access public


const getContacts = asyncHandler(async(req, res)=>{
    const contact = await Contact.find()    
    res.status(201).json(contact);
})

// @desc  -> get contact
// @route GET /api/contacts
//@access public


const getContact =asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact);
})


// @desc  -> create contacts
// @route POST /api/contacts    
//@access public


const createContact = asyncHandler(async(req, res)=>{
    const {name,email,phone} = req.body; 
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
        
    }

    const contact = await Contact.create({
        name,
        email,
        phone,

    })
    res.status(201).json({message : "Create contacts"});
    console.log("the req body is :",req.body);
   
}
)
// @desc  -> update contacts
// @route PUT /api/contacts
//@access public

const updateContact =asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    const updatedContact = await Contact.findById(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(201).json({message : `Update contact of ${req.params.id}`});
})


// @desc  -> delete contacts
// @route DELETE /api/contacts
//@access public

const deleteContact = asyncHandler(async(req, res)=>{
    res.status(201).json({message : `Delete contact of ${req.params.id}`});
})


module.exports= {getContact, createContact, updateContact, deleteContact, getContacts}
