import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name:'application',
    initialState:{
        applicants:null,
    },
    reducers:{
        setAllApplicants:(state,action) => {
            state.applicants = action.payload;
        }
    }
});

// this is a random text 

export const {setAllApplicants} = applicationSlice.actions;
export default applicationSlice.reducer;
export const applicationReducer = applicationSlice.reducer;