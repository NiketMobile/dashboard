import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    token: null,
    placeExpanded: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.userInfo = null;
            state.token = null;
        },
        placeEpanded: (state, action) => {
            state.placeExpanded = action.payload;
        },
    },
});

export const { setUserInfo, setToken, logout, placeEpanded } = authSlice.actions;
export default authSlice.reducer;
