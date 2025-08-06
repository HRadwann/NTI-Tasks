import { Routes } from '@angular/router';
import { PostsListComponent } from './features/posts/postslist/postslist.component';
import { PostCreateComponent } from './features/posts/postcreate/postcreate.component';
import { PostUpdateComponent } from './features/posts/postupdate/postupdate.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'create', component: PostCreateComponent },

  { path: 'update/:id', component: PostUpdateComponent },
];
