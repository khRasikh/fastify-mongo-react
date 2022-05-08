//import mongoose
const mongoose = require("mongoose");
//define types for each attributes
const recordType = mongoose.Schema({
  unique_id: Number,
  source_full_name: String,
  destination_full_name: String,
  bank_name: String,
  transfer_id_no: Number,
  amount: Number,
  currency: String,
  transfer_date: Date,
  status: String,
});

//export all attributes
module.exports = recordType;
