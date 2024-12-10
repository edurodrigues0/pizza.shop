import { http, HttpResponse } from 'msw'

import type { UpdateProfileBody } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name, description } = await request.json()

    console.log(name, description)

    if (name === 'Rocket Pizza' && description !== null) {
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
