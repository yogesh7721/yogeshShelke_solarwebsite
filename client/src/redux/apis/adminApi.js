import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi,",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`, credentials: "include" }),

    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            getAdmin: builder.query({
                query: () => {
                    return {
                        url: "/getAdmin",
                        method: "GET"
                    }
                },
                providesTags: ["auth"],
                transformResponse: data => data.result
            }),
            AdminRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/adminRegister",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),
            AdminLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/adminLogin",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),

            // AdminLogout: builder.mutation({
            //     query: (userData) => ({
            //         url: "/adminLogout",
            //         method: "POST",
            //         body: userData
            //     }),
            //     invalidatesTags: ["auth"]
            // })

            AdminLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/adminLogout",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"],
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data.result
                }
            }),


        }
    }
})

export const {
    useGetAdminQuery,
    useAdminRegisterMutation,
    useAdminLoginMutation,
    useAdminLogoutMutation
} = adminApi
