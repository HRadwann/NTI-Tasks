import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostsService) {}
  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.posts = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('fetch data done');
      },
    });
  }
}
