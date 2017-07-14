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

  formatDatePiece(piece: number) {
    return (piece < 10 ? '0' + piece : piece);
  }

  formatDate(date: string) {
    let d: any = new Date(date);
    let day: any = d.getDate();
    let month: any = d.getMonth() + 1;
    let year: number = d.getFullYear();

    day = this.formatDatePiece(day);
    month = this.formatDatePiece(month);

    return month + '/' + day + '/' + year;
  }
}
