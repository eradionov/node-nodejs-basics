import fs from "fs";
import {pipeline} from "stream/promises";
import {dirname} from "../utils/dir.js";

const read = async () => {
    const __dirname = dirname(import.meta.url);
    const readStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);

    try {
        await pipeline(
            readStream,
            process.stdout
        );
    } catch (error) {
        console.log('Stream error occurred');
    }
};

await read();