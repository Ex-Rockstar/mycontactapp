const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name :{
        type: String,
        required :[true, "Please add a name"],
    },
    email :{
        type: String,
        required :[true, "Please add an email"],
    },
    phone :{
        type: String,
        required :[true, "Please add a number"],
    },
       
},

{
timestamps: true,
}
);

module.exports= mongoose.model("contact", contactSchema);