import { authModalState } from '@/atoms/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function LogIn() {
	const setAuthModalState = useSetRecoilState(authModalState);
	const [userInput, setUserInput] = useState({ email: '', password: '' });
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const router = useRouter();

	useEffect(() => {
		if (error) {
			toast.error(error.message);
		}
	}, [error]);

	function handleClick(type: 'login' | 'register' | 'forgetPassword') {
		setAuthModalState((prevValue) => {
			return {
				...prevValue,
				type,
			};
		});
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setUserInput((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!userInput.email || !userInput.password)
			return toast('Please fill all required fields');
		try {
			const loggedInUser = await signInWithEmailAndPassword(
				userInput.email,
				userInput.password
			);
			if (!loggedInUser) {
				return;
			}
			router.push('/');
		} catch (error: any) {
			toast.error(error.message);
		}
	}

	return (
		<form action='' className=' space-y-6 px-5 py-4' onSubmit={handleLogin}>
			<h3 className='text-xl font-medium text-white'>Sign in to LeetClone</h3>
			<div>
				<label
					htmlFor='email'
					className='text-sm font-medium block mb-2 text-gray-300'
				>
					Email
				</label>
				<input
					onChange={handleInputChange}
					type='email'
					name='email'
					id='email'
					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-500 text-white'
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label
					htmlFor='email'
					className='text-sm font-medium block mb-2 text-gray-300'
				>
					Password
				</label>
				<input
					onChange={handleInputChange}
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
				{loading ? 'logging in' : 'login'}
			</button>
			<button className='flex w-full justify-end'>
				<a
					href='#'
					className='text-sm block text-brand-orange hover:underline w-full text-right'
					onClick={() => handleClick('forgetPassword')}
				>
					Forgot Password?
				</a>
			</button>
			<div className='text-sm font-medium text-gray-500'>
				Not Registered?
				<a
					href='#'
					className='text-blue-700 hover:underline'
					onClick={() => handleClick('register')}
				>
					Create Account
				</a>
			</div>
		</form>
	);
}
