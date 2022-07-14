
export class HeroesService{

    constructor(){}

    async createHeroes(heroes){
        console.log("Creating heroes...")
        console.log(heroes)
        return heroes
    }
}