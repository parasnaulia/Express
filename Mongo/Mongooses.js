const mongoose = require("mongoose");
const validator = require("validator");
//Estalishing a connection

let connection = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/paras_bhai", {});
    console.log("Connection is Estalblished");
  } catch (err) {
    console.log(err);
  }
};
connection();

const schema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age Sahi likh bhai");
      }
    },
  },
  Gender: {
    type: String,
    // minlength:[5,"Bhen k lore 5 se Kum h brra inko"];
  },
  Email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a Valid Email bhai");
      }
    },
  },
  Mobile: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//now Creatinf a connection interface or model
const Pp = mongoose.model("Pp", schema);

//now Model is Created
let creation = async () => {
  try {
    let document1 = new Pp({
      name: "Kund Bhai mnjjk ",
      age: 24,
      Gender: "Male",
      Email: "Parasnaulia645@gmail.com",
      Mobile: "9890899009",
    });
    let document2 = new Pp({
      name: "Kund Bhai pel njknjnk,l k loru",
      age: 24,
      Gender: "Female",
      Email: "Parasnaulia645gmail",
    });
    const data = await Pp.insertMany([document1, document2]);
    console.log(data);
    console.log("Document inserted Sucessfully");
  } catch (err) {
    console.log(err);
  }
};
creation();

//Now performing The read operation in mongodb
// console.log("Read k bahaar");

// const Read = async () => {
//   try {
//     console.log("Wait");
// const reading = await Pp.find({
//   name: { $in: ["Paras", "Harcha"] },
// }).select({ name: 1, age: 1 });

// const reading = await Pp.find(
//   {
//     name: { $in: ["Paras", "Harcha"] },
//   },
//   { name: 1, _id: 0, age: 1 }
// );
// const reading = await Pp.find({
//   $or: [
//     { name: "Harcha" },
//     { age: 24 },
//     { $and: [{ name: "Paras" }, { age: 20 }] },
//   ],
// }).countDocuments();
//     const reading = await Pp.find({
//       $or: [
//         { name: "Harcha" },
//         { age: 24 },
//         { $and: [{ name: "Paras" }, { age: 20 }] },
//       ],
//     }).sort({ name: -1 });

//     console.log("aane waaala hai");
//     console.log(reading);
//     console.log("data Read Sucessecfully");
//   } catch (err) {
//     console.log(err);
//   }
// };
// Read();
// console.log("Read k niche");

// updating a Document
const update = async (id) => {
  try {
    // const up = await Pp.updateOne(
    //   { name: "Paras" },
    //   { $set: { age: 998, Gender: "Female" } }
    // );
    // const up = await Pp.findOneAndUpdate(
    //   { name: "Paras" },
    //   { $set: { age: 99814469, Gender: "Female" } },
    //   { new: true }
    // );
    const up = await Pp.findByIdAndUpdate(
      { _id: id },
      { $set: { name: "Paras Naulia", Gender: "Female" } },
      { new: true }
    );
    console.log(up);
  } catch (err) {
    console.log(err);
  }
};
// update("65aa8f09256fb8b573ed472a");

//now To delete the data in database

const delete1 = async (id) => {
  try {
    const val = await Pp.findByIdAndDelete({ _id: id });
    console.log(val);
    console.log("data del sucessfully");
  } catch (err) {
    console.log(err);
  }
};
// delete1("65aa8f09256fb8b573ed472a");
