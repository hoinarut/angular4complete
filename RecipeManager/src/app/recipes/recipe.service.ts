import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Ciorba Radauteana', 'O ciorba smechera',
      'https://savoriurbane.com/wp-content/uploads/2016/09/ciorba-radauteana-reteta-traditionala-savori-urbane-1024x678.jpg',
      [
        new Ingredient('Rosii', 4),
        new Ingredient('Pui', 1),
        new Ingredient('Smantana', 0.5)
      ]),
    new Recipe('Varza a la Cluj', 'Super varza',
      'http://www.teoskitchen.ro/wp-content/uploads/2012/05/varza-a-la-cluj-4.jpg',
      [
        new Ingredient('Varza', 2),
        new Ingredient('Carne tocata', 1),
        new Ingredient('Bulion', 0.5)
      ])
  ];

  constructor(private shoppingListSvc: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSvc.addIngredients(ingredients);
  }
}
