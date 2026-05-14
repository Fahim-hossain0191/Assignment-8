'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const MyProfile = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div className='pt-32 container mx-auto'>

      {
        user && (
          <div className='border p-6 rounded-xl shadow-md flex items-center gap-6 bg-white mb-10'>

            <Image
              src={user.image}
              alt={user.id}
              width={200}
              height={200}
              className='rounded-full object-cover'
            />

            <div>
              <h2 className='text-3xl font-bold'>{user.name}</h2>
              <p className='text-gray-500'>{user.email}</p>
            </div>

          </div>
        )
      }

    </div>
  );
};

export default MyProfile;