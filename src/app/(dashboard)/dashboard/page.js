'use client';

import { useGetProductsQuery } from '@/redux/apicall';
import React from 'react';

export default function DashboardPage() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetProductsQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 bg-amber-300">
      <h1 className="text-2xl font-bold mb-4">Hello Wolf</h1>
   
    </div>
  );
}
