'use client'
import LoginForm from '@/components/loginForm'
import { loginUserData } from '@/redux/reducers/appReducer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'; // Fixed import

export default function page() {
    const dispatch = useDispatch()
    const router = useRouter();
    const useData = useSelector((state) => state.appReducer.useData);
    console.log('useData-->>', JSON.stringify(useData, null, 2))

    const loginUserHandler = (datas) => {
        console.log('data', JSON.stringify(datas, null, 2))
        const data = {
            name: datas.name,
            email: datas.email
        }
        dispatch(loginUserData(data))
        router.push('/dashboard')
    }

    return (
        <div className=''>
            <LoginForm onSubmitData={loginUserHandler} />
        </div>
    )
}
