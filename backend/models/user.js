const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			index: true,
			type: String,
			trim: true,
			unique: true,
			match: [/.+\@.+\..+/, "Please fill a valid email address"],
			required: "Email is required",
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
