import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent} from './meal-list.component';
import { Meal } from './meal.model';

// parent component
@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
    <div class ="header">
      <h1>Mr. Meal Tracker</h1>
      </div>
      <meal-list
        [mealList]="Meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public Meals: Meal [];  // Meal[] (or Array<Meal>) identifies meals as an array of meals objects
  constructor(){
    this.Meals = [
      new Meal(0, "Cheeseburger", "Heavy but very very good", 303),
      new Meal(1, "Pizza", "thin-crust so not as many calories", 285),
      new Meal(2, "Cinnamon roll", "It was very sweet but delicious", 310),
      new Meal(3, "Turkey Sandwhich", "lean turkey on wheat", 178),
      new Meal(4, "Vanilla Ice Cream Cone", "deliciousness in a cone", 146),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{
  }
}
