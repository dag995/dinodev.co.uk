export const GET = async ({ request, platform }) => {
  
  const result = await platform.env.daniel_groves_co_uk_db.prepare("SELECT * FROM Users").run()
  console.log(result)
  return new Response(JSON.stringify(result))

} // call()