// import { RequestHandler } from "@sveltejs/kit";

export class DB {

  static database = async query => {
    const call = await env.daniel_groves_co_uk_db.prepare(query).run()
    return Response.json(call.results)
  } // database()

  static all = async args => {
    return await this.database(`SELECT * FROM ${args.type}`)
  }

  static id = async args => {
    return await this.database(`SELECT * FROM ${args.type} WHERE rowid = ${args.id}`)
  }

  // static search = async args => {
    // return await this.database(`SELECT * FROM ${args.type} WHERE ${args.field} = `)
  // }

} 