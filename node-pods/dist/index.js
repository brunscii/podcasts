"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 3000;
console.log(path_1.default.join(__dirname, 'podcasts.csv'));
function readPods() {
    const parser = (0, csv_parse_1.parse)({ 'delimiter': ', ', columns: true });
    const readStream = fs_1.default.createReadStream(path_1.default.join(__dirname, 'podcasts.csv')).pipe(parser);
    let csv = [];
    readStream.on('readable', () => {
        let data = readStream.read();
        while (data != null) {
            csv.push({ name: data.name,
                link: data.link });
            console.log(data.link);
            data = readStream.read();
        }
    });
    console.log('asdf', csv);
    return csv;
}
const pods = readPods();
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    console.log('requested api');
    // let podDiv = ''
    // for( let p of pods ){
    //   podDiv = podDiv + `<a href=${p.link}>${p.link}</a><br/>`
    //   console.log(p)
    // }
    // // console.log(pods)
    // res.send(podDiv)
    res.send(pods);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map