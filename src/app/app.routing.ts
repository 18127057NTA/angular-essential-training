import { Routes } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component";

//load file này với route objects
// path đầu cho media-item form
// path sau cho media-item list + tìm theo medium
// path default -> media item list + show all items

const appRoutes: Routes = [
  {
    path: 'add',
    component: MediaItemFormComponent
  },
  {
    path: ':medium',
    component: MediaItemListComponent
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];
