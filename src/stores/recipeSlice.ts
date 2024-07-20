import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipies } from "../services/RecipieService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = (set)=> ({
    categories: {
        drinks: []
    },
    drinks: [],
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies: async (filters)=> {
        const drinks = await getRecipies(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    }
})