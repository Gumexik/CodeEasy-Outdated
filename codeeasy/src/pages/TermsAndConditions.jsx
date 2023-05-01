import React from "react";

const TermsAndConditions = () => {
	return (
		<div className='md:h-[calc(100vh-96px)] md:max-w-7xl mx-auto w-full dark:text-white text-xl px-4 md:px-0 md:mb-0 mb-10 text-center'>
			<h1 className='py-8 text-2xl'>Terms and Conditions</h1>

			<ol className='list-decimal flex flex-col text-start gap-4'>
				<li>
					By creating an account on our website, you agree to abide by the terms
					and conditions set forth herein.
				</li>
				<li>
					You are solely responsible for maintaining the confidentiality of your
					account information, including your username and password. You agree
					to notify us immediately of any unauthorized use of your account or
					any other breach of security.
				</li>
				<li>
					You agree to use our website only for lawful purposes and in
					compliance with all applicable laws and regulations.
				</li>
				<li>
					You agree not to use our website in a way that could damage, disable,
					overburden, or impair our servers or networks.
				</li>
				<li>
					You agree not to attempt to gain unauthorized access to our website,
					servers, or networks.
				</li>

				<li>
					We reserve the right to terminate your account or restrict your access
					to our website at any time, without notice, if we suspect or determine
					that you have violated these terms and conditions.
				</li>
				<li>
					We reserve the right to modify these terms and conditions at any time,
					without notice. Your continued use of our website after such
					modifications will constitute your acceptance of the modified terms
					and conditions.
				</li>
				<li>
					Our website may include links to third-party websites, which are not
					under our control. We are not responsible for the content or
					functionality of these third-party websites and do not endorse or make
					any representations about them.
				</li>
				<li>
					Our website may include user-generated content, such as comments or
					reviews. We do not endorse or make any representations about the
					accuracy, reliability, or completeness of such content, and we are not
					responsible for any loss or damage resulting from your reliance on
					such content.
				</li>
				<li>
					These terms and conditions are governed by and construed in accordance
					with the laws of United Kingdom. Any dispute arising under or in
					connection with these terms and conditions will be subject to the
					exclusive jurisdiction of the courts located in United Kingdom.
				</li>
			</ol>
		</div>
	);
};

export default TermsAndConditions;
