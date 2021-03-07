const router = require('express').Router();
let Application = require('../models/application.model.js');

router.route('/').get((req, res) => {
    Application.find()
        .then(applications => res.json(applications))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const company = req.body.company;
    const link = req.body.link;
    const position = req.body.position;
    const date = Date.parse(req.body.date);

    const newApplication = new Application({
        username,
        company,
        link,
        position,
        date,
    });

    newApplication.save()
        .then(() => res.json("Application Added!"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;