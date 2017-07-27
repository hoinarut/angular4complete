import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListSvc: ShoppingListService) { }

  ngOnInit() {
    this.fetchIngredients();
    this.shoppingListSvc.ingredientAdded.subscribe(
      () => this.fetchIngredients()
    )
  }

  private fetchIngredients() {
    this.ingredients = this.shoppingListSvc.getIngredients();
  }
}
