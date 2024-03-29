import userContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ErrorNotice from "./ErrorNotice";
import ChangePasswordModal from "./ChangePasswordModal";
const UserInfo = () => {
	const { userData } = useContext(userContext);
	const [successMsg, setsuccessMsg] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [confirmPasswordChange, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const token = userData.token;

	const handleDeleteUser = async () => {
		try {
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

	const handlePasswordChange = async () => {
		try {
			const passwordChange = await axios.put(
				"http://localhost:5000/changePassword",
				{
					currentPassword: password,
					newPassword: newPassword,
					newPassword2: repeatPassword,
				},
				{ headers: { "x-auth-token": token } }
			);
			setConfirmPassword("Password Changed");
		} catch (err) {
			setError(err.response.data.message);
		}
	};

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError("");
			}, 2000);
		}
		if (confirmPasswordChange) {
			setTimeout(() => {
				setConfirmPassword("");
				setShowModal(false);
			}, 3000);
		}
		return clearTimeout();
	}, [error, confirmPasswordChange]);

	if (!userData.user.displayName) window.location.reload();
	else
		return (
			<>
				{showModal && (
					<ChangePasswordModal
						setPassword={setPassword}
						setNewPassword={setNewPassword}
						setRepeatPassword={setRepeatPassword}
						setShowModal={setShowModal}
						handlePasswordChange={handlePasswordChange}
						confirmPasswordChange={confirmPasswordChange}
						error={error}
					/>
				)}

				<div className='md:h-[calc(100vh-96px)] md:max-w-7xl mx-auto w-full dark:text-white text-xl px-4 md:px-0 md:mb-0 mb-10'>
					{successMsg && <ErrorNotice message={successMsg} />}
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
					<div className='flex gap-4'>
						<button
							onClick={() => {
								handleDeleteUser();
							}}
							className='py-2 px-4 bg-red-600 text-white dark:text-black rounded mt-24 border border-black dark:border-red-900 hover:bg-red-700'
						>
							Delete Account
						</button>
						<button
							onClick={() => {
								setShowModal(true);
							}}
							className='py-2 px-4 bg-blue-600 text-white dark:text-black rounded mt-24 border border-black dark:border-blue-900 hover:bg-blue-700'
						>
							Change Password
						</button>
					</div>
				</div>
			</>
		);
};

export default UserInfo;
