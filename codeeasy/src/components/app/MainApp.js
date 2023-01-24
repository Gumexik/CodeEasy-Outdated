import React from 'react';
import Navigation from '../Navigation';

function MainApp() {
    return (
        <div className="bg-gray-800 h-screen">
            <Navigation />
            <div className="flex">
                <div className="w-1/2 bg-gray-700 p-4 h-[calc(100vh-96px)]">
                    <textarea className="bg-gray-600 rounded p-4 text-white h-full w-full resize-none" placeholder="Enter code here" autoComplete='off' spellCheck="false"></textarea>
                </div>
                <div className="w-1/2 bg-gray-700 p-4">
                    <iframe src="https://www.example.com" title="Example" className="h-full w-full rounded"></iframe>
                </div>
            </div>
        </div>
    );
}

export default MainApp;
