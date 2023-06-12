import {readdir} from "fs/promises";
import {dirname} from "../utils/dir.js";
import {FILE_NOT_FOUND} from "../utils/fs_error_codes.js";

const list = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        const files = await readdir(`${__dirname}/files`);

        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        if (error.code === FILE_NOT_FOUND) {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await list();