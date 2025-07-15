"use client"
import showToast from '@/components/showMessage';
import { useGetProductsByIdQuery } from '@/redux/apicall'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { use } from 'react';

export default function productsDetails({ params }) {
  const { productId } = use(params)
  const [productsData, setProductsData] = useState({})
  const { data, isLoading, isError, error, isFetching, refetch } = useGetProductsByIdQuery(productId);
  console.log('data--->', JSON.stringify(data, null, 2))

  if (!productId) {
    showToast('error', 'Product not found');
  }

  useEffect(() => {
    if (data) setProductsData(data);
  }, [data]);

  if (isLoading) return <p className='justify-center items-center'>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="w-auto p-4">
      <h1 className="text-center pb-7 text-3xl text-brand-950 font-bold">Product Details</h1>

      <div className="grid py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-white rounded-[10px]">

        <div className="rounded justify-center items-center relative flex w-full">
          <div className='aspect-square overflow-hidden bg-neutral-50'>
            <Image
              src={productsData?.image}
              alt="Picture of the author"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-span-1 rounded flex justify-center items-center lg:pr-15">

          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='text-3xl text-brand-950 font-bold pb-5'>{productsData?.title}</h1>
              <p className='text-[17px]'>{productsData?.description}</p>
              <div className=''>
                <div className='flex-col items-center pt-5'>
                  <p className='text-[17px] font-medium text-black'><span className='text-brand-500 font-bold'>Category :</span> {productsData?.category}</p>
                  <p className='text-[17px] font-medium text-black pt-1'><span className='text-brand-500 font-bold'>Price : </span> {productsData?.price}</p>
                </div>
              </div>
            </div>
            <div className='w-full pt-10'>
              <button className="mousehover cursor-pointer bg-brand-900 py-5 px-7 rounded hover:bg-brand-500 transition">
                <p className="text-[18px] text-white font-bold text-center">Add to Cart</p>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
