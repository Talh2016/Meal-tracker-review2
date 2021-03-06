import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyRatingPipe} from './calories.pipe';
import {DisplayMealDetailsComponent} from './display-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyRatingPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent, DisplayMealDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="showAll">Show All</option>
    <option value="showHealthy">Show healthy</option>
    <option value="showUnhealthy">Show unhealthy</option>
  </select>
  <div class="meal-display" *ngFor="#currentMeal of mealList | healthyRating:filterHealthy"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal===selectedMeal"
  >
    {{currentMeal.name}}
  </div>
  <display-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></display-meal-details>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "showAll";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(this.mealList.length, newMeal.name, newMeal.description, newMeal.calories)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
