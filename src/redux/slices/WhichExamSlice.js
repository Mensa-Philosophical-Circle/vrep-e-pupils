import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};
const WhichExamSlice = createSlice({

    name:'whichSlice',
    initialState,
    reducers:{

        selectWhichExam:(state ,actions) => {

            state.value=actions.payload
        },

    }


})

export const {selectWhichExam } = WhichExamSlice.actions

export default WhichExamSlice.reducer