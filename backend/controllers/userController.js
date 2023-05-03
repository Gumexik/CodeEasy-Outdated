const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

//  signup user

const signupUser = async (req, res) => {
	try {
		const { username, password, repeatPassword, email } = req.body;

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

		const existingUserEmail = await User.findOne({ email: email });
		const existingUsername = await User.findOne({ username: username });

		if (existingUserEmail)
			return res
				.status(400)
				.json({ message: "An account with this email already exists." });

		if (existingUsername)
			return res
				.status(400)
				.json({ message: "An account with this username already exists." });

		const salt = await bcrypt.genSalt(10);

		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			password: passwordHash,
			username,
		});

		const savedUser = await newUser.save();

		res.json(savedUser);
		console.log("User created");
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// login user

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// validate
		if (!email || !password)
			return res.status(400).json({ message: "All fields need to be filled." });

		const user = await User.findOne({ email: email });

		if (!user)
			return res
				.status(400)
				.json({ message: "There is no user with this email registered." });

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) return res.status(400).json({ message: "Invalid password" });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

		res.json({
			token,
			user: {
				id: user._id,
				username: user.username,
			},
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// delete user

const deleteUser = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.user);
		res.json(deletedUser);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const changePassword = async (req, res) => {
	try {
		const exinstingUser = await User.findById(req.user);
		const { currentPassword, newPassword, newPassword2 } = req.body;

		// validate
		if (!currentPassword)
			return res
				.status(400)
				.json({ message: "You need to enter current password." });

		const isMatch = await bcrypt.compare(
			currentPassword,
			exinstingUser.password
		);

		if (!isMatch)
			return res
				.status(400)
				.json({ message: "Current password doesn't match, please try again." });

		if (!newPassword || !newPassword2)
			return res.status(400).json({ message: "Please provide new password" });

		if (newPassword !== newPassword2)
			return res.status(400).json({ message: "Passwords doesnt match." });

		if (currentPassword == newPassword)
			return res
				.status(400)
				.json({
					message: "New password cannot be the same as the current password.",
				});

		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(newPassword, salt);
		const updatedUser = await User.findByIdAndUpdate(req.user, {
			password: hashedPassword,
		});
		updatedUser.save();
		res.status(200).json({ message: "Password changed." });
		console.log("password changed");
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Check if token is valid
const validToken = async (req, res) => {
	try {
		const token = req.header("x-auth-token");
		if (!token) return res.json(false);
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		if (!verified) return res.json(false);
		const user = await User.findById(verified.id);
		if (!user) return res.json(false);
		return res.json(true);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
// Get user info
const getUserInfo = async (req, res) => {
	const user = await User.findById(req.user);
	res.json({
		displayName: user.username,
		id: user.id,
		email: user.email,
	});
};

module.exports = {
	signupUser,
	loginUser,
	validToken,
	deleteUser,
	getUserInfo,
	changePassword,
};
