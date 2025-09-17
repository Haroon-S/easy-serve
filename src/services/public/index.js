import API_URL from '@/utilities/apiConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/prefer-default-export
export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: () => ({}),
});
