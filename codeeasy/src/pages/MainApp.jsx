import Navigation from "../components/Navigation";
import { useState } from "react";
import SideNav from "../components/SideNav";
import AppFeatures from "../components/AppFeatures";
import Footer from "../components/Footer";

import lessons from "../Lessons.json";

function MainApp() {
	const [lesson, setLesson] = useState(lessons.lessons[0].description);

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
