import express, {Application , Request , Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';

dotenv.config()

const PORT : number = process.env.PORT ? Number (process.env.PORT) : 3000 ;

const app: Application = express();

//middlewares
app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test route -----------------------------------------------------------
app.get('/api' , testRoute);

function testRoute(req:Request , res:Response) :void {
  res.send("hello from a typescript backend");
}
//-----------------------------------------------------------------------

// application routes


// start application ---------------------------------------------------
app.listen(PORT , startApplication);

function startApplication(){
  console.log(`server running on PORT ${PORT}`);
}
//----------------------------------------------------------------------