'use client'
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';


export default function page() {
  const useData = useSelector((state) => state.appReducer.useData);

  console.log('useData-->>', JSON.stringify(useData, null, 2))

  if (useData?.name) {
    redirect('/dashboard');
  } else {
    redirect('/(auth)/login');
  }
}