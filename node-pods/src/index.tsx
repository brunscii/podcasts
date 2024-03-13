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

async function readPods() : Promise<podData[]> {
  const parser  = parse( {'delimiter': ', ', columns: true} )
  const readStream = fs.createReadStream( path.join(__dirname, 'podcasts.csv') ).pipe(parser);
  const csv : podData[] = []
  // readStream.on('readable',()=>{
  //   let data = readStream.read()
  //   while(data != null){
  //     // console.log(data)
  //     csv.push( data )
  //     data = readStream.read()
  //   }
  // })
  for await( const data of readStream ){
    csv.push(data)
  }

  // readStream.destroy()
  
  // console.log('asdf',csv)
  // setTimeout( () => console.log('-------------------',csv), 500)
  // await console.log(csv)
  return csv
  
}

function updatePodcasts( pod : {name: string; link: string; } ){
  fs.appendFile( path.join(__dirname, 'podcasts.csv'), `\n"${pod.name}", ${pod.link}`, (err)=>{
    console.error(err)
  })
}

// const pods = readPods()

app.use(cors());
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  console.log('requested api')
  setTimeout( () => readPods().then( pods => res.send(pods)), 100)
  

});

app.post('/api/add-feed', (req,res)=>{
  const newFeed : podData = req.body;
  const podset = new Set()

  readPods().then(pods => {
    pods.forEach( pod => {
      podset.add(pod.link)
      // console.log(pod) 
    })
  })
  
  setTimeout( ()=>{

    console.log('-=-=-=-==-=-=-=-=-=-=-=- Podset',podset)
    if( !podset.has(newFeed.link) ){
      updatePodcasts(newFeed)
    }
  }, 100)




  res.status(200).json({ message: 'Data received'})

  // if( !podset.has(newFeed.link) ){
  //   console.log(`${newFeed.link} not found in set`)
  //   updatePodcasts( newFeed )
  // }
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`)
});