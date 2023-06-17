const mongoose = require("mongoose");
// mongoose.set('useFindAndModify', false);
const Contact = mongoose.model("Contact");

exports.createContact = (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  //save a contact in the mongodb
  contact
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail!",
        error: err.message,
      });
    });
};

exports.contacts = (req, res) => {
  Contact.find()
    .select("-__v")
    .then((contactInfos) => {
      res.status(200).json(contactInfos);
    })
    .catch((error) => {
      //log on console
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
