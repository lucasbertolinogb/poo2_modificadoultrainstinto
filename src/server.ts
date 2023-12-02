import express from "express";
import UserRouter from "./routes/UserRoutes";
import GrupoRouter from "./routes/GrupoRoutes";
import AvaliacaoRouter from "./routes/AvaliacaoRoutes";
import MainRouter from "./routes/MainRoutes";

const app = express();
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(UserRouter)
app.use(GrupoRouter)
app.use(AvaliacaoRouter)
app.use(MainRouter)

const port = 3000;



app.listen(port, function() {
    console.log(`server running on port ${port}`)
})