import fs from "fs";
import {pipeline} from "stream/promises";
import {dirname} from "../utils/dir.js";

const write = async () => {
    const __dirname = dirname(import.meta.url);
    const writeStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    try {
        await pipeline(
            process.stdin,
            writeStream
        );
    } catch (error) {
        console.log('Stream error occurred');
    }
};

await write();