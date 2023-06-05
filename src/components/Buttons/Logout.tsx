import { auth } from '@/firebase/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';

interface LogoutProps {}

export default function Logout() {
    const [signOut, loading, error] = useSignOut(auth)
    async function handleLogout(){
        signOut()
    }
	return (
		<button
			className=' bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange'
			onClick={handleLogout}
		>
			<FiLogOut />
		</button>
	);
}
