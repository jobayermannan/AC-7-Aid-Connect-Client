// src/app/store.ts
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { suppliesApi } from './api/SuppliesApi';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [suppliesApi.reducerPath]: suppliesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(suppliesApi.middleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;