const { json } = require("express");
const tabeldata = require("../model/tabel");
// get all data
const all_userdata = async (req, res) => {
  try {
    const tableData = await tabeldata.find();
    res.json(tableData);
  } catch (error) {
    res.json({ message: error });
  }
};
// get individual data
const individual_userdata = async (req, res) => {
  try {
    const individuledata = await tabeldata.findById({_id:req.params?.userID});
    res.json(individuledata);
  } catch (error) {
    res.json({ message: error });
  }
};
// new user data
const new_userdata = async (req, res) => {
  const newuser = new tabeldata({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    number: req.body.number,
    websitename: req.body.websitename,
  });
  console.log(newuser)
  try {
    const newdata = await newuser.save();
    res.json(newdata);
  } catch (error) {
    res.status(400).send(error);
  }
};
// update user data
const update_userdata = async (req, res) => {
  console.log('fdfjfijdfifd',req.body)
  try {
    const updatedata = {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      number: req.body.number,
      websitename: req.body.websitename,
    };
    const newupdate = await tabeldata.findByIdAndUpdate(
      { _id: req.params?.userID },
      updatedata,
      {new: true}
    );
    console.log("ydsywy",newupdate)
    res.json(newupdate);
  } catch (error) {
    res.json({ message: error });
  }
};
// delete user data
const delete_userdata = async (req, res) => {
  try{
        const removedata=await tabeldata.findByIdAndDelete(req.params?.userID)
        res.json(removedata)
    }
    catch(error){
        res.json({ message: error });
    }
};
module.exports = {
  all_userdata,
  individual_userdata,
  new_userdata,
  update_userdata,
  delete_userdata,
};
