const initializeEndpoint = (app) => {

    /**
     * @swagger
     * /users:
     *   get:
     *     description: Returns users
     *     tags:
     *      - Users
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: users
     * 
     */
    app.get('/users', (req, res) => res.end("this should return all users"));
    app.get('/users/:id', (req, res) => res.end(`this should return user with id ${req.params.id}`))
}

module.exports = initializeEndpoint;