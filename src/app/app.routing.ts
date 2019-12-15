import { RouterModule, Routes } from '@angular/router';
import {AddTheatreComponent} from "./add-theatre/add-theatre.component";
import {ListTheatreComponent} from "./list-theatre/list-theatre.component";
import {EditTheatreComponent} from "./edit-theatre/edit-theatre.component";

const routes: Routes = [
  { path: 'add-theatre', component: AddTheatreComponent },
  { path: 'list-theatre', component: ListTheatreComponent },
  { path: 'edit-theatre', component: EditTheatreComponent },
  { path: '', component: ListTheatreComponent }
];

export const routing = RouterModule.forRoot(routes);
