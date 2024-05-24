// src/api/suppliesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Supply = {
  _id: string;
  image?: string;
  category: string;
  title: string;
  amount: string;
  isFeatured: boolean;
};

interface SuppliesResponse {
  data: Supply[];
}

export const suppliesApi = createApi({
  reducerPath: 'suppliesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aid-connect-server-rj8hofw7t-jobayermannans-projects.vercel.app/api/v1/' }),
  endpoints: (builder) => ({
    getSupplies: builder.query<Supply[], void>({
      query: () => 'supplies',
      transformResponse: (response: SuppliesResponse) => response.data,
    }),
    createSupply: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: 'create-supplies',
        method: 'POST',
        body: formData,
      }),
    }),
    updateSupply: builder.mutation<void, Partial<Supply> & Pick<Supply, '_id'>>({
      query: ({ _id, ...patch }) => ({
        url: `update-supplies/${_id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteSupply: builder.mutation<void, string>({
      query: (_id) => ({
        url: `delete-supplies/${_id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetSuppliesQuery, useCreateSupplyMutation, useUpdateSupplyMutation, useDeleteSupplyMutation } = suppliesApi;