import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private posts: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      posts => this.posts = posts.items,
      err => console.log(err)
    );
  }

}
