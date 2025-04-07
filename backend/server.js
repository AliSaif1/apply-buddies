import express from "express";
import cors from "cors";
import connectDB from './db.js';
import routerBranching from './routers/routerBranching.js';

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.use('/apply-buddies', routerBranching);

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});
