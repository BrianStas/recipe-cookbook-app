import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import {  Injectable } from "@angular/core";


@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();


    private recipes: Recipe[] = [
        new Recipe('Pizza',
             'Pizza is a classic round food',
              'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/e4e3949f-384f-42ea-b138-44d94c82cffe.jpeg',
              [
                new Ingredient('dough', 1),
                new Ingredient('sauce', 1),
                new Ingredient('cheese', 2),
                new Ingredient('meat', 2)
              ]),
        new Recipe('Pasta',
            'Pasta is a popular Italian dish',
            'https://www.allrecipes.com/thmb/gTibTRJ8MW87L0jMhAvXPjIDD94=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg',
            [
                new Ingredient('sauce', 1),
                new Ingredient('meat', 1),
                new Ingredient('vegetables', 1),
                new Ingredient('noodles', 2)
            ])
      ];

      constructor(private slService: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe; 
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}