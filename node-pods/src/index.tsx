import express from 'express';
import path from 'path';
import {parse} from 'csv-parse';
import fs from 'fs';

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

const pods = readPods()

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  console.log('requested api')

  
  
  // let podDiv = ''
  // for( let p of pods ){
  //   podDiv = podDiv + `<a href=${p.link}>${p.link}</a><br/>`
  //   console.log(p)
  // }
  // // console.log(pods)
  // res.send(podDiv)
  res.send(pods)

});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});