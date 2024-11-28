import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-order-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getPopularProductsMock } from './get-popular-prodocuts-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getDayOrdersAmountMock,
  registerRestaurantMock,
  getMonthOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getMonthCanceledOrdersAmountMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
