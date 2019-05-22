const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.db3',
    },
};

const db = knex(knexConfig)

router.get('/', async (req, res) => {
    try {
        const action = await db("action");
        res.status(200).json(action);
    } catch (error) {
        res.status(500).json({ message: "error getting action" })
    }
})

router.post('/', async (req, res) => {
    try {
      const [id] = await db("action")
        .insert(req.body);
      const action = await db("action")
        .where({ id })
        .first()
      res.status(201).json(action);
    } catch(error) {
      res.status(500).json({ message: "Cannot Add" });
    }
  });

router.get('/:id', (req, res) => {
    const { id } = req.params
    db("project")
      .where({ id })
      .first()
      .then(project => {
        db("action")
          .where({ project_id: id })
          .then(action => {
            project.action = action
            res.status(200).json(project)
          })
          .catch(err => {
            res.status(500).json({ error: "Could not fetch" });
        });
    })
})

module.exports = router;