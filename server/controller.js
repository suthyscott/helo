
module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        let newUser = await db.register({username, password})
        newUser = newUser[0]
        res.status(200).send(newUser)
    },

    login: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        let authorizedUser = await db.get_user({username, password})
        authorizedUser = authorizedUser[0]
        res.status(200).send(authorizedUser)
    }
}