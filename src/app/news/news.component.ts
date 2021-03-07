import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  users:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    resp.subscribe((data) => this.users=data);
  }

}
