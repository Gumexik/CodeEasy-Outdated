import { useState } from "react";
import SideNav from "../components/SideNav";
import AppFeatures from "../components/AppFeatures";

import lessons from "../Lessons.json";

function MainApp() {
	const [lesson, setLesson] = useState(lessons.lessons[0].description);

	return (
		<div className='flex flex-col md:flex-row overflow-y-hidden'>
			<SideNav setLesson={setLesson} />
			<AppFeatures lesson={lesson} />
		</div>
	);
}

export default MainApp;
