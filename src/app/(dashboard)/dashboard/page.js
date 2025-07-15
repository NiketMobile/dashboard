'use client';

import { useGetProductsQuery } from '@/redux/apicall';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

export default function DashboardPage() {
  const { data, isLoading, isError, error, isFetching, refetch, } = useGetProductsQuery({});
  const [listData, setListData] = useState([])
  const [currentPage, setCurrentPage] = useState("1")

  const [searchText, setSearchText] = useState("")

  const itemsPerPage = 8;

    const filteredData = useMemo(() => {
    if (!searchText) return data;

    return data?.filter(item =>
      item?.title?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);


  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData?.slice(startIndex, endIndex);

  console.log(searchText, "-=-=--=searchText")


  if (isLoading) return <p className='justify-center items-center'>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="pb-10 pt-7">

      <h1 className="text-3xl text-brand-950 font-bold text-center  whitespace-nowrap">
        Products List
      </h1>

      <div className="ml-auto mb-10 rounded-md bg-white border border-gray-300 shadow-sm transition-all w-full max-w-md">
        <input
          type="text"
          name="username"
          id="username"
          className="block w-full min-w-0 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm rounded-md"
          placeholder="Search"
          aria-label="Search products"
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
      </div>


      <div className="grid px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentData?.slice(0, 8)?.map((product) => {
          return (
            <a href={`/dashboard/${product.id}`} key={product._id} className="block">
              <div
                className="bg-white justify-between items-center min-h-[440px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-neutral-50 w-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                  />
                </div>

                <div className="w-full pt-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>
            </a>

          )
        })}
      </div>

      <div className="flex justify-end items-center gap-2 mt-5 fixed bottom-0 right-30">
        {pageNumbers.map((item) => {
          const isActive = currentPage === item;
          return (
            <div
              key={item}
              className={`cursor-pointer rounded-md hover:bg-gray-200 transition-colors duration-200`}>
              <button
                onClick={() => setCurrentPage(item)}
                className={`p-2 px-4 rounded-md cursor-pointer mouseover:bg-gray-100 ${isActive ? "bg-blue-500 text-white" : "bg-white text-gray-800"
                  }`}
              >
                <p className="text-lg font-semibold">{item}</p>
              </button>
            </div>
          );
        })}
      </div>


    </div>
  );
}
