import { authModalState } from '@/atoms/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function SignUp() {
	const setAuthModalState = useSetRecoilState(authModalState);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const router = useRouter();
	function handleClick() {
		setAuthModalState((prev) => {
			return {
				...prev,
				type: 'login',
			};
		});
	}
	const [inputs, setInputs] = useState({
		email: '',
		displayName: '',
		password: '',
	});

	function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	}

	async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!inputs.displayName || !inputs.email || !inputs.password)
			return toast('please fill in all fields');
		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);
			if (!newUser) return;
			router.push('/');
		} catch (error: any) {
			toast.error(error.message);
		}
	}
	useEffect(() => {
		if (error) {
			toast.error(`message: ${error.message} code:${error.code}`);
		}
	}, [error]);

	return (
		<form action='' className=' space-y-6 px-5 py-4' onSubmit={handleRegister}>
			<h3 className='text-xl font-medium text-white'>Register to LeetClone</h3>
			<div>
				<label
					htmlFor='email'
					className='text-sm font-medium block mb-2 text-gray-300'
				>
					Email
				</label>
				<input
					onChange={handleChangeInput}
					type='email'
					name='email'
					id='email'
					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label
					htmlFor='displayname'
					className='text-sm font-medium block mb-2 text-gray-300'
				>
					Display Name
				</label>
				<input
					onChange={handleChangeInput}
					type='name'
					name='displayName'
					id='displayName'
					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
					placeholder='David Mark'
				/>
			</div>
			<div>
				<label
					htmlFor='password'
					className='text-sm font-medium block mb-2 text-gray-300'
				>
					Password
				</label>
				<input
					onChange={handleChangeInput}
					type='password'
					name='password'
					id='password'
					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
					placeholder='******'
				/>
			</div>
			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-s'
			>
				{loading ? <p>Registering</p> : <p>Register</p>}
			</button>
			<div className='text-sm font-medium text-gray-500'>
				Already have an account?
				<a
					href='#'
					className='text-blue-700 hover:underline'
					onClick={handleClick}
				>
					Login
				</a>
			</div>
		</form>
	);
}
