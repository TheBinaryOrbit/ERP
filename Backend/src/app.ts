import express from 'express';
import { Request , Response } from 'express';
import 'dotenv/config';
import { ConnectDB } from '../Database/ConnectDb';


ConnectDB(process.env.DBURL)
export const app = express();


app.use(express.json())
app.use(express.urlencoded({extended : false}))


// test api
app.get('/api' , (req :  Request, res :  Response)=>{
  res.send('Har Har Mahadev');
})



const port : String = process.env.PORT;
app.listen(port, () => {
  return console.log(`Server Started at http://localhost:${port}`);
});
