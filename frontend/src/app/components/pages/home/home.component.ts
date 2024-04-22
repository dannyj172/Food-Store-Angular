import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[]= [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((params)=>{
      //tsconfig change to be able to use params.searchTerm instead, 43:30 in the tutorial
      if(params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else 
        this.foods = foodService.getAll();
    })
  }


  ngOnInit(): void {
    
  }

}
