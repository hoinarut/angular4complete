import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppingListSvc: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    this.shoppingListSvc.addIngredient(new Ingredient(
      this.nameInput.nativeElement.value, this.amountInput.nativeElement.value
    ));
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
