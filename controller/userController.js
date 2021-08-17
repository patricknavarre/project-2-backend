const axios = require("axios");
const Application = require("../Model/Application");

const applicationFunction = async (req, res) => {
  try {

    const { firstName, lastName, dateOfBirth, city, email, phoneNumber} = req.body

    const newApplication = new Application({
      firstName,
      lastName,
      dateOfBirth,
      city,
      email,
      phoneNumber,
    });

    const savedApplication = await newApplication.save();

    res.json({
      savedApplication,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  applicationFunction,
};
z