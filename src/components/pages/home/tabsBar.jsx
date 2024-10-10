import { Button, Modal, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { useMealStore } from "../../../stores/meal.store";
import { useShallow } from "zustand/react/shallow";

const TabsBar = ({selectedMeal,setSelectedMeal}) => {
    const [selectedWeek , setSelectedWeek] = useState(1)
    const [opened, { open, close }] = useDisclosure(false);
    const { addMeal } = useMealStore(
        useShallow((state) => state)
      );
  return (
    <div className="bg-white py-4 lg:py-6 mt-8 mb-10 sticky top-0 z-50">
      <div className="p-3  lg:container flex justify-between flex-wrap md:flex-nowrap  gap-4">
        <Tabs.List className="flex !flex-nowrap overflow-auto pb-2 tab-scroll">
          <Tabs.Tab value="all" className="font-bold text-zinc-800 lg:!w-40">All Meals</Tabs.Tab>
          <Tabs.Tab value="one" className="font-bold text-zinc-800 lg:!w-40">Week 1</Tabs.Tab>
          <Tabs.Tab value="two" className="font-bold text-zinc-800 lg:!w-40">Week 2</Tabs.Tab>
          <Tabs.Tab value="three" className="font-bold text-zinc-800 lg:!w-40">Week 3</Tabs.Tab>
          <Tabs.Tab value="four" className="font-bold text-zinc-800 lg:!w-40">Week 4</Tabs.Tab>
        </Tabs.List>
        <div className="flex justify-center w-screen md:w-auto">

        <Button disabled={selectedMeal?.length > 0 ? false : true} onClick={open} className="!bg-blue-950 text-white">Add to week</Button>
      </div>
      </div>
      <Modal size={"auto"} opened={opened} onClose={close} withCloseButton={false} centered>
        <div className="flex flex-col gap-10 p-8">

        <p className="text-3xl text-zinc-800 font-bold text-center ">Select Week</p>
   <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

    {[1,2,3,4]?.map((val)=>(<p key={val} onClick={()=>setSelectedWeek(val)} className={selectedWeek=== val ?"cursor-pointer bg-blue-200 text-zinc-800 font-bold px-4 py-2 rounded-md" : "cursor-pointer bg-slate-200 text-zinc-800 font-bold px-4 py-2 rounded-md"}>Week {val}</p>))}
    </div>
    <div className="flex justify-center ">
        <Button className="!bg-blue-950 text-white !px-10" onClick={()=>{addMeal(selectedMeal , `week${selectedWeek}`);setSelectedMeal([]); close()}}>Save</Button>
    </div>
        </div>
      </Modal>
    </div>
  );
};

export default TabsBar;
