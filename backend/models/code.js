const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	html: {
		type: String,
		required: true,
	},
	css: {
		type: String,
		required: true,
	},
	js: {
		type: String,
		required: true,
	},
});

const Code = mongoose.model("Code", codeSchema);

module.exports = Code;
