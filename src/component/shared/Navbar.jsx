// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import userAvatar from "../../assets/images.png"
// import Navlink from './Navlink';
// import { authClient } from "@/lib/auth-client"
// const Navbar = () => {
//     const { data: session } = authClient.useSession()
//     const user=session?.user;
//     console.log(session)

//     return (
//         <div className='container mx-auto flex justify-between gap-4 bg-slate-200 mb-2'>
//             <div></div>
//             <ul className='flex justify-between items-center text-gray-700 gap-3'>
//                 <li><Navlink href={'/'}>Home</Navlink></li>
//                 <li><Navlink href={'/products'}>Products</Navlink></li>
//                 <li><Navlink href={'/myprofile'}>MyProfile</Navlink></li>
//             </ul>
// {        user?    <div className='flex items-center gap-2'>
//                 <h2>Hello,{user.name}</h2>
//                 <div className='bg-slate-400 rounded-full w-[45px] h-[45px] flex justify-center items-center'>

//                 <Image src={user.image||userAvatar} alt='User Avatar' width={40} height={40} className='rounded-full'></Image>
//                 </div>

//                 <button className='btn bg-red-500 text-white' onClick={async()=>await authClient.signOut()}>Logout</button>
//             </div>:
//                 <button className='btn bg-purple-500 text-white'><Link href={"/login"}>Login</Link></button>
//             }
//         </div>
//     );
// };

// export default Navbar;
"use client";

import Image from "next/image";
import Image1 from "../../assets/logo2.png";
import Link from "next/link";
import React from "react";
import userAvatar from "../../assets/images.png";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  console.log(user);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-100">
      <div className="mt-2 container mx-auto flex justify-between items-center gap-4 p-4">
        <div>
          <Image
            src={Image1}
            alt="Logo"
            width={70}
            height={20}
            className="text-4xl"
          />
        </div>

        <ul className="flex justify-between items-center text-gray-700 gap-3">
          <li>
            <Navlink href={"/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href={"/products"}>Products</Navlink>
          </li>
          <li>
            <Navlink href={"/myprofile"}>MyProfile</Navlink>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-2">
            <h2>Hello,{user.name}</h2>

            <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 ">
              <div className="w-[45px] h-[45px] rounded-full bg-white flex justify-center items-center overflow-hidden">
                <Image
                  src={user?.image ? user.image : userAvatar}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <button
              className="btn bg-red-500 text-white"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button className="btn bg-purple-500 text-white">
            <Link href={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
