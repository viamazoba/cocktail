import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipieService"
import { Categories, Drinks, SearchFilter } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = (set)=> ({
    categories: {
        drinks: []
    },
    drinks: [],
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
    }
})