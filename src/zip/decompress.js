import {pipeline} from "stream/promises";
import fs from "fs";
import zlib from "node:zlib";
import {dirname} from "../utils/dir.js";

const decompress = async () => {
    const __dirname = dirname(import.meta.url);

    try {
        await pipeline(
            fs.createReadStream(`${__dirname}/files/archive.gz`),
            zlib.createGunzip(),
            fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`)
        );
    } catch (error) {
        throw new Error('Decompression finished with error');
    }
};

await decompress();