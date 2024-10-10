import { Card, Image, Rating, Tooltip } from '@mantine/core'
import { Trash2 } from 'lucide-react'
import React from 'react'

const MealCard = ({data , selectedMeal ,withDeleteOption , deleteFunc}) => {
    const isSelected = selectedMeal?.find((val)=>val?.id === data?.id)
    
  return (
    <div className='cursor-pointer'>
         <Card shadow="sm" padding="lg" radius="md" withBorder className={isSelected && "!border-3 !border-blue-800"}>
            <div className='relative'>

            <p className='bg-zinc-900 text-white px-4 py-1 absolute rounded-lg right-2 top-2'>{data?.mealType[0]}</p>
       { withDeleteOption && 
       <div onClick={()=>deleteFunc(data)} className='p-2 rounded-md bg-red-100 hover:bg-red-200 absolute left-2 top-2'>
       <Trash2 color='#f52424' />
       </div>
    }
         <Image
      radius="md"
      src={data?.image}
      h={250}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
      </div>
      <Tooltip  position="top-start"
       label={data?.name}>

    <p className='text-xl font-bold my-3 line-clamp-1'>{data?.name}</p>
      </Tooltip>
    <Tooltip multiline position="bottom-start"
      w={300} label={data?.instructions?.join(" ")}>

    <p className='text-sm line-clamp-5'>{data?.instructions?.join(" ")}</p>
    </Tooltip>
    <div className='flex items-center justify-between flex-wrap mt-3'>
        <p className='flex gap-2 items-center text-sm'><span className='font-bold text-sm'>Cuisine:</span>{data?.cuisine}</p>
        <div className='flex items-center gap-2'><span className='font-bold text-sm'>Rating:{data?.rating}</span> <Rating value={data?.rating} readOnly /></div>
    </div>
         </Card>
    </div>
  )
}

export default MealCard