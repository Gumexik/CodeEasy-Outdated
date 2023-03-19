import LearnBtn from "./LearnBtn";

const Hero = () => {
	return (
		<section className='px-4 py-24 mx-auto max-w-7xl h-[calc(100vh-96px)] static'>
			<div className='w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center'>
				<h1 className='mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight text-center dark:text-white'>
					We are making{" "}
					<span className='block w-full text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#fde904] lg:inline'>
						JavaScript
					</span>{" "}
					fun and accessible for anyone.
				</h1>
				<p className='px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 md:text-center text-justify dark:text-gray-300'>
					CodeEasy is designed to teach students the basics of JavaScript and
					encourage them to continue learning programming. It features
					interactive lessons that guide users through the fundamentals of the
					JavaScript language, including concepts such as variables, data types,
					loops, and functions.
				</p>
				<p className='px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 md:text-center text-justify dark:text-gray-300'>
					In addition to the lessons, CodeEasy also includes a code editor that
					allows users to practice writing and running their own JavaScript
					code. This allows them to apply what they have learned and see the
					results in real-time.{" "}
				</p>

				<div className='mb-4 md:my-12 flex justify-center '>
					<LearnBtn />
				</div>
			</div>
		</section>
	);
};

export default Hero;
