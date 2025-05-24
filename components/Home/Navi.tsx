import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Searchbox from '../Helper/Searchbox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navi = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/*Logo*/}
        <Link href="/">
            <Image 
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={140}
            />
        </Link>
        {/*Icons*/}
        <div className="flex items-center space-x-6">
            {/*Searchbox*/}
            <Searchbox/>
            <HeartIcon size={26} cursor={"pointer"}/>
            {/*ShoppingCartButton*/}
            <ShoppingCartButton/>
            {/*Userbutton*/}
                {/*Signedin user*/}
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                {/*Not signedin*/}
                <SignedOut>
                    <SignInButton>
                        <UserIcon size={26} cursor={"pointer"}/>
                    </SignInButton>
                </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default Navi
