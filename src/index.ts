import express from 'express';


const app = express();

const PORT = 3000;

app.use(express.static("public"))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index", { text: "World"})
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(PORT);



//npm run dev
// to run on server: npm run build to build everything into js, then npm run start