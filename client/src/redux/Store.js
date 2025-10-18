// import { configureStore } from "@reduxjs/toolkit";
// import { adminApi } from "./apis/adminApi";
// import { userApi } from "./apis/userApi";
// import AdminSlice from "./slice/AdminSlice"


// const reduxStore = configureStore({
//     reducer: {
//         [adminApi.reducerPath]: adminApi.reducer,
//         [userApi.reducerPath]: userApi.reducer,
//         auth: AdminSlice


//     },
//     middleware: def => [...def(), adminApi.middleware, userApi.middleware],
// })

// export default reduxStore



import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./apis/adminApi";

import AdminReducer from "./slice/AdminSlice";
import { ContactApi } from "./apis/contactApi";

const reduxStore = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [ContactApi.reducerPath]: ContactApi.reducer,
        auth: AdminReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApi.middleware, ContactApi.middleware),
});

export default reduxStore;
