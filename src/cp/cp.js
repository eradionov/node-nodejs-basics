import {spawn} from 'node:child_process';
import {dirname} from "../utils/dir.js";

const spawnChildProcess = async (args) => {
    const __dirname = dirname(import.meta.url);
    const childProcess = spawn(
        'node',
        [`${__dirname}/files/script.js`, ...args]
    );

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['--child', '--spawn']);
