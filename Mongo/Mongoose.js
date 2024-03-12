// const mongoose = require("mongoose");
// //Here Connection between your node js and mongodb has been created

// const connection = async () => {
//   try {
//     const connect = await mongoose.connect("mongodb://localhost:27017//popa", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected");
//   } catch (err) {
//     console.log(err);
//   }
// };
// connection();
// // Now creating a schema
// const data = new mongoose.Schema({
//   name: String,
//   age: Number,
//   College: String,
//   Email: String,
//   active: Boolean,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// //Now we have create a model or object or collection with the help of which we can perform differ
// //operation on database

// const Paras1 = mongoose.model("Paras1", data);
// //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// //
// //This model is a class or constructor now with the help of this class you can create a differnet
// //object which represents a document

// let creation = async () => {
//   try {
//     const document1 = new Paras1({
//       name: "Paras",
//       age: 24,
//       College: "Graphic",
//       Email: "PArasgma.com",
//       active: true,
//     });
//     const data = await document1.save();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// creation();

const mongoose = require("mongoose");

// Establishing a connection to MongoDB
const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/popa", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

// Creating a Mongoose schema
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  College: String,
  Email: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating a Mongoose model based on the schema
const Paras1 = mongoose.model("Paras1", dataSchema);

// Function to create and save a document
const creation = async () => {
  try {
    // Creating an instance of the model
    const document1 = new Paras1({
      name: "Paras",
      age: 24,
      College: "Graphic",
      Email: "paras@example.com", // Corrected email format
      active: true,
    });

    // Saving the document to the database
    const savedDocument = await document1.save();
    console.log(savedDocument);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection after the operation
    mongoose.connection.close();
  }
};

// Calling the connection function and then creating a document
(async () => {
  await connection();
  await creation();
})();
