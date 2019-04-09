import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent{
  @Output() newPostButtonClicked = new EventEmitter();
  newPost: boolean = false;

  addNewPost(newTitle: string, newText: string){
    let newPost: Post = new Post(newTitle, newText);
    this.newPostButtonClicked.emit(newPost);
    this.newPost = false;
  }

  showForm(){
    this.newPost = !this.newPost;
  }
}
