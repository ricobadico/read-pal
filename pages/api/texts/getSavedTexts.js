const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
    const foundtext = await db.query(escape `
        SELECT *
        FROM savedtexts
        WHERE id = ${req.query.id}
    `);
    //   req.query.id}
    res.status(200).json({ foundtext })
}