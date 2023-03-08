require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/users");

// express app
const app = express();

// middleware
app.use(express.json());

const urlencodedParser = bodyParser.urlencoded({ extend: false });
app.use(bodyParser.json(), urlencodedParser);

// routes

app.use("/login", require("./routes/loginRoute"));
app.use("/register", require("./routes/registerRoute"));

// 404 page
app.use(function (req, res, next) {
	res.send("This page does not exist!");
});

// database
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected");
		app.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
