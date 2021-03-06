const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: 'johnny.heliohost.org',
    port: '3306',
    database: 'ricob_readpal',
    user: 'ricob_rpuser',
    password: process.env.DB_PASS
  },
})

exports.query = async (query) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}