import MainApp from "./pages/MainApp";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className='font-lato dark:bg-gray-800'>
			<Routes>
				<Route exact path='/' element={<LandingPage />} />
				<Route path='/learn' element={<MainApp />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</div>
	);
}

export default App;
