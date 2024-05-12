// src/features/supplies/suppliesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the Supply type according to the provided structure
type Supply = {
  id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  detailLink: string;
  isFeatured: boolean;
};

// Define the expected structure for the API response
interface SuppliesResponse {
  data: Supply[];
}

export const suppliesApi = createApi({
  reducerPath: 'suppliesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-b2-frontend-path-assignment-6-server-starter-pack-mu.vercel.app/api/v1/' }),
  endpoints: (builder) => ({
    getFeaturedSupplies: builder.query<Supply[], void>({
      query: () => 'supplies',
      // Ensure the transformResponse correctly handles the typed response
      transformResponse: (response: SuppliesResponse) => response.data.filter(supply => supply.isFeatured).slice(0, 6),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetFeaturedSuppliesQuery } = suppliesApi;