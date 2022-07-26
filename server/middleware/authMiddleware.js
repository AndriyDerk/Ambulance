const jwt = require('jsonwebtoken')
// TODO : ...
module.exports = (req, res, next) =>{
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.header.authorization.split(' ')[1]
        if(!token){
            res.status(401).json({message: 'Користувач не авторизаваний'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }catch (e){
        res.status(401).json({message: 'Користувач не авторизаваний'})
    }
};