const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jwt", {});
app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

app.post("/login", (req, res) => {
	res.json("login");
});

app.post("/register", (req, res) => {
	res.json("register");
});

app.post("/profile", (req, res) => {
	res.json("profile");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
