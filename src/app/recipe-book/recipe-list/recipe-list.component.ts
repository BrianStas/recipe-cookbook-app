import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Pizza is a popular Italian dish', 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/e4e3949f-384f-42ea-b138-44d94c82cffe.jpeg'),
    new Recipe('Pasta', 'Pasta is a popular Italian dish', 'https://www.allrecipes.com/thmb/gTibTRJ8MW87L0jMhAvXPjIDD94=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg')
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }
}
