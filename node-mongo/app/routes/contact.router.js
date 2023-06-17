module.exports = function(app){

    var contacts = require("../controllers/contact.controller.js");

    app.post("/api/contact", contacts.createContact);
    app.get("/api/contacts", contacts.contacts);
}