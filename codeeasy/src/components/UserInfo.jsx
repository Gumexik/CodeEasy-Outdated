import userContext from "../context/userContext";
import { useContext, useState } from "react";
import axios from "axios";
import DeletedMsg from "./DeletedMsg";
const UserInfo = () => {
	const { userData } = useContext(userContext);
	const [successMsg, setsuccessMsg] = useState("");

	const handleDeleteUser = async () => {
		try {
			const token = userData.token;
			const deleteResponse = await axios.delete(
				"http://localhost:5000/deleteUser",
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);
			setsuccessMsg(
				"Account Deleted, wait until you are redirected to the home page"
			);
			setTimeout(() => {
				window.location.reload(false);
				deleteResponse();
			}, 3000);
		} catch (err) {
			return err.response.data.message;
		}
	};
	return (
		<div className='md:h-[calc(100vh-96px)] md:px-36 w-full dark:text-white text-xl px-4 mb-10'>
			{successMsg && <DeletedMsg message={successMsg} />}
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
			<button
				onClick={() => {
					handleDeleteUser();
				}}
				className='py-2 px-4 bg-red-600 text-black rounded mt-24'
			>
				Delete Account
			</button>
		</div>
	);
};

export default UserInfo;
