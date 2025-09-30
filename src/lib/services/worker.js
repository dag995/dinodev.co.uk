// import { RequestHandler } from "@sveltejs/kit";

export async function call({ request, platform }) {
  
  let result = await env.daniel_groves_co_uk_db.prepare(
    "SELECT * FROM Users"
  ).run()

  return new Response(JSON.stringify(result))

} // call()