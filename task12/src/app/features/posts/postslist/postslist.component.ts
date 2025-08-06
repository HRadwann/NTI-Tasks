import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from '../services/posts.services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss'],
  providers: [PostsService],
})
export class PostsListComponent implements OnInit {
  posts: any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data || [];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  deletePost(id: number) {
    console.log(id);

    this.postsService.deletePost(id).subscribe({
      next: (res) => {
        console.log(res);
        this.getPosts();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        alert('POST DELETED !!!');
      },
    });
  }
}
