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
        const project = await db("project");
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'error getting project' })
    }
})

router.post('/', async (req, res) => {
    try {
      const [id] = await db('project')
        .insert(req.body);
      const project = await db('project')
        .where({ id })
        .first()
      res.status(201).json(project);
    } catch(error) {
      res.status(500).json({ message: "Cannot Add" });
    }
  });

module.exports = router;