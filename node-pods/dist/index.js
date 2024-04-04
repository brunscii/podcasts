"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
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
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const parser = (0, csv_parse_1.parse)({ 'delimiter': ', ', columns: true });
        const readStream = fs_1.default.createReadStream(path_1.default.join(__dirname, 'podcasts.csv')).pipe(parser);
        const csv = [];
        try {
            // readStream.on('readable',()=>{
            //   let data = readStream.read()
            //   while(data != null){
            //     // console.log(data)
            //     csv.push( data )
            //     data = readStream.read()
            //   }
            // })
            for (var _d = true, readStream_1 = __asyncValues(readStream), readStream_1_1; readStream_1_1 = yield readStream_1.next(), _a = readStream_1_1.done, !_a; _d = true) {
                _c = readStream_1_1.value;
                _d = false;
                const data = _c;
                csv.push(data);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = readStream_1.return)) yield _b.call(readStream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // readStream.destroy()
        // console.log('asdf',csv)
        // setTimeout( () => console.log('-------------------',csv), 500)
        // await console.log(csv)
        return csv;
    });
}
function updatePodcasts(pod) {
    fs_1.default.appendFile(path_1.default.join(__dirname, 'podcasts.csv'), `\n"${pod.name}", ${pod.link}`, (err) => {
        console.error(err);
    });
}
// const pods = readPods()
app.use(cors());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    console.log('requested api');
    setTimeout(() => readPods().then(pods => res.send(pods)), 100);
});
app.post('/api/add-feed', (req, res) => {
    const newFeed = req.body;
    const podset = new Set();
    readPods().then(pods => {
        pods.forEach(pod => {
            podset.add(pod.link);
            // console.log(pod) 
        });
    });
    setTimeout(() => {
        console.log('-=-=-=-==-=-=-=-=-=-=-=- Podset', podset);
        if (!podset.has(newFeed.link)) {
            updatePodcasts(newFeed);
        }
    }, 100);
    res.status(200).json({ message: 'Data received' });
    // if( !podset.has(newFeed.link) ){
    //   console.log(`${newFeed.link} not found in set`)
    //   updatePodcasts( newFeed )
    // }
});
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map