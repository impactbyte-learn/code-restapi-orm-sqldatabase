const models = require('../../models')

const controller = {
    get: (req, res, next) => {
        models.User
            .findAll().then(users => {
                res.send({
                    users
                });
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    getOneById: (req, res, next) => {
        const id = Number(req.params.id)
        models.User
            .findById(id)
            .then(user => {
                if (user) {
                    res.send({
                        user
                    })
                } else {
                    res.send({
                        message: `User not found`
                    })
                }
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    create: (req, res, next) => {
        res.send({
            users
        });
    }
}

module.exports = controller