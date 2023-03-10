const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		unique: true,
		match: [/.+\@.+\..+/, "Please fill a valid email address"],
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
