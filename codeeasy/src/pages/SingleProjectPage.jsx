import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SingleProjectWindow from "../components/SingleProjectWindow";
import { useState, useEffect, useContext } from "react";
import userContext from "../context/userContext";
import axios from "axios";

function SingleProjectPage() {
	const [js, setJs] = useState("");
	const [css, setCss] = useState("");
	const [html, setHtml] = useState("");
	const { userData } = useContext(userContext);
	const project_id = window.location.pathname.slice(9);
	const [projectData, setProjectData] = useState({});
	const [loaded, setLoaded] = useState(false);
	const srcDoc = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Iframe</title>
		<style>
		${css}
		</style>
	</head>
	<body>
	
	${html}
	<script>
	${js}
	</script>
	</body>
	</html>
	
	`;

	useEffect(() => {
		const SingleProjectFetch = async () => {
			try {
				const token = userData.token;
				const newProjectResponse = await axios.get(
					`http://localhost:5000/user/project/${project_id}`,
					{
						headers: {
							"x-auth-token": token,
						},
					}
				);
				setProjectData(newProjectResponse.data);
			} catch (err) {
				return err.response.data.message;
			}
			setLoaded(true);
		};
		SingleProjectFetch();
	}, [project_id, userData.token]);

	useEffect(() => {
		if (!projectData) {
			setHtml("");
			setJs("");
			setCss("");
		} else {
			setHtml(projectData.html);
			setJs(projectData.js);
			setCss(projectData.css);
		}
	}, [projectData]);

	return (
		<>
			<Navigation />
			{loaded ? (
				<SingleProjectWindow
					projectData={projectData}
					js={js}
					setJs={setJs}
					html={html}
					setHtml={setHtml}
					css={css}
					setCss={setCss}
					srcDoc={srcDoc}
					userData={userData}
					project_id={project_id}
				/>
			) : (
				<div>Loading Data...</div>
			)}
			<Footer />
		</>
	);
}

export default SingleProjectPage;
