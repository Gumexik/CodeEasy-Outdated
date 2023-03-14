import React, { useState } from "react";

const NewProjectWindow = () => {
	const [js, setJs] = useState("");
	const [css, setCss] = useState("");
	const [html, setHtml] = useState(`<h1>OUTPUT HERE</h1>`);
	const [clickedBtn, setClickedBtn] = useState("html");

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

	return (
		<div>
			<div className='flex justify-between max-w-7xl mx-auto items-center'>
				<div className='flex items-center justify-center my-6 gap-4'>
					<label htmlFor='project_name' className='text-xl dark:text-white'>
						Project name:
					</label>
					<input
						id='project_name'
						type='text'
						required
						className='rounded-md p-2 w-64'
					/>
				</div>

				<button
					className='w-24 px-4 h-12 text-black bg-[#fde904] rounded-md hover:bg-amber-300
				focus:outline-none focus:bg-amber-400'
				>
					Save
				</button>
			</div>
			<div className='md:flex md:flex-row w-full h-full md:h-[calc(100vh-184px)]'>
				<div className='inline-block md:w-1/2 w-full p-4 md:flex justify-between flex-col gap-5'>
					<div>
						<div className='w-full flex justify-between gap-2 mb-2 '>
							<button
								onClick={(e) => {
									setClickedBtn("html");
								}}
								className='p-2 bg-gray-300 rounded w-full'
							>
								HTML
							</button>
							<button
								onClick={(e) => {
									setClickedBtn("css");
								}}
								className='px-4 py-2 w-full bg-gray-300 rounded'
							>
								CSS
							</button>
							<button
								onClick={(e) => {
									setClickedBtn("js");
								}}
								className='px-4 py-2 w-full bg-gray-300 rounded '
							>
								JavaScript
							</button>
						</div>
						<textarea
							onChange={(e) => {
								setJs(e.target.value);
							}}
							className='text-lg overflow-y-scroll dark:bg-gray-600 dark:text-white dark:border dark:border-gray-500 border border-black  bg-gray-200 rounded p-4 w-full resize-none focus:outline-none md:h-[664px]'
							placeholder='Enter code here'
							autoComplete='off'
							spellCheck='false'
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

export default NewProjectWindow;
