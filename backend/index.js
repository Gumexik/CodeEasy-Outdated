const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
app.use(express.json());

mongoose
	.connect("mongodb://localhost:27017/auth", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log(err.message);
	});

app.post("/login", (req, res) => {
	res.json("login");
});

app.post("/register", (req, res) => {
	res.json("register");
});

app.post("/profile", (req, res) => {
	res.json("profile");
});

app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);
