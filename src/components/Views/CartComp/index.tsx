// "use client"
// import { productFromIdCart } from '@/components/utils/apicalling'
// import { allProductFetherFromSanityType, singleProductType } from '@/components/utils/types'
// import { typeOfCart } from '@/lib/drizzle'
// import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types'
// import { ShoppingBagIcon, X } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { FC, useEffect, useState } from 'react'

// const CartMain: FC<{ data: typeOfCart[], user: KindeUser }> = ({ data, user }) => {
//     const [productData, setProductData] = useState<singleProductType[]>([]);

//     const dataGetter = async () => {
//         const productPromise = data.map((item) => {
//             return productFromIdCart(item.productid);
//         })

//         try {
//             const productData = await Promise.all(productPromise);

//             setProductData(productData.map((item: allProductFetherFromSanityType) => {
//                 return item.result[0]
//             }));

//         } catch (error) {

//         }
//     };
   
//     useEffect(() => {
//         dataGetter();
//     }, [data]);

//     if (data.length == 0) {
//         return (
//             <div className='h-[80vh] flex items-center justify-center flex-col gap-3'>
//                 <ShoppingBagIcon color='purple' size={42} />
//                 <h2 className="text-2xl font-semibold text-gray-600">Cart is Empty, <Link href={"/products"} className='text-xl'>Browse products</Link></h2>
//             </div>
//         )
//     };

// }

// export default CartMain