'use client'

import { UpdateUserModel } from '@/component/UpdateUserModel';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfile = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div className='pt-32 container mx-auto flex justify-center'>

      {
        user && (

          
          <div className='p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 w-full max-w-4xl mb-10'>

          
            <div className='bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl'>

           
              <div className='flex flex-col md:flex-row items-center gap-6'>

                <div className=' rounded-full border-4 border-white shadow-lg'>
                  <Image
                    src={user.image}
                    alt={user.id}
                    width={180}
                    height={180}
                    className='rounded-full object-cover w-[180px] h-[180px]'
                  />
                </div>

                <div className='text-center md:text-left'>
                  <h2 className='text-4xl font-bold text-gray-800'>
                    {user.name}
                  </h2>

                  <p className='text-gray-500 mt-2 text-lg'>
                    {user.email}
                  </p>
                </div>

              </div>

              {/* <Link href={'/edit'}> */}
                {/* <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none hover:scale-105 transition-all duration-300">
                  Edit Profile
                </button>
              </Link> */}
               <UpdateUserModel className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none hover:scale-105 transition-all duration-300" />

            </div>

          </div>
        )
      }

    </div>
  );
};

export default MyProfile;