"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = 3000;
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
function updatePodcasts(pod) {
    fs_1.default.appendFile(path_1.default.join(__dirname, 'podcasts.csv'), `\n"${pod.name}", ${pod.link}\n`, (err) => {
        console.error(err);
    });
}
const pods = readPods();
app.use(cors());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    console.log('requested api');
    res.send(pods);
});
app.post('/api/add-feed', (req, res) => {
    const newFeed = req.body;
    const podset = {};
    const pods = new Set(readPods());
    res.status(200).json({ message: 'Data received' });
    console.log(newFeed.link);
    if (!pods.has(newFeed))
        updatePodcasts(newFeed);
});
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map