import MainApp from "./pages/MainApp";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='font-lato dark:bg-gray-800'>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/learn' element={<MainApp />} />
			</Routes>
		</div>
	);
}

export default App;
