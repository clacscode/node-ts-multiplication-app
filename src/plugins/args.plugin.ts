import yargs from 'yargs';

import { hideBin } from 'yargs/helpers'

export const yarg = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'Name of file'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Destination file'
    })
    .option('e', {
        alias: 'extension',
        type: 'string',
        default: 'txt',
        describe: 'Text file extension'
    })
    .check((argv, options) => {

        if (argv.b < 1) throw 'Error: base must be greater than 0'
        if (argv.l === 0) throw 'Error: limit must be greater than 1'

        return true;
    })
    .parseSync()