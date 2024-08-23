import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/"}),
    endpoints: (builder) => ({
        getAllTodo: builder.query({
            query: () => 'todo',
            providesTags: ['todo']
        }),
        getTodo: builder.query({
            query: (id) => `todo/${id}`
        }),
        createTodo: builder.mutation({
            query: (data) => ({
                url: 'todo',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['todo']
        }),
        deleteTodo: builder.mutation({
            query: (id) =>({
                url: `todo/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['todo']
        }),
        editTodo: builder.mutation({
            query: ({id, ...data}) => ({
                url: `todo/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['todo']
        })
    })
})

export const {useGetAllTodoQuery, useCreateTodoMutation, useDeleteTodoMutation, useGetTodoQuery, useEditTodoMutation } = todoApi