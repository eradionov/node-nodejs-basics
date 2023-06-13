import {createReadStream} from "fs";
import {dirname} from "../utils/dir.js";

const calculateHash = async () => {
    const { createHash } = await import('node:crypto');

    const __dirname = dirname(import.meta.url);
    const hash = createHash('sha256');
    const readStream = createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);

    readStream.pipe(hash)
        .setEncoding('hex')
        .pipe(process.stdout);
};

await calculateHash();