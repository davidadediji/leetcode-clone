import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';

interface NavbarProps {
  
}

export default function Navbar() {
	const setAuthModalState = useSetRecoilState(authModalState);
	function handleClick() {
		setAuthModalState((prev) => {
      return({
        ...prev,
        isOpen:true
      })
    });
	}
	return (
		<div className=' flex items-center justify-between sm:px-12 md:px-24 px-2'>
			<Link href='/' className=' justify-center h-20 flex items-center'>
				<Image width={200} height={200} src='/logo.png' alt='' />
			</Link>
			<div className='flex items-center'>
				<button
					className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange'
					onClick={handleClick}
				>
					Sign in
				</button>
			</div>
		</div>
	);
}
