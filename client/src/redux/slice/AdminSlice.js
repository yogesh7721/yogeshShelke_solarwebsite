
// const AdminSlice = createSlice({
//     name: "AdminSlice",
//     admin: getLocalStorageItem("admin"),
//     reducers: {
//         AdminLogin: (state, { payload }) => {
//             console.log(payload);
//             state.professional = payload
//         },
//         AdminLogout: (state) => {
//             localStorage.removeItem("admin");
//             state.admin = null;
//         },
//     },

//     extraReducers: builder => builder

//         .addMatcher(adminApi.endpoints.AdminLogin.matchFulfilled, (state, { payload }) => {
//             state.admin = payload
//         })
//         .addMatcher(adminApi.endpoints.AdminLogout.matchFulfilled, (state, { payload }) => {
//             localStorage.removeItem("admin");
//             state.admin = null
//         })

// })

// export const { invalidate } = AdminSlice.actions
// export default AdminSlice.reducer


import { createSlice } from "@reduxjs/toolkit";
import { adminApi } from "../apis/adminApi";

export const getLocalStorageItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || null;
    } catch (error) {
        console.error(`Error parsing localStorage item "${key}":`, error);
        return null;
    }
};

const AdminSlice = createSlice({
    name: "auth",
    initialState: {
        admin: getLocalStorageItem("admin"),
    },
    reducers: {
        AdminLogin: (state, { payload }) => {
            state.admin = payload;
            localStorage.setItem("admin", JSON.stringify(payload));
        },
        AdminLogout: (state) => {
            state.admin = null;
            localStorage.removeItem("admin");
        },
    },
    extraReducers: (builder) => builder
        .addMatcher(adminApi.endpoints.AdminLogin.matchFulfilled, (state, { payload }) => {
            state.admin = payload;
            localStorage.setItem("admin", JSON.stringify(payload));
        })
        .addMatcher(adminApi.endpoints.AdminLogout.matchFulfilled, (state) => {
            state.admin = null;
            localStorage.removeItem("admin");
        })
});

export const { AdminLogin, AdminLogout } = AdminSlice.actions;
export default AdminSlice.reducer;
