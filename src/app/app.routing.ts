import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

//Hàm import trả về một promise -> gọi then method để take action after promise đó resolved
// Trong then, vì ta muốn trả về loaded module -> sử dụng arrow function, đặt tên parameter là m: module

const appRoutes: Routes = [
  {path: 'add', loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)},
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
