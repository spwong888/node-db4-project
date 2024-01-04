const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Salmon en Papillote' }
]

const ingredients = [
    { ingredient_name: 'broccoli', ingredient_unit: 'lbs' },
    { ingredient_name: 'pesto', ingredient_unit: 'lbs' },
    { ingredient_name: 'pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'lemon', ingredient_unit: 'slices' },
    { ingredient_name: 'chicken', ingredient_unit: 'kilos' },
    { ingredient_name: 'salmon', ingredient_unit: 'grams' },
]

const step_ingredients = [
    // Broccoli Pesto Pasta
    { quantity: 1, ingredient_id: 1, step_id: 1 },
    { quantity: 1, ingredient_id: 3, step_id: 2 },
    { quantity: 1, ingredient_id: 1, step_id: 3 },
    { quantity: 1, ingredient_id: 2, step_id: 3 },
    { quantity: 1, ingredient_id: 3, step_id: 3 },
    // Lemon Chicken
    { quantity: 1, ingredient_id: 5, step_id: 1 },
    { quantity: 1, ingredient_id: 4, step_id: 3 },
    // Salmon en Papillote
    { quantity: 1, ingredient_id: 6, step_id: 1 },
    { quantity: 1, ingredient_id: 4, step_id: 3 },
]

const steps = [
    // Broccoli Pesto Pasta
    { step_number: 1, step_text: 'Boil water', recipe_id: 1 },
    { step_number: 2, step_text: 'Cook pasta', recipe_id: 1 },
    { step_number: 3, step_text: 'Cook broccoli', recipe_id: 1 },
    // Lemon Chicken
    { step_number: 1, step_text: 'Season chicken', recipe_id: 2 },
    { step_number: 2, step_text: 'Cook chicken', recipe_id: 2 },
    { step_number: 3, step_text: 'Squeeze lemon', recipe_id: 2 },
    // Salmon en Papillote
    { step_number: 1, step_text: 'Season salmon', recipe_id: 3 },
    { step_number: 2, step_text: 'Wrap salmon in parchment paper', recipe_id: 3 },
    { step_number: 3, step_text: 'Bake salmon', recipe_id: 3 },
]
exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
    }