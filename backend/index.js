const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/jwt", {});
app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

app.post("/api/login", (req, res) => {
	const { username, password } = req.body;
});

app.use(express.json());
