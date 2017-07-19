import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() onItemAdded = new EventEmitter<Ingredient>();
  ingredients: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    this.onItemAdded.emit(new Ingredient(
      this.nameInput.nativeElement.value, this.amountInput.nativeElement.value
    ));
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
