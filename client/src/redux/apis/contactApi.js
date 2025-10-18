import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ContactApi = createApi({
    reducerPath: "ContactApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/contact`, credentials: "include" }), tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getContact: builder.query({
                query: () => {
                    return {
                        url: "/getUser",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            createContact: builder.mutation({
                query: userData => {
                    return {
                        url: "/userCreate",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),

            deleteContact: builder.mutation({
                query: (id) => {
                    return {
                        url: `/deleteContact/${id}`,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
        }
    }
})

export const {
    useGetContactQuery,
    useCreateContactMutation,
    useDeleteContactMutation
} = ContactApi
