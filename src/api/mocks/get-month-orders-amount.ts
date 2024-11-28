import { http, HttpResponse } from 'msw'

import type { GetMonthOrdersAmountResponse } from '../get-orders-month-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 250,
    diffFromLastMonth: 7,
  })
})
