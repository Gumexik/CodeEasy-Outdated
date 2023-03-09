// login user

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);
};

//  signup user

const signupUser = async (req, res) => {
	res.json("signup user");
};

module.exports = { signupUser, loginUser };
