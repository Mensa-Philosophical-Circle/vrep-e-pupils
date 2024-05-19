import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../Pages/auth/login/loginSlice';
import getSubjectSlice from '../Pages/academic/service/getSubjectSlice'
import WhichExamSlice from './slices/WhichExamSlice';
import WindowSizeSlice from './slices/WindowSizeSlice';
import WhichTermSlice from './slices/WhichTermSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    getSubjects: getSubjectSlice,
    whichExam:WhichExamSlice,
    whichTerm:WhichTermSlice,
    screenSize:WindowSizeSlice,

  },
});

export default store;
