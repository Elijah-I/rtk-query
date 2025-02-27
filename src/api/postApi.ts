import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              "Posts"
            ]
          : ["Posts"]
    }),
    createPost: build.mutation<Post, Omit<Post, "id">>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post
      }),
      invalidatesTags: ["Posts"]
    }),
    deletePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Posts"]
    }),
    updatePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "PUT",
        body: post
      }),
      invalidatesTags: (_, __, { id }) => [{ type: "Posts" as const, id }]
    })
  })
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation
} = postApi;
