import { Category } from './models/category.model';
import { Post } from './models/post.model';

export const CATEGORIES: Category[] = [
    new Category("news", "A place to share the news"),
    new Category("technology", "A technology discussion hub"),
    new Category("sports", "To talk about sports")
  ];

  CATEGORIES[0].posts=[
    new Post("News 1", "This is the news for today"),
    new Post("News 2", "This was the news from yesterday")
  ];

  CATEGORIES[1].posts = [
    new Post("Tech 1", "This is good tech stuff"),
    new Post("Tech 2", "Keep up to date with Angular")
  ];

  CATEGORIES[2].posts= [
    new Post("Sport 1", "Latest sports news"),
    new Post("Sport 2", "Local sports team wins!")
  ];
