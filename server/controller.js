
module.exports = {
    register: async (req, res) => {
        // console.log('hit register')
        const {username, password} = req.body
        const db = req.app.get('db')
        // console.log(username, password)

        let newUser = await db.register({username, password})
        // console.log(newUser)
        newUser = newUser[0]
        res.status(200).send(newUser)
    },

    login: async (req, res) => {
        // console.log('hit login')
        const {username, password} = req.body
        const db = req.app.get('db')

        let authorizedUser = await db.get_user({username, password})
        // console.log(authorizedUser)
        authorizedUser = authorizedUser[0]
        res.status(200).send(authorizedUser)
    }
}