import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NewProjectWindow from "../components/NewProjectWindow";
import { useState, useContext, useEffect } from "react";

function SingleProjectPage() {
	const [js, setJs] = useState("");
	const [css, setCss] = useState("");
	const [html, setHtml] = useState("<h1>New Project</h1>");

	const fetchSingleProject = () => {
		return;
	};

	return (
		<>
			<Navigation />
			<NewProjectWindow />
			<Footer />
		</>
	);
}

export default SingleProjectPage;
