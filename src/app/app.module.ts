import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { PostsService } from './posts.service';
import { CommentsService } from './comments.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    })
  ],
  providers: [
    PostsService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
