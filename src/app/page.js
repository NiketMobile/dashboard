'use client'
import { redirect } from 'next/navigation';



export default function page() {
  redirect('/(dashboard)/dashboard');
  // return
  // const useData = useSelector((state) => state.appReducer.useData);

  // console.log('useData-->>', JSON.stringify(useData, null, 2))

  // if (useData?.name) {
  //   redirect('/dashboard');
  // } else {
  //   redirect('/(auth)/login');
  // }
}