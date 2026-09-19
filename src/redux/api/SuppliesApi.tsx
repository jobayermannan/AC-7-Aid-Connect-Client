// src/api/suppliesApi.ts
import { createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import { logout } from '../features/authSlice';

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

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithLogout: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQueryWithAuth(args, api, extraOptions as FetchBaseQueryMeta);
  const errorStatus = (result as { error?: { status?: number } }).error?.status;
  if (errorStatus === 401) {
    api.dispatch(logout());
    window.location.href = '/login';
  }
  return result;
};

export const suppliesApi = createApi({
  reducerPath: 'suppliesApi',
  baseQuery: baseQueryWithLogout,
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
