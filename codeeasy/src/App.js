import MainApp from "./pages/MainApp";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import userContext from "./context/userContext";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectsPage";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import SingleProjectPage from "./pages/SingleProjectPage";

function App() {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const checkLoggedIn = async () => {
		let token = localStorage.getItem("auth-token");
		if (token === null) {
			localStorage.setItem("auth-token", "");
			token = "";
		}
		const tokenResponse = await axios.post(
			"http://localhost:5000/tokenIsValid",
			null,
			{ headers: { "x-auth-token": token } }
		);
		if (tokenResponse.data) {
			const userRes = await axios.get("http://localhost:5000/users/", {
				headers: { "x-auth-token": token },
			});
			setUserData({
				token,
				user: userRes.data,
			});
		}
		setIsLoggedIn(true);
	};
	useEffect(() => {
		checkLoggedIn();
	}, [isLoggedIn]);

	return (
		<div className='font-lato dark:bg-gray-800'>
			<userContext.Provider value={{ userData, setUserData }}>
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route path='/learn' element={<MainApp />} />

					<Route
						path='/profile'
						element={
							<ProtectedRoute user={isLoggedIn}>
								<ProfilePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/projects'
						element={
							<ProtectedRoute user={isLoggedIn}>
								<ProjectPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/project/*'
						element={
							<ProtectedRoute user={isLoggedIn}>
								<SingleProjectPage />
							</ProtectedRoute>
						}
					/>

					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</userContext.Provider>
		</div>
	);
}

export default App;
