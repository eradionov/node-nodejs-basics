import {writeFile} from 'fs/promises';
import {dirname} from "../utils/dir.js";
import {FILE_EXISTS} from "../utils/fs_error_codes.js";

const create = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        await writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        if (error.code === FILE_EXISTS) {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await create();