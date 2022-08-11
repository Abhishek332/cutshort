import { createSlice } from "@reduxjs/toolkit";

const initialState: formStateType = {
    step: '0',
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    planToUse: ''
}

const multiStepFormSlice = createSlice({
    name: 'multiStepForm',
    initialState,
    reducers: {
        formScreenHandler: (state) => {
            return { ...state, step: (parseInt(state.step) + 1).toString() };
        },
        formValueUpdater: (state, action) => {
            let { payload: { name, value } } = action;
            return { ...state, [name]: value };
        }
    }
})

export const { formScreenHandler, formValueUpdater } = multiStepFormSlice.actions;

const multiStepFormReducer = multiStepFormSlice.reducer;
export default multiStepFormReducer;