import ProductGridViewer from '@/components/Views/ProductGridViewer';
import { addProductFatcherFromSanity } from '@/components/utils/apicalling';
import { allProductFetherFromSanityType } from '@/components/utils/types';
import React from 'react'

const products  = async () => {
  
  let data = await addProductFatcherFromSanity() as allProductFetherFromSanityType;
  return (
    <>

<div className="py-4">
                <h1 className="my-3 text-3xl md:text-5xl font-bold text-gray-500 text-center">All Products</h1>
                <p className="text-center">Explore what we have</p>
    <ProductGridViewer ProductData={data.result} />
    </div>
    </>
  )
}

export default products
