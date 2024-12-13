import { http, HttpResponse } from 'msw'

import type { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-revenue', () => {
  return HttpResponse.json({
    revenue: 25000,
    diffFromLastMonth: 70,
  })
})
