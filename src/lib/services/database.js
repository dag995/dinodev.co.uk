import { base } from '$app/paths'
import Database from 'better-sqlite3'


export class DB {

  static database = new Database('database.db')

  static createTable = () => {

    const sql = `CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      data,
      notes,
      history
    )`
    const query = this.database.exec(sql)
    console.log(`DB Query: ${JSON.stringify(query)} (${sql})`)

  } // create_db()

  static all = args => this.database.prepare(`SELECT * FROM ${args.type}`).all()
  static single = args => this.database.prepare(`SELECT * FROM ${args.type} WHERE id = ?`).get(args.id)
  static insert = args => {
    const insert = this.database.prepare(`INSERT INTO ${args.type}(data,notes,history) VALUES (?,?,?)`)
    insert.run([JSON.stringify(args.data), '[]', '[]'])
  } // insert()


}