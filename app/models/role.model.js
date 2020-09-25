const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);


  module.exports = Role;

  /*
 const Schema = mongoose.Schema
 const roleSchema = new Schema({
     name: String
 }); 
 
 module.exports = mongoose.model("Role", roleSchema)
 */
