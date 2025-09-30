import { call } from '$lib/services/worker'

export const load = async ({ locals, url, parent }) => {
  
  await parent()

  const c = await call()
  console.log(c)
 

}