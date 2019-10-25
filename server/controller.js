
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
    },

    getPosts: async (req, res) => {
        const {userid} = req.params
        console.log(userid)
        const db = req.app.get('db')

        let posts = await db.get_posts()
        console.log(posts)
        
        if (req.query.userposts === true && req.query.search){
            posts = posts.filter(e => e.title === req.query.search)
            return posts
        }
        if (req.query.userposts === false && !req.query.search){
            posts = posts.filter(e => e.author_id !== userid)
            return posts
        }
        if (req.query.userposts === false && req.query.search){
            posts = posts.filter(e => e.title === req.query.search && e.author_id !== userid)
            return posts
        }
        if (req.query.userposts === true && !req.query.search){
            return posts
        }
        console.log(posts)
        res.status(200).send(posts)
    }
}