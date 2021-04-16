class User{
    getUser(res){
        res.status(200).json({"message":"ok"})
    }
}

module.exports = new User()