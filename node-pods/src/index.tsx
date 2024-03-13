import express from 'express';
import path from 'path';
import {parse} from 'csv-parse';
import fs from 'fs';
const cors = require('cors');
const app = express();

const PORT = 3000;

interface podData {
  name: string,
  link: string
}

function readPods() {
  const parser  = parse( {'delimiter': ', ', columns: true} )
  const readStream = fs.createReadStream( path.join(__dirname, 'podcasts.csv') ).pipe(parser);
  let csv : podData[] = []
  readStream.on('readable',()=>{
    let data = readStream.read()
    while(data != null){
      csv.push( {name: data.name,
                 link: data.link} )
      console.log(data.link)
      data = readStream.read()
    }
  })
  
  console.log('asdf',csv)
  return csv

}

function updatePodcasts( pod : {name: string; link: string; } ){
  fs.appendFile( path.join(__dirname, 'podcasts.csv'), `\n"${pod.name}", ${pod.link}\n`, (err)=>{
    console.error(err)
  })
}

const pods = readPods()


app.use(cors());
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  console.log('requested api')
 
  res.send(pods)
  

});

app.post('/api/add-feed', (req,res)=>{
  const newFeed = req.body;
  const podset = {}
  const pods = new Set<podData>( readPods() )


  res.status(200).json({ message: 'Data received'})
  console.log(newFeed.link)
  if( !pods.has(newFeed) )
    updatePodcasts( newFeed )
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});