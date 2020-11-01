const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
    // Insert text into db
    const savingText = await db.query(escape `
        INSERT INTO savedtexts (savedtext)
        VALUES (${req.query.textToSave})
    `);

    // Grab id key from db response
    const createdId = savingText.insertId 
    console.log(createdId);
    //send that id back to be used for custom URL
    res.status(200).json({ createdId })
}