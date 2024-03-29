require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
	loginUser,
	signupUser,
	validToken,
	deleteUser,
	getUserInfo,
	changePassword,
} = require("./controllers/userController");

const {
	getAllProjects,
	newProject,
	getSingleProject,
	updateProject,
	deleteProject,
} = require("./controllers/projectController");

const auth = require("./middleware/auth");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static("client"));
mongoose.set("strictQuery", false);

// user routes
app.post("/login", loginUser);
app.post("/signup", signupUser);
app.post("/tokenIsValid", validToken);
app.get("/users", auth, getUserInfo);
app.delete("/deleteUser", auth, deleteUser);
app.put("/changePassword", auth, changePassword);

// projects routes
app.post("/user/newProject", auth, newProject);
app.get("/user/projects", auth, getAllProjects);
app.get("/user/project/:id", auth, getSingleProject);
app.put("/user/project/:id", auth, updateProject);
app.delete("/user/project/:id", auth, deleteProject);

// database and server connection

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
