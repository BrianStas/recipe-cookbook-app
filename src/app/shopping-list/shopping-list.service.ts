
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Eggs', 2),
        new Ingredient('Milk', 1),
        new Ingredient('Bread', 6),
        new Ingredient('Butter', 1),
        new Ingredient('Sugar', 1),
        new Ingredient('Coffee', 5)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}