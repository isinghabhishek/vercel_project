import express from "express";
import cors from "cors";
import simpleGit from "simple-git"; 
import { generate } from "./utils"

const app = express();
app.use(cors())

//POSTMAN
app.post("/deploy", async(req, res) => {

});

app.post("/deploy", (req, res) => {
    const repourl = req.body.repourl;
    const id = generate(); // asd12
    await simpleGit().clone(repourl, `output/${id}`);

    res.json({});
})
app.listen(3000);