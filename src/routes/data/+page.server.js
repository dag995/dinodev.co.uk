
export const load = async ({ locals, url, parent }) => {
  
  await parent()
  call = {}

  return {
    users: call,
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

    return { status: true, message: 'Success' }

  } // add

}