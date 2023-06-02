import AuthModal from '@/components/Modals/AuthModal'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'

interface AuthPageProps{

}

export default function AuthPage() {
    const authModal = useRecoilValue(authModalState)
  return (
    <div className=' bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className=' max-w-7xl mx-auto'>
            <Navbar/>
            <div className="flex items-center justify-center h-[calc(100vh - 5rem)] pointer-events-none select-none">
                <Image width={500} height={500} src="/hero.png" alt="" />
            </div>
           {authModal.isOpen && <AuthModal/>}
        </div>
    </div>
  )
}
