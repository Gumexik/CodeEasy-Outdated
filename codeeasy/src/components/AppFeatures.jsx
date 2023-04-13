import { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const AppFeatures = ({ lesson }) => {
	const [js, setJs] = useState("");
	const [srcDoc, setSrcDoc] = useState(` `);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setSrcDoc(
				`
				<!DOCTYPE html>
				<html>
				<body>
				
				<h2>My First JavaScript</h2>
				
				<button type="button"
				onclick="document.getElementById('demo').innerHTML = Date()">
				Click me to display Date and Time.</button>
				
				<p id="demo"></p>
				
				
                <script>${js}</script>
				</body>
              </html>
            `
			);
		}, 250);
		return () => clearTimeout(timeOut);
	}, [js]);

	return (
		<div className='md:flex md:flex-row w-full h-full md:h-[calc(100vh-96px)]'>
			<div className='inline-block md:w-1/2 w-full p-4 h-60 md:h-full md:flex justify-between flex-col gap-5'>
				<div className='min-h-48'>
					<div className='mb-6 md:mb-0 dark:bg-gray-600 dark:text-white dark:border dark:border-gray-500 border border-black bg-gray-200 rounded p-4 w-full focus:outline-none'>
						<textarea
							autoComplete='off'
							spellCheck='false'
							readOnly
							value={
								!lesson.description
									? "Welcome to CodeEasy! Start by chosing option from the side menu"
									: lesson.description
							}
							className='dark:bg-gray-900 bg-gray-300 rounded p-4 text-lg w-full h-48 resize-none focus:outline-none'
						></textarea>
					</div>
				</div>
				<div className='h-full'>
					<CodeEditor
						value={lesson.code}
						language='js'
						placeholder='Please enter JS code.'
						onChange={(e) => setJs(e.target.value)}
						data-color-mode='dark'
						className='text-lg  border-black rounded p-4 h-full w-full resize-none focus:outline-none'

						// style={{
						// 	fontSize: 12,
						// 	backgroundColor: "#f5f5f5",
						// 	fontFamily:
						// 		"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
						// }}
					/>
					{/* <textarea
						onChange={(e) => {
							setJs(e.target.value);
						}}
						className='text-lg dark:bg-gray-600 dark:text-white dark:border dark:border-gray-500 border border-black  bg-gray-200  rounded p-4  h-full w-full resize-none focus:outline-none'
						placeholder='Enter code here'
						autoComplete='off'
						spellCheck='false'
						defaultValue={lesson.code}
					/> */}
				</div>
			</div>
			<div className='md:w-1/2 p-4 dark:text-white flex justify-between flex-col'>
				<iframe
					sandbox='allow-scripts'
					srcDoc={srcDoc}
					title='JavaScript Iframe'
					className='md:h-3/4 h-80 w-full rounded-t bg-[#f3f4f6] border border-black dark:border dark:bg-gray-600 dark:text-white dark:border-gray-500'
				></iframe>
				<div className='md:h-1/4 w-full rounded-b border dark:border-gray-500 border-black bg-[#f3f4f6] dark:bg-gray-900 p-2'>
					<p>&gt; console</p>
				</div>
			</div>
		</div>
	);
};

export default AppFeatures;
