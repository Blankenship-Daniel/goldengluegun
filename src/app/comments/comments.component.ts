import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() commentsUrl: string;
  private comments: any[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getComments(this.commentsUrl).subscribe(
      comments => {
        this.comments = comments.items;
        console.log(comments);
      },
      err => console.log(err)
    );
  }
}
