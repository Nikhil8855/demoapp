import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp1 = this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    resp1.subscribe((data) => this.comment=data);
  }

}
