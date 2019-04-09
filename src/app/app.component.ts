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

  masterCategoryList: Category[];

}
