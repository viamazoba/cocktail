import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipiesSlice, RecipiesSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoriteSliceType } from './favoriteSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'


export const useAppStore = create<RecipiesSliceType & FavoriteSliceType & NotificationSliceType>()(devtools( (...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))