import Recipe from '../models/Recipe.js';

class RecipeService {
    async selectRecipes(userId) {
        const response = await fetch("http://martha.jh.shawinigan.info/queries/select-recipes/execute", {
            method: 'POST',
            body: JSON.stringify({ id: userId }),
            headers: {
                'auth': btoa("jeffrey:8F96ba62a6f3d81*adcdbc8c8c5")
            }
        }).then((r) => r.json())

        console.log(response);

        if (response.success) {
            // retourner liste recette 
            return response.data.map(recipe => (new Recipe(recipe)));
        } else {
            return [];
        }
    }

    async insertRecipe(recipe, userId) {
        const response = await fetch("http://martha.jh.shawinigan.info/queries/insert-recipe/execute", {
            method: 'POST',
            body: JSON.stringify({
                category: recipe.category,
                name: recipe.name,
                duration_hours: recipe.durationHours,
                duration_minutes: recipe.durationMinutes,
                description: recipe.description,
                user_id: userId
            }),
            headers: {
                'auth': btoa("jeffrey:8F96ba62a6f3d81*adcdbc8c8c5")
            }
        }).then((r) => r.json())

        console.log(response);

        //todo
    }

    async deleteRecipe(id, userId) {
        const response = await fetch("http://martha.jh.shawinigan.info/queries/delete-recipe/execute", {
            method: 'POST',
            body: JSON.stringify({ id: id, user_id: userId }),
            headers: {
                'auth': btoa("jeffrey:8F96ba62a6f3d81*adcdbc8c8c5")
            }
        }).then((r) => r.json())

        //todo
    }

    async updateRecipe(recipe, userId) {
        const response = await fetch("http://martha.jh.shawinigan.info/queries/update-recipe/execute", {
            method: 'POST',
            body: JSON.stringify({
                category: recipe.category,
                name: recipe.name,
                duration_hours: recipe.durationHours,
                duration_minutes: recipe.durationMinutes,
                description: recipe.description,
                id: recipe.id,
                user_id: userId
            }),
            headers: {
                'auth': btoa("jeffrey:8F96ba62a6f3d81*adcdbc8c8c5")
            }
        }).then((r) => r.json())

        //todo
    }
}

const service = new RecipeService();
export default service;