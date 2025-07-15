'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

export default function Auth() {
  const token = useSelector((state) => state?.appReducer?.token);
  const cookieToken = Cookies.get('authToken');

  console.log('Redux Token:', token);
  console.log('Cookie Token:', cookieToken);

  useEffect(() => {
    if (cookieToken) {
      redirect('/dashboard');
    } else {
     redirect('/login');
    }
  }, [token, cookieToken]);


  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    </div>
  )
}