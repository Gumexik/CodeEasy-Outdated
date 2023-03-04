require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

// 404 page
app.use(function (req, res, next) {
	res.send("This page does not exist!");
});

// database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Database connected");
		app.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});

// routes
app.post("/api", (req, res) => {
	// const {username, password} = req.body
	res.json("hey it works!");
	console.log(username, password);
});
