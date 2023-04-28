import React, { useState } from "react";
import { useEffect, useContext } from "react";
import SuccessNotice from "./SuccessNotice";
import axios from "axios";
import CodeEditor from "@uiw/react-textarea-code-editor";
import userContext from "../context/userContext";

const SingleProjectWindow = ({
	js,
	setJs,
	setCss,
	setHtml,
	css,
	html,
	srcDoc,
	projectData,
	userData,
	project_id,
}) => {
	const { theme } = useContext(userContext);
	const [clickedBtn, setClickedBtn] = useState("html");
	const [successMsg] = useState("Project saved.");
	const [successVisible, setSuccessVisible] = useState(false);

	const handleUpdate = async () => {
		try {
			const token = userData.token;
			const params = { html, js, css };
			const UpdateProject = await axios.put(
				`http://localhost:5000/user/project/${project_id}`,
				params,
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);
			setSuccessVisible(true);
			UpdateProject();
		} catch (err) {
			return err.response.data.message;
		}
	};

	useEffect(() => {
		let successMessageTimeout = setTimeout(() => {
			setSuccessVisible(false);
		}, 3000);

		return () => {
			clearTimeout(successMessageTimeout);
		};
	}, [successVisible]);

	return (
		<div className='relative'>
			<div className='w-48 absolute left-1/2 transform -translate-x-1/2 '>
				{successVisible && <SuccessNotice message={successMsg} />}
			</div>
			<div className='flex md:justify-between gap-4 md:gap-0 max-w-7xl py-4 justify-center mx-auto items-center'>
				<p className='dark:text-white text-xl bg-[#fde904] dark:bg-gray-600 rounded-md p-2'>
					Project name:
					<b className='dark:text-gray-300'> {projectData.name}</b>
				</p>

				<button
					onClick={handleUpdate}
					className='w-24 px-4 h-12 text-black bg-[#fde904] rounded-md hover:bg-amber-300
				focus:outline-none focus:bg-amber-400'
				>
					Save
				</button>
			</div>
			<div className='md:flex md:flex-row w-full h-full md:h-[calc(100vh-184px)]'>
				<div className='inline-block md:w-1/2 h-full w-full p-4 gap-5 md:gap-0'>
					<div className='h-full flex flex-col'>
						<div className='w-full flex justify-between gap-2 mb-2 '>
							<button
								type='checkbox'
								onClick={() => {
									setClickedBtn("html");
								}}
								className={`p-2  rounded w-full  ${
									clickedBtn === "html"
										? "bg-gray-700 text-white"
										: "bg-gray-300"
								}`}
							>
								HTML
							</button>
							<button
								onClick={() => {
									setClickedBtn("css");
								}}
								className={`p-2  rounded w-full  ${
									clickedBtn === "css"
										? "bg-gray-700 text-white"
										: "bg-gray-300"
								}`}
							>
								CSS
							</button>
							<button
								onClick={() => {
									setClickedBtn("js");
								}}
								className={`p-2  rounded w-full  ${
									clickedBtn === "js" ? "bg-gray-700 text-white" : "bg-gray-300"
								}`}
							>
								JavaScript
							</button>
						</div>
						<CodeEditor
							value={`${
								clickedBtn === "html" ? html : clickedBtn === "js" ? js : css
							}`}
							language={`${
								clickedBtn === "html"
									? "html"
									: clickedBtn === "js"
									? "javascript"
									: "css"
							}`}
							placeholder={`${
								clickedBtn === "html"
									? "Enter HTML here (You are within the body of the document)"
									: clickedBtn === "js"
									? "Enter JavaScript here."
									: "Enter CSS here"
							}`}
							onChange={(e) => {
								if (clickedBtn === "html") {
									setHtml(e.target.value);
								}
								if (clickedBtn === "css") {
									setCss(e.target.value);
								}
								if (clickedBtn === "js") {
									setJs(e.target.value);
								}
							}}
							data-color-mode={theme === "dark" ? "dark" : "light"}
							className='text-lg  border-black rounded p-4 h-full w-full resize-none focus:outline-none'
						/>
					</div>
				</div>
				<div className='md:w-1/2 p-4 dark:text-white block'>
					<iframe
						sandbox='allow-scripts'
						srcDoc={srcDoc}
						title='JavaScript Iframe'
						className='md:h-full h-80 w-full rounded bg-[#f3f4f6] border border-black dark:border dark:bg-gray-600 dark:text-white dark:border-gray-500'
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default SingleProjectWindow;
