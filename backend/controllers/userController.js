const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user");

//  signup user

const signupUser = async (req, res) => {
	try {
		const { username, password, repeatPassword, email } = req.body;
		console.log(username, password, repeatPassword, email);

		if (!username || !password || !repeatPassword || !email)
			return res
				.status(400)
				.json({ message: "Not all fields have been entered." });

		if (password.length < 6)
			return res.status(400).json({
				message: "The password needs to be at least 6 characters long.",
			});

		if (password !== repeatPassword)
			return res.status(400).json({
				message:
					"Password doesn't match. Make sure that both passwords are the same.",
			});

		const existingUser = await User.findOne({ email: email });

		if (existingUser)
			res
				.status(400)
				.json({ message: "An account with this email already exists." });

		const salt = await bcrypt.genSalt();

		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			password: passwordHash,
			username,
		});

		const savedUser = await newUser.save();

		res.json(savedUser);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// login user

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);
};

module.exports = { signupUser, loginUser };
