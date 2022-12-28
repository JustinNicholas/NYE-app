const express = require ('express');
const router = express.Router();
const pool = require('../modules/pool');

console.log('Hellllllooo there');

router.post('/', (req, res) => {
    console.log('post activated');
    const newRes = req.body.resolution
    const sqlText = `INSERT INTO "resolutions" (resolution) VALUES ($1)`

    console.log('newRes', newRes);
    console.log('sqlText', sqlText);

    pool.query(sqlText, [newRes])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`There was an error: ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;