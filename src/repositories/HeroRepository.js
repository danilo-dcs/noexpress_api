import { readFile, writeFile } from 'node:fs/promises'

export class HeroRpository{

    constructor(){
        this.file = './database/heroes.table.json'

    }

    async #currentltyFileContent(){
        return JSON.parse(await readFile(this.file))
    }

    async create(hero){
        const currentFile = await this.#currentltyFileContent()
        currentFile.push(hero)
        writeFile(this.file, JSON.stringify(currentFile))
        return hero
    }

    async update(){}

    async find(){
        return this.#currentltyFileContent()
    }

    async delete(){}
}