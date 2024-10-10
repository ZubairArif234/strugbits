import { Loader, Tabs } from '@mantine/core'
import React from 'react'
import { useMealStore } from '../../../stores/meal.store';
import { useShallow } from 'zustand/react/shallow';
import MealCard from './mealCard';



const AllMeals = ({select,selectedMeal}) => {
    const { loading   , allMeals} = useMealStore(
        useShallow((state) => state)
      );
  return (
    <div>
        <Tabs.Panel value="all">
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
            {allMeals?.map(( data , i)=>(
                <div key={i} onClick={()=>select(data)}>

                <MealCard data={data} selectedMeal={selectedMeal}/>
                </div>
            ))}
          </div>
          {loading && 
          <div className='my-8 flex justify-center'>
              <Loader loading={loading} color='dark'/>
               </div>
          }
        </Tabs.Panel>
    </div>
  )
}

export default AllMeals

export const WeekOne = () => {
    const { week1 , deleteMeal} = useMealStore(
        useShallow((state) => state)
      );
      const handleDeleteMeal = (meal)=>{
        const list = [...week1]
        const updatedList = list?.filter((val)=>val?.id !== meal.id)

        
        deleteMeal(updatedList ,"week1")
    }
  return (
    <div>
        <Tabs.Panel value="one">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
          
            {week1?.length > 0 &&
             week1?.map(( data , i)=>(
                <div key={i} >

                <MealCard data={data} withDeleteOption deleteFunc={handleDeleteMeal}/>
                </div>
            )) }
          </div>
          {week1?.length < 1 && 
          <div className='my-8 '>
                <p className='text-xl font-bold text-zinc-800 text-center'>No Record Found</p>
                <p className='text-zinc-800 text-center'>There are  no meals saved yet</p>
                </div>
        }
        </Tabs.Panel>
    </div>
  )
}
export const WeekTwo = () => {
    const { week2 , deleteMeal} = useMealStore(
        useShallow((state) => state)
      );
      const handleDeleteMeal = (meal)=>{
        const list = [...week2]
        const updatedList = list?.filter((val)=>val?.id !== meal.id)
        deleteMeal(updatedList ,"week2")
    }
      
  return (
    <div>
        <Tabs.Panel value="two">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
          
            {week2?.length > 0 &&
             week2?.map(( data , i)=>(
                <div key={i} >

                <MealCard data={data} withDeleteOption deleteFunc={handleDeleteMeal}/>
                </div>
            ))}
          </div>
          {week2?.length < 1 && 
          <div className='my-8 '>
                <p className='text-xl font-bold text-zinc-800 text-center'>No Record Found</p>
                <p className='text-zinc-800 text-center'>There are  no meals saved yet</p>
                </div>
        }
        </Tabs.Panel>
    </div>
  )
}
export const WeekThree = () => {
    const { week3,deleteMeal} = useMealStore(
        useShallow((state) => state)
      );
      const handleDeleteMeal = (meal)=>{
        const list = [...week3]
        const updatedList = list?.filter((val)=>val?.id !== meal.id)
        deleteMeal(updatedList ,"week3")
    }
      
  return (
    <div>
        <Tabs.Panel value="three">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
          
            {week3?.length > 0 &&
             week3?.map(( data , i)=>(
                <div key={i} >

                <MealCard data={data} withDeleteOption deleteFunc={handleDeleteMeal}/>
                </div>
            )) }
          </div>
          {week3?.length < 1 && 
          <div className='my-8 '>
                <p className='text-xl font-bold text-zinc-800 text-center'>No Record Found</p>
                <p className='text-zinc-800 text-center'>There are  no meals saved yet</p>
                </div>
        }
        </Tabs.Panel>
    </div>
  )
}
export const WeekFour = () => {
    const { week4 , deleteMeal} = useMealStore(
        useShallow((state) => state)
      );
const handleDeleteMeal = (meal)=>{
    const list = [...week4]
    const updatedList = list?.filter((val)=>val?.id !== meal.id)
    deleteMeal(updatedList ,"week4")
}
      
      
  return (
    <div>
        <Tabs.Panel value="four">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
          
            {week4?.length > 0 &&
             week4?.map(( data , i)=>(
                <div key={i} >

                <MealCard data={data} withDeleteOption deleteFunc={handleDeleteMeal}/>
                </div>
            )) }
          </div>
          {week4?.length < 1 && 
          <div className='my-8 '>
                <p className='text-xl font-bold text-zinc-800 text-center'>No Record Found</p>
                <p className='text-zinc-800 text-center'>There are  no meals saved yet</p>
                </div>
        }
        </Tabs.Panel>
    </div>
  )
}