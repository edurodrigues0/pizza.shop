import { http, HttpResponse } from 'msw'

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '12341235115',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 4000,
        product: { name: 'Pizza Pepperoni Média' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 5000,
        product: { name: 'Pizza Espanhola Grande' },
        quantity: 1,
      },
    ],
    totalInCents: 9000,
  })
})
