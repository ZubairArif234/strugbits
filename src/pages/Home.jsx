import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Tabs } from "@mantine/core";
import Banner from "../components/pages/home/banner";
import TabsBar from "../components/pages/home/tabsBar";
import { useMealStore } from "../stores/meal.store";
import AllMeals, { WeekFour, WeekOne, WeekThree, WeekTwo } from "../components/pages/home/tabsContent";

const Home = () => {
  const [selectedMeal , setSelectedMeal]=useState([])
  const {  getAll  } = useMealStore(
    useShallow((state) => state)
  );

  useEffect(()=>{
    getAll()
  },[])

  const addMeal = (meal) => {
    const isSelected = selectedMeal?.find((val)=>val?.id === meal?.id)
  
    if (isSelected){
const updatedList = selectedMeal?.filter((val)=>val?.id !== isSelected?.id)
setSelectedMeal(updatedList)
}else{
      setSelectedMeal((prevMeal) => [...prevMeal, meal]);

    }
  }

 
  
  return (
    <div>
      <Banner/>

      <div className=" bg-gradient-to-r from-[#ffeee3] to-[#dbeeff] py-8">
      <div className="p-3 xl:container ">
        <p className="text-2xl font-bold text-zinc-800">Week Orders</p>
      </div>
      <Tabs defaultValue="all">
        <TabsBar selectedMeal={selectedMeal} setSelectedMeal={setSelectedMeal}/>
        <div className="p-3  xl:container ">
          <AllMeals select={addMeal} selectedMeal={selectedMeal}/>
          <WeekOne/>
          <WeekTwo/>
          <WeekThree/>
          <WeekFour/>
          </div>
      </Tabs>
      </div>
    </div>
  );
};

export default Home;
