const express = require("../config/customExpress");
const userRoute = require("./routes/userRoute")
const middleware = require("../middlware/middleware")
const app = express();

module.exports = function Generate(){
    app.use(middleware)
    app.use("/users",userRoute)
    return app
}