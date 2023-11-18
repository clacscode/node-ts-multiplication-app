import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface ServerOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
    extension: string;
}

export class ServerApp {

    static run({ base, limit, showTable, name, destination, extension }: ServerOptions) {

        const table = new CreateTable().execute({ base, limit });
        const wasCreate = new SaveFile().execute({ fileContent: table, fileDestination: destination, fileName: name, fileType: extension });

        if (showTable) console.log(table);

        (wasCreate)
            ? console.log('File created')
            : console.error('File not created')
    }
}