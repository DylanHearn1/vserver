const app = require('express')()
const port = 3000
const cors = require('cors')

app.use(cors())

app.listen(process.env.PORT || port, () => console.log(`listening on ${port}`))

const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:u1wQDqErKUO4@ep-fancy-water-a2ctu7jl-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

app.get('/:filter', async (req, res) => {

    const filter = req.params.filter

    try {
        if (filter == 'all') {
            result = await pool.query('SELECT * FROM property')
            res.json(result.rows)
        } else if (filter) {
            result = await pool.query(`SELECT title, description, image_url, tags, id FROM property WHERE '${filter}' = ANY(tags)`)
            res.json(result.rows)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json(({error: 'server error'}))
    }
})

app.get('/property/:id', async (req, res) => {
    const id = req.params.id

    try {
        result = await pool.query(`SELECT * FROM property WHERE id = ${id}`)
        if (!result) {
            res.status(500)
        } else {
            res.json(result.rows)  
        }
        
    } catch (e) {
        console.error(error, 'error fetching data')
        res.status(500).json(error, 'database error')
    }

})