import { DB } from "$lib/services/database"

export const load = async ({ locals, url, parent }) => {
  
  await parent()

  const users = DB.all({ type: 'users' })

  const userMap = users.map(u => {
    return {
      id: u.id,
      data: JSON.parse(u.data),
      notes: JSON.parse(u.notes),
      history: JSON.parse(u.history),
    }
  })

  return {
    users: userMap,
    fields: {
      name: '',
      role: '',
      email: ''
    }
  }
}

export const actions = {
  
  add: async ({ locals, params, request }) => {
    
    const data = Object.fromEntries(await request.formData())
    const add = DB.insert({
      type: 'users',
      data: data
    })

    return { status: true, message: 'Success' }

  } // add

}