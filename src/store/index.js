import { configureStore } from '@reduxjs/toolkit'
//reducer
import users from './slices/user'

export default configureStore({
    reducer: {
        users
    }
});

