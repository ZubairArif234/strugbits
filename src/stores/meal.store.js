import { create } from "zustand";
import { devtools } from "zustand/middleware";
import custAxios from "../configs/axiosConfig";
import { successMessage } from "../services/helpers";

// ! this is just an example of how create stores with zustand
const useMeal = (set) => ({
  allMeals: [],
  week1:[],
  week2:[],
  week3:[],
  week4:[],
  loading:false,
  getAll:async () => {
    try {
        set({
          loading: true,
        });
        const res = await custAxios.get(`/recipes`);
        // console.log(res);
        if (res?.status === 200) {
         
          set({
            loading: false,
            allMeals:res?.data?.recipes
          
          });
  
          return true;
        }
      } catch (error) {
        set({
          loading: false,
        });
  
        // errorMessage(error?.response?.data?.message);
      }
  },
 addMeal:(meals,week )=> {
    
  set((store) => {
    const existingMeals = store[week] || [];
  
    const nonDuplicateMeals = meals?.filter(
      newMeal => !existingMeals.some(existingMeal => existingMeal.id === newMeal.id)
    );
  
    return {
      [week]: [...existingMeals, ...nonDuplicateMeals]
    };
  });

  successMessage("Meals added successfully.")
  
 },
 deleteMeal:(meals,week )=> {
    
  set( ({
      [week]:meals
  }));

  successMessage("Meal removed successfully.")
  
 }
});

export const useMealStore = create(
  devtools(useMeal, {
    enabled: true,
    store: "meal",
  })
);
