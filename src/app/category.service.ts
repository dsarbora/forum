import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { Post } from './models/post.model';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(){
    return CATEGORIES;
  }

  getCategoryByTitle(categoryTitle: string){
    for(var i = 0; i < CATEGORIES.length; i++){
      if(CATEGORIES[i].title === categoryTitle){
        return CATEGORIES[i];
      }
    }
  }

}
