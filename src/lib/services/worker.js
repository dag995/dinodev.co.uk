import { RequestHandler } from "@sveltejs/kit";

export class DB {

  static database = async query => {
    return await platform.env.daniel_groves_co_uk_db.prepare(query).run()
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