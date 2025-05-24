import React from 'react'
import { getAllCategory } from '@/Request/requests';

const Category = async() => {
    const categories:string[] = await getAllCategory();
    console.log(categories);

  return (
    <div>
      Category
    </div>
  )
}

export default Category
