import { useEffect, useState } from "react";

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
					<textarea
						onChange={(e) => {
							setJs(e.target.value);
						}}
						className='text-lg dark:bg-gray-600 dark:text-white dark:border dark:border-gray-500 border border-black  bg-gray-200  rounded p-4  h-full w-full resize-none focus:outline-none'
						placeholder='Enter code here'
						autoComplete='off'
						spellCheck='false'
						defaultValue={lesson.code}
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
	);
};

export default AppFeatures;
