import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Eggs', 2),
    new Ingredient('Milk', 1),
    new Ingredient('Bread', 6),
    new Ingredient('Butter', 1),
    new Ingredient('Sugar', 1),
    new Ingredient('Coffee', 5)
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
