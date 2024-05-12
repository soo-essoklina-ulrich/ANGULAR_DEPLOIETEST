import { Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  { path: '**', redirectTo: 'pro', pathMatch: 'full' },
  { path: 'pro', component: ProfileComponent },
];
