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
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
	const localTheme = localStorage.getItem("Mode");
	const [theme, setTheme] = useState(localTheme);
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});

	const [isLoggedIn, setIsLoggedIn] = useState(null);

	const checkLoggedIn = async () => {
		let token = localStorage.getItem("auth-token");
		if (token === null) {
			localStorage.setItem("auth-token", "");
			token = "";
		}
		try {
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
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		} catch (error) {
			setIsLoggedIn(false);
		}
	};

	useEffect(() => {
		checkLoggedIn();
	}, []);

	return (
		<div className='font-lato dark:bg-gray-800'>
			<userContext.Provider
				value={{ userData, setUserData, setIsLoggedIn, theme }}
			>
				<Navigation setTheme={setTheme} />
				<Loader isLoaded={isLoggedIn !== null}>
					<Routes>
						<Route exact path='/' element={<LandingPage />} />
						<Route path='/learn' element={<MainApp />} />
						<Route path='/terms' element={<TermsAndConditions />} />

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
				</Loader>
			</userContext.Provider>
		</div>
	);
}

export default App;
