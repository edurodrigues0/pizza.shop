import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json([
    { date: '20/11/2024', revenue: 20000 },
    { date: '21/11/2024', revenue: 8000 },
    { date: '22/11/2024', revenue: 55500 },
    { date: '23/11/2024', revenue: 60000 },
    { date: '24/11/2024', revenue: 89000 },
    { date: '25/11/2024', revenue: 15000 },
    { date: '26/11/2024', revenue: 2000 },
    { date: '27/11/2024', revenue: 5000 },
  ])
})
