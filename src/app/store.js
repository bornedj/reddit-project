import { configureStore } from '@reduxjs/toolkit';
import sportsSlice from '../features/sportsSlice';
import humorSlice from '../features/humorSlice';
import newsSlice from '../features/newsSlice';
import fashionSlice from '../features/fashionSlice';

const reducer = {
    sports: sportsSlice,
    humor: humorSlice,
    news: newsSlice,
    fashion: fashionSlice
}

export default configureStore({
    reducer: reducer
})