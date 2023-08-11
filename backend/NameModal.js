// NameModel.js
const mongoose = require('mongoose');

// const nameSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
  
// });

const nameSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
},{
	strict: 'throw', // Set strict option to throw an error for additional keys
}
);

const Name = mongoose.model('Name', nameSchema);

module.exports = Name;
