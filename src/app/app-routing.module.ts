import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'comment',
    component:CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
