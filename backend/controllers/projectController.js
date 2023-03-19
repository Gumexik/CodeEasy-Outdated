const Project = require("../models/project");
const { ObjectId } = require("mongodb");

//  new project

const newProject = async (req, res) => {
	try {
		const { projectName, js, html, css } = req.body;
		if (!projectName)
			return res.status(400).json({ message: "Project must have a name" });

		const existingProjectName = await Project.findOne({ name: projectName });

		if (existingProjectName)
			return res.status(400).json({
				message:
					"Project with this name already exist, please chose different name",
			});

		const newProject = new Project({
			name: projectName,
			js: js,
			html: html,
			css: css,
			user_id: req.user,
		});

		const savedProject = await newProject.save();

		res.json(savedProject);
		console.log("Project created");
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// get all project

const getAllProjects = async (req, res) => {
	try {
		const user_id = req.user;
		const projects = await Project.find({ user_id }).sort({ createdAt: -1 });
		res.status(200).json(projects);
	} catch (err) {
		res
			.status(500)
			.json({ error: err.message && "You dont have any projects yet." });
	}
};

// update project

const updateProject = async (req, res) => {
	try {
		const { js, html, css } = req.body;
		const project = await Project.findOneAndUpdate(
			{ _id: ObjectId(req.params.id) },
			{ js: js, html: html, css: css }
		);
		res.status(200).json(project);
		console.log("Project Updated");
	} catch (err) {
		res
			.status(500)
			.json({ error: err.message && "There is no such a project." });
	}
};
// get single project

const getSingleProject = async (req, res) => {
	try {
		const project = await Project.findOne({ _id: ObjectId(req.params.id) });
		res.status(200).json(project);
	} catch (err) {
		res
			.status(500)
			.json({ error: err.message && "There is no such a project." });
	}
};
// delete project

const deleteProject = async (req, res) => {
	const response = await fetch;
	const data = await response.json();
};

module.exports = {
	newProject,
	updateProject,
	deleteProject,
	getAllProjects,
	getSingleProject,
};
