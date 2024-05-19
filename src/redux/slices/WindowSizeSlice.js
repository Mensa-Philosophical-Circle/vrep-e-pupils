import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
};
const screenSizeSlice = createSlice({

    name:'screenSize',
    initialState,
    reducers:{

        screenSizeResize:(state ,actions) => {

            state.value=actions.payload
        },

    }


})

export const {screenSizeResize } = screenSizeSlice.actions

export default screenSizeSlice.reducer