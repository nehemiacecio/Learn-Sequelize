const express = require('express')
const {sequelize, Users} = require('./models')

const app = express()
app.use(express.json());
app.post('/users', async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    try {
        const user = await Users.create(
            {
                firstName,
                lastName,
                email,
                password
            })
        return res.json(user)
    } catch (err) {
        return res.status(500).json(err)
    }
})
app.listen({port: 5000}, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.sync({force: true})
    console.log('Database synced')
})


