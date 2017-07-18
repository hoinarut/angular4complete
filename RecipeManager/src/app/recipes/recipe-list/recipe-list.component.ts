import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ciorba Radauteana', 'O ciorba smechera',
      'https://savoriurbane.com/wp-content/uploads/2016/09/ciorba-radauteana-reteta-traditionala-savori-urbane-1024x678.jpg'),
    new Recipe('Varza a la Cluj', 'Super varza',
      'http://www.teoskitchen.ro/wp-content/uploads/2012/05/varza-a-la-cluj-4.jpg')
  ];
  @Output() onRecipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
