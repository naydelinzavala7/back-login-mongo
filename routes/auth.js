const router = require('express').Router()

router.post('/register', async(req,res) => {
    res.json({
        error: null,
        data: 'Aqui los vamos a poner'
    })
})

module.exports = router