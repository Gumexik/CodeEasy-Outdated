import userContext from "../context/userContext";
import { useContext } from "react";
const UserInfo = () => {
	const { userData } = useContext(userContext);

	return (
		<div className='md:h-[calc(100vh-96px)] md:px-36 w-full text-white text-xl px-4 mb-10'>
			<h3 className='border-b-2 text-2xl mt-10 font-bold py-4 text-center'>
				Account Information
			</h3>
			<div className='mt-12 flex gap-2 md:gap-6'>
				<p className='font-bold w-32'>Username:</p>
				<p>
					{userData.user.displayName.charAt(0).toUpperCase() +
						userData.user.displayName.slice(1)}
				</p>
			</div>
			<div className='mt-12 flex gap-6'>
				<p className='font-bold w-32'>Email:</p>
				<p>{userData.user.email}</p>
			</div>
		</div>
	);
};

export default UserInfo;
