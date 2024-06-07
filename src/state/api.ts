import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: [
    'User',
    'Products',
    'Customers',
    'Transactions',
    'Geography',
    'Sales',
    'Admins',
    'Performance',
    'Dashboard',
  ],
  endpoints: (build) => ({
    getUser: build.query<any, string>({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query<any, void>({
      query: () => 'client/products',
      providesTags: ['Products'],
    }),
    getCustomers: build.query<any, void>({
      query: () => 'client/customers',
      providesTags: ['Customers'],
    }),
    getTransactions: build.query<any, { page: number; pageSize: number; sort: string; search: string }>({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transactions',
        method: 'GET',
        params: { page, pageSize, sort, search },
      }),
      providesTags: ['Transactions'],
    }),
    getGeography: build.query<any, void>({
      query: () => 'client/geography',
      providesTags: ['Geography'],
    }),
    getSales: build.query<any, void>({
      query: () => 'sales/sales',
      providesTags: ['Sales'],
    }),
    getAdmins: build.query<any, void>({
      query: () => 'management/admins',
      providesTags: ['Admins'],
    }),
    getUserPerformance: build.query<any, string>({
      query: (id) => `management/performance/${id}`,
      providesTags: ['Performance'],
    }),
    getDashboard: build.query<any, void>({
      query: () => 'general/dashboard',
      providesTags: ['Dashboard'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
