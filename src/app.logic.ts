import fs from 'fs'
import { yarg } from './plugins/args.plugin'

interface Options {
    base: number,
    limit: number,
    showTable: boolean
}

const { b, l, s } = yarg;

const options: Options = {
    base: b,
    limit: l,
    showTable: s,
}

const multiplicacion = (options: Options) => {

    const { base, limit, showTable } = options;

    const title: string = `tabla-${base}`
    const path: string = title + '.txt'
    let data: string = ''

    for (let index = 1; index <= limit; index++) {
        const result: string = `${base} x ${index} = ${base * index}\n`
        data += result
    }

    if (showTable) {
        console.log(data)
    }

    writeFile(path, data);
}

const writeFile = (path: string, data: string) => {
    fs.writeFile(path, data, (err) => {
        if (err) throw err
        console.log('The file has been saved.')
    })
}

multiplicacion(options)
