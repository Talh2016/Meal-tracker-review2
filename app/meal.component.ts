import { Component } from 'angular2/core';
import { Meal } from './meal.model';


  @Component({
      selector: 'meal-display',
      inputs: ['meal'],
      template: `
      <div class="mealInfo">
        <input *ngIf="meal.healthy" type="checkbox" checked (click)="toggleHealthy(false)"/>
        <input *ngIf="!meal.healthy" type="checkbox" (click)="toggleHealthy(true)"/>
        <label (click)="isSelected = !isSelected" [class.selected]="isSelected">{{ meal.name }}</label>
        <label> Meal Description: {{ meal.description }}</label>
        <label> Calories: {{ meal.calories }}</label>
      </div>
      `
  })
  export class MealComponent {
    public meal: Meal;
    public isSelected = false;
    toggleHealthy(setState: boolean){
      this.meal.healthy = setState;
    }
  }
