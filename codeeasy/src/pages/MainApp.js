import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

function MainApp() {
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState(` `);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(
                `
              <html>
                <body>$</body>
                <style>$</style>
                <script>${js}</script>
              </html>
            `
            );
        }, 250);
        return () => clearTimeout(timeOut);
    }, [js]);

    return (
        <div className='bg-gray-800 h-screen'>
            <Navigation />
            <div className='flex'>
                <div className='w-1/2 bg-gray-700 p-4 h-[calc(100vh-96px)]'>
                    <textarea
                        className='bg-gray-600 rounded p-4 text-white h-full w-full resize-none'
                        placeholder='Enter code here'
                        autoComplete='off'
                        spellCheck='false'
                    ></textarea>
                </div>
                <div className='w-1/2 bg-gray-700 p-4'>
                    <iframe
                        sandbox='allow-scripts'
                        srcDoc={srcDoc}
                        title='JavaScript Iframe'
                        className='h-full w-full rounded'
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default MainApp;
