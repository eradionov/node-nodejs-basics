import { pipeline } from 'stream/promises';
import zlib from "node:zlib";
import fs from "fs";
import {dirname} from "../utils/dir.js";

const compress = async () => {
    const __dirname = dirname(import.meta.url);

    try {
        await pipeline(
            fs.createReadStream(`${__dirname}/files/fileToCompress.txt`),
            zlib.createGzip(),
            fs.createWriteStream(`${__dirname}/files/archive.gz`)
        );
    } catch (error) {
        throw new Error('Compression finished with error');
    }
};

await compress();