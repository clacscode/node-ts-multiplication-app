import fs from 'fs'


export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
};

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
    fileType?: string;
};

export class SaveFile implements SaveFileUseCase {
    constructor(

    ) { };

    execute({ fileContent, fileDestination = 'outputs', fileName = 'table', fileType = 'txt' }: Options) {
        try {
            fs.mkdirSync(fileDestination, { recursive: true })
            fs.writeFileSync(`${fileDestination}/${fileName}.${fileType}`, fileContent)
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}
