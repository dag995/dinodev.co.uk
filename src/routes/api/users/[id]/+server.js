import { DB } from "$lib/services/worker"

export const GET = async ({ request, platform, url }) => {
  
  const query = await DB.id({
    type: 'Users',
    id: url.searchParams.get('id')
  })

  console.log(query)

  return new Response(
    JSON.stringify(query)
  )

} // call()