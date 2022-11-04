import { configureStore } from '@reduxjs/toolkit';
import ntfPictureSlice from './Slice/Nft_pictureSlice'


export const store = configureStore({
    reducer: {
        ntfPicture: ntfPictureSlice
    }
})

console.log(store)