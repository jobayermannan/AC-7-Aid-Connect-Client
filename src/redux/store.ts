// src/app/store.ts

import { configureStore, Middleware } from '@reduxjs/toolkit';
import { suppliesApi } from './api/SuppliesApi';


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [suppliesApi.reducerPath]: suppliesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(suppliesApi.middleware as Middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;