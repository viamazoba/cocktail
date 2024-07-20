import axios from 'axios'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipies-schema'
import { Drink, SearchFilter } from '../types'

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)

    if(result.success) {
        return result.data
    }
}

export async function getRecipies (filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data: { drinks } } = await axios(url)
    const result = DrinksAPIResponse.safeParse(drinks)

    if (result.success) {
        return result.data
    }

}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data: { drinks } } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(drinks[0])
    if(result.success) {
        return result.data
    }

}