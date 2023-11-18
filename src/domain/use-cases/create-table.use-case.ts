// !: Objetivo de tener una responsabilidad unica
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase {
    // * Constructor es el primer metodo que se va a llamar al ejecutar la clase

    constructor(
        // ! DI - Dependency Injecton
    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let outPutMessage: string = '';
        for (let index = 1; index <= limit; index++) {
            outPutMessage += `${base} x ${index} = ${base * index}\n`
        }

        return outPutMessage;
    }
}