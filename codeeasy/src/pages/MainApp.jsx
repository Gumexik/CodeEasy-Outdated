import { useState } from "react";
import SideNav from "../components/SideNav";
import AppFeatures from "../components/AppFeatures";

import lessons from "../Lessons.json";

function MainApp() {
	const [code, setCode] = useState("");
	const [lesson, setLesson] = useState(lessons.lessons[0].description);
	const [desc, setDesc] = useState("");

	return (
		<div className='flex flex-col md:flex-row overflow-y-hidden'>
			<SideNav setLesson={setLesson} setCode={setCode} setDesc={setDesc} />
			<AppFeatures lesson={lesson} code={code} setCode={setCode} desc={desc} />
		</div>
	);
}

export default MainApp;
