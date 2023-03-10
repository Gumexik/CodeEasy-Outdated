require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { loginUser, signupUser } = require("./controllers/userController");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static("client"));
mongoose.set("strictQuery", false);

// routes
app.post("/login", loginUser);
app.post("/signup", signupUser);

// database and server connection

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
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
