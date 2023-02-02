import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = process.env.PROT || 4000;

// minddlewares 
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

/** HTTP GET Request*/
app.get('/', (req, res) => {
    res.status(201).json("Home page requested")
});

/** start server */
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})