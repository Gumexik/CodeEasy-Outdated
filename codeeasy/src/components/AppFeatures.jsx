import { useEffect, useState, useContext } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import userContext from "../context/userContext";
const AppFeatures = ({ lesson }) => {
	const { theme } = useContext(userContext);
	const [code, setCode] = useState("");
	const [srcDoc, setSrcDoc] = useState(` `);
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setSrcDoc(
				`
				<!DOCTYPE html>
				<html>
				<body>
				<script>
				// Save the current console log function in case we need it.
				const _log = console.log;
				// Override the console
				
				console.log = function(...rest) {
				  // window.parent is the parent frame that made this window
				  window.parent.postMessage(
					{
					  source: 'iframe',
					  message: rest,
					},
					'*'
				  );
				  // Finally applying the console statements to saved instance earlier
				  _log.apply(console, arguments);
				};
				</script>
				${code}
				</body>
              </html>
            `
			);
			setLogs([]);
		}, 250);
		return () => clearTimeout(timeOut);
	}, [code]);

	useEffect(() => {
		const messageListener = function (response) {
			if (response.data && response.data.source === "iframe") {
				setLogs((prevLogs) => [...prevLogs, ...response.data.message]);
			}
		};

		window.addEventListener("message", messageListener);

		return () => {
			window.removeEventListener("message", messageListener);
		};
	}, []);

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
							className='dark:bg-gray-900 bg-gray-300 rounded p-4  w-full h-48 resize-none focus:outline-none'
						></textarea>
					</div>
				</div>
				<div className='h-full'>
					<CodeEditor
						value={lesson.code}
						language='html'
						placeholder='Please enter code here.'
						onChange={(e) => setCode(e.target.value)}
						data-color-mode={theme === "dark" ? "dark" : "light"}
						className='text-lg  border-black rounded p-4 h-full w-full resize-none focus:outline-none'
					/>
				</div>
			</div>
			<div className='md:w-1/2 p-4 dark:text-white flex justify-between flex-col'>
				<iframe
					id='myIframe'
					sandbox='allow-scripts'
					srcDoc={srcDoc}
					title='Iframe'
					className='md:h-3/4 h-80 w-full rounded-t bg-[#f3f4f6] border border-black dark:border dark:bg-gray-600 dark:text-white dark:border-gray-500'
				></iframe>
				<div
					id='console-container'
					className='md:h-1/4 w-full overflow-y-scroll rounded-b border dark:border-gray-500 border-black bg-[#f3f4f6] dark:bg-gray-900 p-2'
				>
					{logs.length <= 0 && <p>&gt; Output</p>}
					{logs.map((log, idx) => (
						<p key={idx}>&gt; {log}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppFeatures;
