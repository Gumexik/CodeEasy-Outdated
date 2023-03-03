const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
app.use(express.json());

app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

mongoose
	.connect("mongodb://localhost:27017/login", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected");
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});

app.post("/api", (req, res) => {
	// const {username, password} = req.body
	res.json("hey it works!");
});

// 404 page
app.use(function (req, res, next) {
	res.send("This page does not exist!");
});
