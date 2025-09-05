import { work } from '$lib/components/assets/work'

export const load = async ({ locals, url, parent }) => {
  
  await parent()

  return {
    work
  }

}