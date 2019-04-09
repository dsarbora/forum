import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../models/category.model';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
  providers: [CategoryService]
})
export class CategoryDetailsComponent implements OnInit {
  category: Category;
  categoryTitle: string;
  selectedPost: Post = null;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryTitle = urlParameters['title'];
    });
    this.category = this.categoryService.getCategoryByTitle(this.categoryTitle);
  }

  clickPost(post: Post){
    if(this.selectedPost == post){
      this.selectedPost = null;
    } else {
      this.selectedPost = post;
    }
  }

  showPost(post: Post){
    if(post == this.selectedPost){
      return "";
    } else {
      return "hidden";
    }
  }

  addNewPost(post: Post){
    this.category.posts.push(post);
  }
}
