require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { loginUser } = require("./controllers/userController");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// const urlencodedParser = bodyParser.urlencoded({ extend: false });
// app.use(bodyParser.json(), urlencodedParser);

// routes

app.post("/login", loginUser);

// 404 page
app.use(function (req, res, next) {
	res.send("This page does not exist!");
});

// database

mongoose.set("strictQuery", false);

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
