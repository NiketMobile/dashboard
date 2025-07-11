'use client'
import React, { useState } from 'react'

export default function LoginForm({ onSubmitData }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitData({ name, email });
    }

    return (
        <div className='container m-auto '>
            <form className='flex justify-center items-center min-h-screen'>

                <div className="pb-12 w-1/3">
                    <h2 className="text-base/7 font-semibold text-gray-900 justify-center items-center flex">Login</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                        <div className="sm:col-span-6">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
