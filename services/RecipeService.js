import Recipe from '../models/Recipe.js';

class RecipeService {
    async selectAll(userId) {
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
        } else {
            return [];
        }
    }
}

const service = new RecipeService();
export default service;