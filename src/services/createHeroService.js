import Hero from "../entities/hero.entity.js"
import { HeroRpository } from "../repositories/HeroRepository.js"

const createHeroService = async (hero) => {

    const heroRepository = new HeroRpository()

    const newHero = new Hero(hero)

    const createdHero = await heroRepository.create(newHero)

    return createdHero
}

export { createHeroService }