'use client'
import React from 'react'
import { Product } from '@/typing'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ShoppingBag, StarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/Store/cartSlice'
import { RootState } from '@/Store/store'
import { useToast } from '@/hooks/use-toast'

type Props ={
    product:Product
}

const ProductCard = ({product} : Props) => {
    const num =Math.round(product.rating.rate)
    const ratingArry = new Array(num).fill(0);
    const {toast} = useToast()

    {/*backend*/}
    const dispatch = useDispatch();
    const AddToCartHandler = (product:Product) => {
        toast({
            description:"Item Added to Cart",
            variant: "success",
        })

        dispatch(addItem(product))
    };
    {/*end*/}

  return (
    <div className="p-4">
        <div className="w-[200px] h-[150px]">
            <Image 
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="w-[80%] h-[80%] object-contain"
            />
        </div>
        {/*Category*/}
        <p className="mt-5 text-xs capitalize text-gray-600">{product.category}</p>
        {/*Title*/}
        <Link href={`/product/product-details/${product.id}`}>
            <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">{product.title}</h1>
        </Link>
        {/*Rating*/}
        <div className="flex items-center">
            {ratingArry.map((star)=>{
                return (
                <StarIcon key={Math.random()*1000} size={16} fill="yellow" className="text-yellow-500"/>
                );
            })}
        </div>
        {/*Pricing*/}
        <div className="flex mt-2 items-center space-x-2">
            <p className="text-black text-base line-through font-semibold opacity-50">{`$${(product.price + 10).toFixed(2)}`}</p>
            <p className="text-black text-lg font-bold opacity-80">${product.price}</p>
        </div>
        {/*Buttons*/}
        <div className="mt-4 flex items-center space-x-2">
            <Button onClick={()=>(AddToCartHandler(product))} size={"icon"}>
                <ShoppingBag size={18}/>
            </Button>
            <Button size={"icon"} className="bg-red-500">
                <HeartIcon size={18}/>
            </Button>
        </div>
    </div>
  )
}

export default ProductCard
