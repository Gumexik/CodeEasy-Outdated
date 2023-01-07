import { useState } from "react";

export default function Login({ setShowModal }) {


    const [formData, setFormData] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div
            onClick={(e) => {
                if (!e.target.closest(".modal")) {
                    setShowModal(false);
                }
            }}
            className='absolute flex justify-center items-center h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-40 overflow-hidden'>
            <div

                className="relative flex flex-col justify-center w-3/4 min-h-screen overflow-hidden" >
                <div className="modal w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}