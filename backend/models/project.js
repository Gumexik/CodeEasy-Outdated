const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	html: {
		type: String,
	},
	css: {
		type: String,
	},
	js: {
		type: String,
	},
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
