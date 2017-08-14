import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Angular Recipe Box</h1>
    </div>
    <ul>
      <li *ngFor="let currentRecipe of recipes">
        <h4>{{currentRecipe.title}}</h4>
        <h5>{{currentRecipe.ingredients}}</h5>
        <h6>{{currentRecipe.directions}}</h6>
      </li>
    </ul>
  </div>
  `
})

export class AppComponent {
  subheader: string = 'A web app to keep track of recipes';
  recipes: Recipe[] = [
    new Recipe('French Onion Soup', 'onions', '1. Chop up some stanky onions and cry over the dinner you are about to have. 2. Pour that week-old nasty cream over it. 3. Serve with a side of sadness')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
