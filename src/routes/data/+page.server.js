
export const load = async ({ locals, url, parent }) => {
  
  await parent()

  const args = { type: 'Users' }
  console.log(args)
  const query = `SELECT * FROM ${args.type}`
  console.log(query)
  const call = await platform.env.daniel_groves_co_uk_db.prepare(query).run()
  console.log(call)


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