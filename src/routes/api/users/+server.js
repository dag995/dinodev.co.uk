import { DB } from "$lib/services/worker"

export const GET = async ({ request, platform }) => {

  const call = await platform.env.daniel_groves_co_uk_db.prepare(
    `SELECT * FROM Users`
  ).run()

  return new Response(
    JSON.stringify(call)
  )

} // call()