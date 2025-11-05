import { privateAPi } from ".";


export const orderApi = privateAPi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: (params) => ({
        url: "/restaurants/orders/",
        method: "GET",
        params,
      }),
      providesTags: ["getOrders"],
    }),

    getOrder: build.query({
      query: (id) => ({
        url: "/restaurants/orders/",
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "getOrder", id }],
    }),

    addOrder: build.mutation({
      query: (body) => ({
        url: "/restaurants/orders/checkout-order/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["getOrders"],
    }),

    updateOrder: build.mutation({
      query: body => ({
        url: `/dashboard/orders/${body?.orderNumber}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['GetOrders', 'getOrder'],
    })
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
