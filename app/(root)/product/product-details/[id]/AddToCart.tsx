'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { addItem, CartItem } from '@/Store/cartSlice'
import { Product } from '@/typing'
import { useToast } from '@/hooks/use-toast'

const AddToCart = ({product}:{product:Product}) => {
    const dispatch=useDispatch()
    const {toast} = useToast()

    const addCartHandler=()=> {
      toast({
        description:"Item Added to Cart",
        variant:"success"
      })
      
      dispatch(addItem(product));
    };

  return (
    <Button onClick={()=>{addCartHandler()}} className="mt-6">
      Add to Cart
    </Button>
  )
}

export default AddToCart
