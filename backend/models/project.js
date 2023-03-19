const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		html: {
			type: String,
			default: "",
		},
		css: {
			type: String,
			default: "",
		},
		js: {
			type: String,
			default: "",
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
