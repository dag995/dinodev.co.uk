import { DB } from "$lib/services/worker"

export const GET = async ({ request, platform }) => {
  
  const query = await DB.all({
    type: 'Users'
  })

  console.log(query)

  return new Response(
    JSON.stringify(query)
  )

} // call()