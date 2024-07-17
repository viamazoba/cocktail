import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipiesSlice, RecipiesSliceType } from './recipeSlice'

export const useAppStore = create<RecipiesSliceType>()(devtools( (...a) => ({
    ...createRecipiesSlice(...a)
})))