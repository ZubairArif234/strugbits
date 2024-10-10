import { create } from "zustand";
import { devtools } from "zustand/middleware";
import custAxios from "../configs/axiosConfig";
import { successMessage } from "../services/helpers";

const useMeal = (set) => ({
  allMeals: [],
  week1: [],
  week2: [],
  week3: [],
  week4: [],
  loading: false,
  getAll: async () => {
    try {
      set({ loading: true });
      const res = await custAxios.get(`/recipes`);

      if (res?.status === 200) {
        set({
          loading: false,
          allMeals: res?.data?.recipes,
        });
        return true;
      }
    } catch (error) {
      set({ loading: false });
    }
  },

  addMeal: (meals, week) => {
    set((store) => {
      const existingMeals = store[week] || [];

      const nonDuplicateMeals = meals?.filter(
        (newMeal) =>
          !existingMeals.some((existingMeal) => existingMeal.id === newMeal.id)
      );

      if (nonDuplicateMeals.length === 0) {
        successMessage(`All selected meals are already added.`);
        return {};
      } else {
        successMessage("Meals added successfully.");
        return {
          [week]: [...existingMeals, ...nonDuplicateMeals],
        };
      }
    });
  },

  deleteMeal: (meals, week) => {
    set({
      [week]: meals,
    });

    successMessage("Meal removed successfully.");
  },
});

export const useMealStore = create(
  devtools(useMeal, {
    enabled: true,
    store: "meal",
  })
);
