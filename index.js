const routes = require('./route/routes')
const app = routes()

app.listen(3000,()=>{
    console.log("Servidor executando na porta: 3000")
})