import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/"}),
    endpoints: (builder) => ({
        getAllTodo: builder.query({
            query: () => 'todo',
            providesTags: ['todo']
        }),
        createTodo: builder.mutation({
            query: (data) => ({
                url: 'todo',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['todo']
        })
    })
})

export const {useGetAllTodoQuery, useCreateTodoMutation } = todoApi