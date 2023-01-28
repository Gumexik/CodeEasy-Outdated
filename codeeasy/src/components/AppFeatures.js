import { useEffect, useState } from "react";

const AppFeatures = ({ lesson }) => {
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState(` `);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(
                `
              <html>
                <body><h1>Testing functionality of the Iframe. <br />There is a paragraph with id test_script to work with.</h1>
                <p id="test_script"></p></body>
                <style></style>
                <script>${js}</script>
              </html>
            `
            );
        }, 250);
        return () => clearTimeout(timeOut);
    }, [js]);

    return (
        <div className='flex flex-col md:flex-row w-full md:h-[calc(100vh-96px)]'>
            <div className='md:w-1/2 w-full p-4 h-60 md:h-full flex justify-between flex-col gap-5'>
                <div className='h-2/3'>
                    <p className='dark:bg-gray-600 dark:text-white dark:border dark:border-gray-500 border border-black bg-gray-200 h-full rounded p-4 w-full resize-none focus:outline-none'>
                        {lesson.description}
                    </p>
                </div>
                <div className='h-full'>
                    <textarea
                        onChange={(e) => {
                            setJs(e.target.value);
                        }}
                        className='dark:bg-gray-600 dark:text-white dark:border dark:border-gray-500 border border-black  bg-gray-200  rounded p-4  h-full max-h-full w-full resize-none focus:outline-none'
                        placeholder='Enter code here'
                        autoComplete='off'
                        spellCheck='false'
                        defaultValue='document.getElementById("test_script").innerHTML = "works!"'
                    ></textarea>
                </div>
            </div>
            <div className='md:w-1/2 p-4 dark:text-white'>
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