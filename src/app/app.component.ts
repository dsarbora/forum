import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit';

  masterCategoryList: Category[] = [
    new Category("news", "A place to share the news"),
    new Category("technology", "A technology discussion hub"),
    new Category("sports", "To talk about sports")
  ];

  newsPosts = [
    new Post("This is the news for today"),
    new Post("This was the news from yesterday")
  ];

  techPosts: Post[] = [
    new Post("This is good tech stuff"),
    new Post("Keep up to date with Angular")
  ];

  sportsPosts: Post[] = [
    new Post("Latest sports news"),
    new Post("Local sports team wins!")
  ];

  fillPosts(){
    this.masterCategoryList[0].posts = this.newsPosts;
    this.masterCategoryList[1].posts = this.techPosts;
    this.masterCategoryList[2].posts = this.sportsPosts;
  }
}
