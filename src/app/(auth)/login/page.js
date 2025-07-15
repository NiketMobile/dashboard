'use client';

import LoginForm from '@/components/loginForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';
import { setToken, setUserInfo } from '@/redux/reducers/appReducer';
import showToast from '@/components/showMessage';
import { useLoginUserMutation } from '@/redux/apicall';
import Cookies from 'js-cookie';

export default function page() {
    const dispatch = useDispatch()
    const router = useRouter();
    const useData = useSelector((state) => state.auth.userInfo);
    console.log('useData-->>', JSON.stringify(useData, null, 2))
    const [loginUser, { isLoading, isSuccess, error }] = useLoginUserMutation();


    const handleSubmit = async (data) => {
        try {
            console.log('data--->>>', JSON.stringify(data, null, 2))
            const payload = {
                "username": "johnd",
                "password": "m38rmF$",
            }
            // const payload = {
            //     username: data.name,
            //     password: data.email
            // }
            const result = await loginUser(payload)

            console.log('token --->', result?.data?.token);

            if (result?.data?.token) {
                // dispatch(setUserInfo(data))
                dispatch(setToken(result?.data?.token))

                Cookies.set('authToken', result?.data?.token, {
                    expires: 7, // days
                    secure: 'production',
                    sameSite: 'strict',
                    path: '/',
                });

                showToast('success', 'success login');
                router.push('/dashboard')
            } else {
                showToast('error', 'error login');
            }
        } catch (err) {
            console.error('Failed to add product:', err);
            showToast('error', `${err?.message}`);
        }
    };

    const loginUserHandler = (datas) => {
        console.log('data', JSON.stringify(datas, null, 2))
        const data = {
            name: datas.name,
            email: datas.email
        }
        handleSubmit(data)
        // dispatch(setUserInfo(data))
        // showToast('success', 'success login');
        // router.push('/dashboard')
    }




    return (
        <div className=''>
            {
                isLoading && <p>Loading...</p>
            }
            <LoginForm onSubmitData={loginUserHandler} />
        </div>
    )
}
