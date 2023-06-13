import {cp} from "fs/promises";
import {dirname} from "../utils/dir.js";
import {rename as fileRename} from 'fs/promises';
import {COPY_FILE_EXISTS, FILE_NOT_FOUND} from "../utils/fs_error_codes.js";

const rename = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        await fileRename(
            `${__dirname}/files/wrongFilename.txt`,
            `${__dirname}/files/properFilename.md`
        );
    } catch (error) {
        if ([FILE_NOT_FOUND, COPY_FILE_EXISTS].indexOf(error.code) !== -1) {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await rename();