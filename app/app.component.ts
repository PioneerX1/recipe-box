import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Angular Recipe Box</h1>
      <h2>{{subheader}}</h2>
    </div>
    <ul>
      <li *ngFor="let currentRecipe of recipes">
        <div class="thumbnail">
          <div [class]="ratingColor(currentRecipe)">
            <h3>{{currentRecipe.title}}<span class="badge pull-right">rating: {{currentRecipe.rating}}</span></h3>
            <ul>
              <li *ngFor="let currentIngredient of currentRecipe.ingredients">
              <h4>{{currentIngredient}}</h4>
              </li>
            </ul>
            <ul>
              <li *ngFor="let currentDirection of currentRecipe.directions">
              <h5>{{currentDirection}}</h5>
              </li>
            </ul>
          </div>
        </div>
        <button (click)="editRecipe(currentRecipe)">Edit</button>
      </li>
    </ul>
    <hr>
    <div id="edit-recipe" *ngIf="selectedRecipe">
      <h3>Edit Recipe: {{selectedRecipe.title}}</h3>
      <div class="form-group">
        <label>Enter Recipe Title: </label>
        <input [(ngModel)]="selectedRecipe.title">
      </div>
      <div class="form-group">
        <label>Enter Recipe Rating: </label>
        <input [(ngModel)]="selectedRecipe.rating">
      </div>
      <button (click)="finishedEditing()">Done-zo!</button>
    </div>
  </div>
  `
})

export class AppComponent {
  subheader: string = 'A place where foods go to die.';
  recipes: Recipe[] = [
    new Recipe('French Onion Soup', ['onions', 'some nasty week-old cream'], ['1. Chop up some stanky onions and cry over the dinner you are about to have.', '2. Pour that week-old nasty cream over it.', '3. Serve with a side of sadness.'], '1'),
    new Recipe('Bean Dip', ['black beans', 'day-old, rancid queso'], ['1. Microwave these fine ingredients until they burn into a homogenous paste', '2. Serve in a small locked room with all your buddies.'], '2'),
    new Recipe('Trash Frappe', ['warm pre-made Starbucks frap mix', 'half-congealed whipped cream'], ['1. scavenge a thrown out Starbucks cup of frappuccino from trash can.', '2. Have a buddy pour it down the top of a gutter for you.', '3. Felch the frothy mix out of the bottom of the gutter.'], '3')
  ];
  selectedRecipe: Recipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  ratingColor(currentRecipe) {
    console.log(currentRecipe.rating);
    if (currentRecipe.rating === "3") {
      return "bg-danger";
    } else if (currentRecipe.rating === "2") {
      return "bg-warning";
    } else if (currentRecipe.rating === "1") {
      return "bg-info";
    } else {
      return "bg-default";
    }
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[], public rating: string) { }
}
