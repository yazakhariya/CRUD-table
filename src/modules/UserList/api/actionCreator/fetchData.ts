import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type DataType = {
  id: number
}

export const fetchData = createApi({
  reducerPath: 'fetchData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test.v5.pryaniky.com' }),
  endpoints: (build) => ({
    getData: build.query<DataType, void>({
      query: () => ({
        url: '/ru/data/v3/testmethods/docs/userdocs/get',
        method: 'GET',
        headers: {
          'x-auth': `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
})

export const { useGetDataQuery } = fetchData
