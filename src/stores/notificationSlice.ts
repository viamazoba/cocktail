import { StateCreator } from 'zustand'
import { FavoriteSliceType } from './favoriteSlice'
import Notification from '../components/Notification'

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: ()=> void
}


export const createNotificationSlice : StateCreator<NotificationSliceType & FavoriteSliceType, [], [],NotificationSliceType> = (set, get)=> ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })

        setTimeout(()=>{
            set({
                notification: {
                    text: payload.text,
                    error: payload.error,
                    show: false
                }
            })
        }, 5000)
    },
    hideNotification: ()=> {
        set({
            notification: {
                ...get().notification,
                show: false
            }
        })
    }
})
