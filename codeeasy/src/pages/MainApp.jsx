import Navigation from "../components/Navigation";
import { useState } from "react";
import SideNav from "../components/SideNav";
import { lessons } from "../Lessons";
import AppFeatures from "../components/AppFeatures";
import Footer from "../components/Footer";

function MainApp() {
	const [lesson, setLesson] = useState(lessons[0]);

	return (
		<>
			<Navigation />
			<div className='flex flex-col md:flex-row'>
				<SideNav setLesson={setLesson} />
				<AppFeatures lesson={lesson} />
			</div>
			<Footer />
		</>
	);
}

export default MainApp;