import { Post } from './post.model';

export class Category {
  posts : Post[];
  constructor(public title: string, public description: string){}
}
