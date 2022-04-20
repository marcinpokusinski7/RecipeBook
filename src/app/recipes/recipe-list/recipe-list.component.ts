import { Component, OnInit } from '@angular/core';
import { Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "Make pizza with great cheese", "https://cdn.galleries.smcloud.net/t/galleries/gf-Khjk-FUGy-Lsd8_domowa-pizza-na-szybko-wedlug-karola-okrasy-latwy-przepis-na-wielka-wyzerke-1920x1080-nocrop.jpg"),
    new Recipe("Pizza", "Make pizza with great cheese", "https://cdn.galleries.smcloud.net/t/galleries/gf-Khjk-FUGy-Lsd8_domowa-pizza-na-szybko-wedlug-karola-okrasy-latwy-przepis-na-wielka-wyzerke-1920x1080-nocrop.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
