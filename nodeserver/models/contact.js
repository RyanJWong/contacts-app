const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// When your application starts up, Mongoose automatically calls createIndex for each defined index in your schema.
// Mongoose will call createIndex for each index sequentially, and emit an 'index' event on the model 
// when all the createIndex calls succeeded or when there was an error. 
// While nice for development, it is recommended this behavior be disabled in production since index creation
// can cause a significant performance impact.
// mongoose.set('autoIndex', false);
// A schema is the blueprint for a MongoDB database doc. Structure of doc 
// Each schema maps to a MongoDB collection and defines the shape of documents within that collection. 

const phoneSchema = new Schema({
    countryCode:            { type: String, minLength: 2, maxLength: 2, required: true },
    type:                   { type: String, required: true },
    phone:            { type: String, required: true }
})
// phoneSchema.index({ phone: 1}, {name: "phone"});x
const Phone = mongoose.model('Phone', phoneSchema);
// Must be here not eof
const emailSchema = new Schema({
    type:                   { type: String, required: true },
    email:           { type: String, required: true }
})
const Email = mongoose.model('Email', emailSchema);


const contactSchema = new Schema({
    firstName:              { type: String, required: false },
    middleName:             { type: String, required: false },
    lastName:               { type: String, required: false },
    phones:                 [phoneSchema],
    streetAddress:          { type: String, required: false },
    city:                   { type: String, required: false },
    state:                  { type: String, required: false },
    zipcode:                { type: String, required: false },
    countryCode:            { type: String, required: false },
    emails:                 [emailSchema],
    image:                  { type: String, required: false },
   
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = {
    Contact, 
    Phone,
    Email
};