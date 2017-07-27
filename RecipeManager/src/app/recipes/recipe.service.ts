import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Ciorba Radauteana', 'O ciorba smechera',
      'https://savoriurbane.com/wp-content/uploads/2016/09/ciorba-radauteana-reteta-traditionala-savori-urbane-1024x678.jpg'),
    new Recipe('Varza a la Cluj', 'Super varza',
      'http://www.teoskitchen.ro/wp-content/uploads/2012/05/varza-a-la-cluj-4.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
