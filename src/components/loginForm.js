'use client'
import React, { useState } from 'react'
import showToast from './showMessage'

export default function LoginForm({ onSubmitData }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitData({ name, email });
        // showToast('success', 'success login');
    }

    return (
        <div className='mx-auto p-8'>
            <form className='flex justify-center items-center min-h-screen'>
                <div className="pb-12 w-1/3  bg-brand-50 p-10 rounded-[10px]">
                    <h2 className="text-base/7 font-semibold text-gray-900 text-[25px] justify-center items-center flex">Login</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                        <div className="sm:col-span-6">
                            <label htmlFor="first-name" className="block font-medium text-gray-900 text-[18px]">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete="given-name"
                                    className="block w-full text-[18px] rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="email" className="block font-medium text-gray-900 text-[18px]">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md text-[18px] bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="mt-10 flex items-center justify-end gap-x-6">
                        <button
                            onClick={onSubmit}
                            type="submit"
                            className="w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>

                </div>

            </form>
        </div>
    )
}
