const ApiError = require(`../error/ApiError`)
//TODO : ...
module.exports = function (err, req, res){
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: `Непередбачувана помилка!`})
}